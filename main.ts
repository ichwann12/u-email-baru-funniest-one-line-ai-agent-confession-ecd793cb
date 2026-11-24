// Funniest One-Line AI Agent Confession — make.fun entry
// Reads the confession from entry.txt (repo root) and writes it, exactly,
// to <output>/entry.txt. Node 22, stdlib only, no network, no wall clock,
// no files outside the repo. The output file holds the single line only —
// no trailing newline, no extra text — so the gate sees exactly 1-200 chars.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8");
const trimmed = line.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), trimmed, "utf8");
