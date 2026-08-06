"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="not-found shell">
      <div>
        <div className="eyebrow">Unexpected error</div>
        <h1>This view could not be loaded.</h1>
        <button className="button" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  );
}
