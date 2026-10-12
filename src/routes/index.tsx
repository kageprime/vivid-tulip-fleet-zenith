import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // pool.html must be the preview document itself. Nesting it in an iframe
    // is blocked by the preview proxy CSP (frame-ancestors https://grok.com).
    throw redirect({ href: "/pool.html" });
  },
});
