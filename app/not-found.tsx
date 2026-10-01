import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container hero">
      <h1>404</h1>
      <p className="lead">Touch Web Agency</p>
      <p>
        <Link href="/hy">Հայերեն</Link>
        {" · "}
        <Link href="/ru">Русский</Link>
        {" · "}
        <Link href="/en">English</Link>
      </p>
    </main>
  );
}
