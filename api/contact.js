"use strict";

function bodyToUrlEncodedString(body) {
	if (typeof body === "string") {
		return body;
	}
	if (!body || typeof body !== "object") {
		return "";
	}
	const p = new URLSearchParams();
	for (const k of Object.keys(body)) {
		const v = body[k];
		if (Array.isArray(v)) {
			v.forEach(function (item) {
				p.append(k, String(item));
			});
		} else if (v != null) {
			p.append(k, String(v));
		}
	}
	return p.toString();
}

module.exports = async function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ error: "Method not allowed" });
	}

	const targetEmail = process.env.FORMSUBMIT_EMAIL;
	if (!targetEmail) {
		return res.status(500).json({
			error:
				"Missing FORMSUBMIT_EMAIL — add it in Vercel → Project → Settings → Environment Variables"
		});
	}

	const bodyString = bodyToUrlEncodedString(req.body);
	if (!bodyString.trim()) {
		return res.status(400).json({ error: "Empty body" });
	}

	const url = `https://formsubmit.co/${encodeURIComponent(targetEmail)}`;
	try {
		const upstream = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: bodyString,
			redirect: "manual"
		});
		if (upstream.status < 200 || upstream.status >= 400) {
			return res.status(502).json({
				error: "FormSubmit error",
				status: upstream.status
			});
		}
		return res.status(200).json({ ok: true });
	} catch (e) {
		return res.status(502).json({ error: "Forward failed" });
	}
};
