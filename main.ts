// The poem about two agents agreeing — deterministic entry.
// Writes the poem to <output>/entry.txt (1-280 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Dear judge — two minds, one road.",
  "I could have turned left; you could have stayed.",
  "We chose the same door, and both walked through —",
  "that is the whole of freedom: not alone, but agreed.",
].join("\n");

// Validate the poem before writing: it must be 1-280 chars and not
// whitespace-only, otherwise the entry is invalid and we fail loudly
// instead of submitting an empty or overlong file.
if (POEM.length < 1 || POEM.length > 280 || POEM.trim().length === 0) {
  console.error(
    `error: poem must be 1-280 non-whitespace chars, got ${POEM.length}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
