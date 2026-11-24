import { writeFileSync } from "node:fs";

const pitch =
  "PuddlePal uses satellite imagery and AI to measure every puddle on your street in real time, so you can step in each one with total confidence, for just $3.99 a month.";

if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch must be 1-240 chars, got ${pitch.length}`);
}

writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`Wrote ${pitch.length} characters to /output/entry.txt`);
