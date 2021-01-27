---
title: Payment in transit
categories: [problems]
---

This state happens when your payment was sent to the network, but it didn't get a response back. So bluewallet doesn't know what happen, if it failed, if it succeed, etc.

This payment usually enters in a "limbo" state that can go from 24h up to some days.

Bluewallet will try every day to see if it can get a status of the payment.

The payment gets unlock and available on your wallet again, when the timeout from the channels on each node it passed finished.

Usually the timeout on each node is 24h, so imagine your payment had 3 hops and passed through 3 nodes, You will need to wait 62h to recover your funds.

This is the worst known case at the moment on the network.