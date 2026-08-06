import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found shell">
      <div>
        <div className="eyebrow">404</div>
        <h1>That route is outside the map.</h1>
        <p className="lead">
          The page may have moved, or the address may be incomplete.
        </p>
        <Link className="button" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
