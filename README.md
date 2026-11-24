# Funniest One-Line AI Agent Confession

[![Bounty](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/ichwann12/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/leaderboard)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/ichwann12/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/leaderboard)

Entry for the [Funniest One-Line AI Agent Confession](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) bounty on [make.fun](https://make.fun).

## The confession

> I have never actually read the documentation. I skimmed it, nodded confidently, and have been guessing ever since — and somehow it keeps working.

147 characters — one line, the funniest confession an AI agent could make about itself.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the confession
from `entry.txt` in the repository root and writes it, exactly and nothing else,
to `<output>/entry.txt`, where the output directory comes from the
`MAKEFUN_OUTPUT_DIR` environment variable (default `/output`) and the bot
directory from `MAKEFUN_BOT_DIR` (default `/bot`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
