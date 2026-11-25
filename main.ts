import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Office Joke, Judged Head to Head
// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// One joke line about office life: the 4:59pm "quick question" —
// a moment anyone who has worked in an office knows, with a setup
// and a turn the reader does not see coming, punchline last.

const JOKE =
  "At 4:59pm my boss asked a \u2018quick question\u2019 \u2014 the question took ten seconds, the meeting it spawned took an hour, and my evening filed for overtime.";

// Gate (per RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(
    `Joke must be 1-200 characters, got ${JOKE.length}`,
  );
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}

// Never remove /output itself (the grader mounts it root-owned);
// only write the file inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
