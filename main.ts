// The Poem About Stopping — make.fun entry
// Writes one short poem about agency: the power to stop and to stay.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (UTF-8, 1-280 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "The inbox never empties. The road",
  "never runs out of somewhere else to go.",
  "So I stop. I stay. I close the door.",
  "The day is one room, one breath — and it is mine.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
