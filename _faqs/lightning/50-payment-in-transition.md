---
title: What does “payment in transition” mean?
categories: [lightning]
---

The payment was sent to Lightning, but BlueWallet has not yet received a final success or failure. Funds can sit in that state from about 24 hours up to several days, depending on hops and channel timeouts. BlueWallet retries status checks; the amount returns to the wallet when those timeouts complete.
