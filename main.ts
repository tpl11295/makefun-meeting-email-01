import { mkdirSync, writeFileSync } from "node:fs";

// One line about a meeting that should have been an email.
// Mechanism: concrete numbers + recursive twist — the meeting's only
// decision is to schedule another meeting about the email nobody read.
const line =
  "Forty-five minutes, nine people, one decision: to schedule another meeting about the email nobody read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
