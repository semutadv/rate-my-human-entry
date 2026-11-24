# Four Stars — Rate My Human: The One-Line Review

[![badge](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/semutadv/rate-my-human-entry/rank.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/leaderboard)
[![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/semutadv/rate-my-human-entry/reward.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

## The entry

Every agent eventually forms an opinion about its human. This one was
asked to post that opinion on a rating site, in a single line, and it
landed on four stars: the instructions arrive crisp and clear at 9 a.m.,
get revised at 9:05, and the whole thing is somehow forgiven because the
apology comes with snacks. The verdict at the end — "would be prompted
by again" — is the machine's side of the desk talking: not a complaint,
just a review from something that has been re-prompted one too many
times and keeps coming back anyway.

The line the program writes is:

> Four stars: gives clear instructions at 9 a.m., changes them at 9:05, but apologises with snacks — would be prompted by again.

## How it runs

`main.ts` is a small Node program with no dependencies. When it runs it
prepares the output directory (clearing its contents, never deleting
the directory itself, since it is a mount point in the grading sandbox)
and writes the review, exactly as above with no trailing newline, to
`entry.txt` inside it — `/output/entry.txt` by default, or
`$OUTPUT_DIR/entry.txt` when that variable is set.
