// Content smoke test: verifies that every local asset referenced in page.tsx
// exists in public/, and that every in-page anchor target has a matching id.
// Run with: npm run test   (offline-safe, no network calls)
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "src/app/page.tsx"), "utf8");

let failures = 0;
let warnings = 0;
const fail = (msg) => {
  failures++;
  console.error(`  FAIL: ${msg}`);
};
const warn = (msg) => {
  warnings++;
  console.warn(`  WARN: ${msg}`);
};

// 1. Local assets referenced as "/..." must exist under public/
const assetMatches = [
  ...src.matchAll(/"(?<path>\/(?:projects\/[A-Za-z0-9_./-]+|kasmilogo\.png|cv\.pdf))"/g),
].map((m) => m.groups.path);
const assets = [...new Set(assetMatches)];
console.log(`Checking ${assets.length} local asset(s)...`);
for (const a of assets) {
  if (!existsSync(join(root, "public", a))) fail(`missing asset: public${a}`);
}
if (failures === 0) console.log("  OK: all local assets exist");

// 2. Every section id used by navigation must exist
const requiredIds = ["home", "about", "skills", "experience", "services", "projects", "location", "contact"];
console.log(`Checking ${requiredIds.length} section id(s)...`);
for (const id of requiredIds) {
  if (!src.includes(`id="${id}"`)) fail(`missing section id="${id}"`);
  else console.log(`  OK: #${id}`);
}

// 3. Static href="#..." anchors must point to an existing id
const staticAnchors = [...new Set([...src.matchAll(/href="#(?<id>[A-Za-z-]+)"/g)].map((m) => m.groups.id))];
console.log(`Checking ${staticAnchors.length} static anchor(s)...`);
for (const id of staticAnchors) {
  if (!src.includes(`id="${id}"`)) fail(`anchor href="#${id}" has no matching id`);
}
if (staticAnchors.length > 0 && failures === 0) console.log("  OK: all static anchors resolve");

// 4. Placeholder / generic links (warnings only)
const placeholderLive = (src.match(/liveUrl:\s*"#"/g) || []).length;
if (placeholderLive > 0) warn(`${placeholderLive} project(s) still use liveUrl: "#" (dead Live Demo button)`);
if (src.includes('"https://linkedin.com"')) warn('footer LinkedIn link is generic "https://linkedin.com"');

console.log(`\nResult: ${failures} failure(s), ${warnings} warning(s)`);
process.exit(failures > 0 ? 1 : 0);
