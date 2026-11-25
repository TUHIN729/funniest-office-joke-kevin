[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/TUHIN729/funniest-office-joke-kevin/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/TUHIN729/funniest-office-joke-kevin/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

# The Funniest Office Joke, Judged Head to Head

One funny office joke line — the whole entry. The program writes a single
line about office life to `/output/entry.txt`, for the make.fun bounty
"The Funniest Office Joke, Judged Head to Head"
([bounty page](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)).

The joke turns on a moment anyone who has worked in an office knows: the
"quick question" that lands at 4:59pm. It has a real setup and a turn the
reader does not see coming, lands in one line, and the punchline comes last.

## The gate

`/output/entry.txt` must be UTF-8 text of 1 to 200 characters, not only
white space. `main.ts` validates the line before writing it — it throws
instead of writing an out-of-spec line — and never removes the `/output`
directory itself (the grader mounts it root-owned); it only writes the
file inside it.

## Run

```sh
node main.ts
```

Deterministic, no network, no randomness. Requires Node 22.18 or later
(the grader runs Node 22.23.4).
