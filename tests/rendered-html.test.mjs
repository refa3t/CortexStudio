import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Cortex Studio portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Cortex Studio — Intelligent Operational Systems<\/title>/i);
  assert.match(html, /Where intelligence/);
  assert.match(html, /BellaCity Factory ERP/);
  assert.match(html, /QuickServe/);
  assert.match(html, /Mohamed Elrefaey/);
  assert.match(html, /Mohamedahmed1422001@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("includes social metadata and accessible navigation", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /property="og:image" content="\/og\.png"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /aria-label="Toggle navigation"/i);
  assert.match(html, /aria-label="Filter projects"/i);
});
