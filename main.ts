import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one absurd terms-of-service clause, 152 characters long.
// It fines the reader $0.02 for every blink past ten blinks per minute,
// billed monthly in arrears — an absurd clause for an absurd contest.
// The clause is a single sentence, well inside the 1–200 character limit,
// and the program writes it verbatim with no trailing newline.
const LINE =
  "You agree that blinking more than ten times per minute constitutes excessive use; each excess blink incurs a $0.02 surcharge, billed monthly in arrears.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
