import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the volleyball development site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Spirit Volleyball Edmonton/i);
  assert.match(html, /Upcoming beginner program for girls ages 10-12/i);
  assert.match(html, /https:\/\/forms\.cloud\.microsoft\/r\/vjf6Kp2SpV/i);
  assert.match(html, /volleyballgirls2026@gmail\.com/i);
  assert.match(html, /Serving/i);
  assert.match(html, /Passing/i);
  assert.match(html, /Setting/i);
  assert.match(html, /Attacking/i);
  assert.match(html, /Game strategy/i);
  assert.match(html, /Early Bird/i);
  assert.match(html, /August 21, 2026/i);
  assert.match(html, /\$325/i);
  assert.match(html, /\$350\/player/i);
  assert.match(html, /two instalments/i);
  assert.match(html, /Coaching Team/i);
  assert.match(html, /Head Coach/i);
  assert.match(html, /Nancy/i);
  assert.match(html, /coach-nancy\.png/i);
  assert.match(html, /Esther/i);
  assert.match(html, /coach-esther\.png/i);
  assert.match(html, /Assistant Coach/i);
  assert.match(html, /Build skills, confidence, and friendships/i);
  assert.match(html, /Kyntrix Technology Solutions Ltd\./i);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/i);
});

test("keeps starter preview files out of the finished site", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /volleyball-hero\.png/);
  assert.match(page, /spirit-volleyball-logo\.png/);
  assert.match(page, /coach-nancy\.png/);
  assert.match(page, /coach-esther\.png/);
  assert.match(layout, /Spirit Volleyball Edmonton \| Ages 10-12/);
  assert.doesNotMatch(page + layout + packageJson, /codex-preview|SkeletonPreview|react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
