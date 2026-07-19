// This content is rendered on the server (via dangerouslySetInnerHTML in
// a Server/Client Component during SSR) and sent to the browser as part
// of the initial HTML document. Because it's part of the raw HTML stream
// the browser parses on load — not a client-side-only DOM mutation — all
// embedded <script> tags execute natively via the browser's own HTML
// parser, in document order, exactly as they did in the original static
// page. No manual re-execution is needed (and doing so double-runs every
// script, which breaks non-idempotent widgets like Tilda's slider/carousel
// init).
export function TildaBody({ html }: { html: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
