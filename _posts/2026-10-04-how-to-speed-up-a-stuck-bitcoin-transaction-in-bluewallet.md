---
layout: post
title: "How to speed up a stuck bitcoin transaction in BlueWallet"
description: "Is your pending bitcoin transaction stuck? Speed it up with Replace-By-Fee in BlueWallet, cancel it, or learn when to just wait."
date: 2026-10-04 09:00:00 +0000
image: blog/bluewallet-speed-up.jpg
---

You sent bitcoin, and it is still pending. The fee was too low for a busy mempool, so miners are picking other transactions first. Your coins are safe. The payment is waiting in line.

BlueWallet lets you move it up the line with Replace-By-Fee (RBF). Here is how. If you only want to know what pending means, start with [Pending transactions](/docs/pending-transactions/).

## 1. Check your pending bitcoin transaction

From the home screen, open the wallet you sent from. Tap the transaction in the list.

The blue **Pending** card means the payment is in the mempool and has no confirmations yet. While BlueWallet shows **Analyzing…**, it is estimating how long confirmation may take.

## 2. Tap Speed Up

Tap **Speed Up**. BlueWallet builds a new version of the same payment with a higher fee and broadcasts it. Miners see the better fee and are more likely to include it in the next blocks.

The recipient and amount stay the same. Only the fee goes up.

## 3. Or tap Cancel

Changed your mind? Tap **Cancel** when it is offered. BlueWallet spends the same coins back to your own wallet with a higher fee. Once that version confirms, the original payment is replaced and the funds are yours again.

## If Speed Up and Cancel are missing

Both buttons appear only on sends you made from this wallet that support Replace-By-Fee. Received payments show neither, because the sender controls that transaction.

Without the buttons, the payment can still confirm on its own as the mempool clears. During busy periods, that takes patience. You can check its progress with the explorer link and the **Network Fee** in the Details section.

## When pending clears

Once the transaction is in a block, the status card changes. A send turns red and a receive turns green, each with its confirmation count. BlueWallet refreshes this for you. See [Transaction status](/docs/transaction-status/) for what each part of the screen means.

## Avoid the wait next time

On the send screen, tap the fee estimate and choose a faster rate when the payment is urgent. [Sending a bitcoin transaction](/docs/send-bitcoin-transaction/) walks through the whole flow. For full control over which coins pay, use [coin control](/how-to-freeze-and-label-coins-in-bluewallet/). Built the transaction elsewhere? You can [broadcast it](/docs/broadcast-transaction/) from BlueWallet too.

Related reading: [Pending transactions](/docs/pending-transactions/), [How to freeze and label coins in BlueWallet](/how-to-freeze-and-label-coins-in-bluewallet/), [Broadcast a transaction](/docs/broadcast-transaction/).
