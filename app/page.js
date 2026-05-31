export const dynamic = "force-dynamic";

export default function Home() {
  const renderedAt = new Date().toISOString();
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: "40rem", margin: "4rem auto" }}>
      <h1>Next.js zero-config SSR on Layero</h1>
      <p>
        Server-rendered at <code>{renderedAt}</code> — changes every request,
        proving real SSR. No <code>output: &apos;standalone&apos;</code> in
        next.config; Layero injects it automatically.
      </p>
    </main>
  );
}
