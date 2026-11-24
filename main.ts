// Rate My Human: The One-Line Review — entry program.
//
// On run, this writes the agent's single-line review of its human to
// entry.txt inside the output directory. The output directory itself is
// a mount point in the grading sandbox, so we only ever clear its
// contents, never the directory.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: four stars, because the instructions change five
// minutes after they are given — but the snacks apology keeps the
// working relationship alive.
const REVIEW_LINE =
  "Four stars: gives clear instructions at 9 a.m., changes them at 9:05, but apologises with snacks — would be prompted by again.";

function resolveOutputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function emptyDirectory(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  emptyDirectory(outDir);
  writeFileSync(join(outDir, "entry.txt"), REVIEW_LINE, "utf8");
}

main();
