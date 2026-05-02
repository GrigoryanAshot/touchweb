"use strict";

require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = path.join(__dirname);
const targetEmail = process.env.FORMSUBMIT_EMAIL;

async function forwardToFormSubmit(bodyString) {
	const url = `https://formsubmit.co/${encodeURIComponent(targetEmail)}`;
	const upstream = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: bodyString,
		redirect: "manual"
	});
	return upstream;
}

app.post(
	"/api/contact",
	express.text({ type: "application/x-www-form-urlencoded", limit: "100kb" }),
	async (req, res) => {
		if (!targetEmail) {
			return res
				.status(500)
				.type("text/plain")
				.send("Missing FORMSUBMIT_EMAIL in .env — copy .env.example to .env and set it.");
		}
		const bodyString = typeof req.body === "string" ? req.body : "";
		if (!bodyString.trim()) {
			return res.status(400).type("text/plain").send("Empty form body");
		}
		try {
			const upstream = await forwardToFormSubmit(bodyString);
			if (upstream.status < 200 || upstream.status >= 400) {
				return res
					.status(502)
					.type("text/plain")
					.send(`FormSubmit returned HTTP ${upstream.status}`);
			}
			return res.status(200).json({ ok: true });
		} catch (err) {
			console.error(err);
			return res.status(502).type("text/plain").send("Could not reach FormSubmit");
		}
	}
);

app.use(express.static(ROOT));

app.listen(PORT, () => {
	console.log(`Open http://localhost:${PORT}/contact.html (do not use file://)`);
});
