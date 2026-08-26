---
layout: post
title: "How to set up a watch-only wallet in BlueWallet"
date: 2026-08-26 09:00:00
author: nuno
categories: [guides, watch-only]
description: "Watch balances and build transactions without putting keys on that phone. Import an XPUB, not a seed."
image: blog/watch-only-wallet.jpg
---

A watch-only wallet is a pair of glasses, not a vault. It can see your bitcoin. It cannot spend it. The keys live somewhere else: an old phone in airplane mode, a hardware wallet, a paper backup you do not want on this device.

That is the whole trick. You get a live view of cold storage on the phone you actually carry, and the private keys never take the trip.

If you wanted a complete tour of self-custody, that post already exists. This one does one job: put a watch-only wallet on BlueWallet.

## What a watch-only wallet actually is

It tracks balances, transactions, and receiving addresses without storing private keys on that device. You import an extended public key (xpub, ypub, or zpub) or a single public address. The app can generate new receive addresses, show you what moved, and even build a transaction. Signing happens somewhere that still has the seed.

That split is the point. Your everyday phone is online, nosy, and convenient. The keys are not.

## What you'll need

- BlueWallet on the phone you carry. Official builds live on the [download page](/download/).
- The public side of the wallet you want to watch: an XPUB from the device that holds the keys, or one address if you only care about that output.
- Optionally, a way to sign later: an offline phone, a hardware wallet, or another BlueWallet that still has the seed. You do not need that for watching. You need it the day you spend.

Do not import a recovery phrase here. A seed on this phone is a hot wallet. Different tool. Different article.

## Set it up

Three taps. Same path as [Watch-only](/watch-only/).

1. **Tap +** on the home screen (or Add now).
2. **Tap Import wallet.** You are not creating a new seed. You are pointing BlueWallet at keys that already exist somewhere else.
3. **Paste or scan the public key or address.** An XPUB as a QR from the cold device is the usual path. A single address works if you only want to watch that one output.

BlueWallet treats this as watch-only because there is no private key in the payload. If the import asks for a seed, you grabbed the wrong QR.

On the device that holds the keys, the public side is usually **Wallet details, then Show Wallet XPUB**. zpub is the usual pair for a Native SegWit wallet.

## XPUB or a single address

Use an extended public key when you want the wallet to keep minting fresh receive addresses. That is how you watch a real account, including an old phone in airplane mode or a hardware wallet.

Import a single address only when you mean that one output. A donation address. A leftover from a paper wallet. Not your savings account.

An XPUB cannot spend. It can reveal every address and balance in that account. Share it with wallets you trust to watch. Do not tweet it. Do not paste it into a "portfolio tracker" you just met.

## Can you send from it

Not by itself. There is no key on this phone to sign.

You can still build the payment on the watch-only side, then sign it on the cold device and broadcast from the phone you carry. QR codes or a file. Same dance as [Sign a transaction offline](/docs/sign-offline/).

If you have not set up the cold side yet, stop here. Watching is already useful. Spending can wait until the keys have a home that is not this phone. The old-phone version of that home is [How to Turn an Old Phone Into a Bitcoin Cold Wallet](/old-phone-bitcoin-cold-wallet/).

## Common mistakes

- **Importing the seed "just to see the balance."** That puts the keys on the device you were trying to keep dumb. Use the XPUB.
- **Watching one address and reusing it forever.** If you have an XPUB, use it. New addresses exist for a reason.
- **Treating watch-only as backup.** If this phone dies, you have not lost the coins. You have lost the view. The backup is still the seed, on paper or steel, on the cold device.
- **Sharing the XPUB like it is a username.** It will not let someone steal funds. It will let them watch everything you receive.

## Hardware wallets and old phones

Same pattern. Import the device as watch-only with its extended public key. Build on BlueWallet. Sign on the device (PSBT, QR or file). Bring the signed transaction back and broadcast.

That works with PSBT-compatible hardware wallets, and with a spare phone you already turned into cold storage. Toggle-level detail lives in [Use BlueWallet offline as a cold wallet](/docs/offline-cold-wallet/) and [Sign a transaction offline](/docs/sign-offline/).

You do not need a new gadget to start watching. You need the public key, and the discipline not to import the private one.

---

*Related reading: [Watch-only Wallet](/watch-only/) · [How to Turn an Old Phone Into a Bitcoin Cold Wallet](/old-phone-bitcoin-cold-wallet/) · [Sign a transaction offline](/docs/sign-offline/) · [Use BlueWallet offline as a cold wallet](/docs/offline-cold-wallet/)*
