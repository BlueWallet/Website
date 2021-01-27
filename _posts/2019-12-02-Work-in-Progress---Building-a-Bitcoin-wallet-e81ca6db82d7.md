---
layout: post
title: Work in Progress — Building a Bitcoin wallet
date: 2019-12-02 08:27:00
author: nuno
categories: [news, updates]
---

Olá! 👋

Thought it would be cool to share what people are working on at the [Bluewallet](https://bluewallet.io) project.

Usually there’s not much visibility on open source projects, unless, of course, you are part of the mailing list, IRC channels or chat groups of the project. So a WIP (work in progress) Post seems like a nice idea. It’s a way to have the community aware, updated, and given a chance to say something. Best to have feelings and violent reactions shared now, than after something is done.😃

We will approach this as a “Now” and “Next.

Now being what we are working on now and should be hitting production at any moment.

Next being what we will be working on and will come sooner than later.

### What’s coming up Now?

#### Bech32 — Native SegWit as the default wallet

![](/uploads/blog/1__JueZcC5e5L78fmq7Rop04A.png)

Bluewallet [supports many address types](https://bluewallet.io/bitcoin-wallet/). During 2019, we invested most of our time improving and testing our Bech32 wallets. They are now a powerful open financial systems available to anyone for free. And here’s what you can do with them:

*   Full fee control
*   Save up to 50% in fees
*   Bump your transactions
*   Cancel your transactions
*   Batch multiple transactions

It seems that the time has come, and as [Bitcoin Core](https://bitcoincore.org/) also made bech32 the default type on the latest release, there’s no reason for us to not do so as well.

### What’s coming Next?

#### BTCPay Server integration

![](/uploads/blog/1__xCzKdweAJ__YNrvXwhkqfTw.png)
undefined

[BTCPay](https://btcpayserver.org/) has become the Swiss Army knife of the Bitcoin tech stack. From developing applications, running nodes, to integrating with hardware wallets, etc.

It seems obvious to us that bringing this eco-system to Bluewallet, where BTCPay users can have an open source native mobile app to interact with their applications, can be the cherry on top of the proverbial cake.

It solves a real problem - where today, users have their wallets on web frontends, which is something not that secure to do. At the same time, we can work on a native experience to improve the User Experience for the end user, who are, in this case, the merchants and store payees.

This opens interesting scenarios, where people would be able to hack cool things. For instance, it could be to explore NFC (Near Field Communication) solutions to develop open source cards/points-of-sale, and so much more on top of BTCPay and native mobile environments and everything they can bring.

**How and where can you help or know more?**

*   [Mockups are here](https://sketch.cloud/s/p7ZQo/p/btcpay)
*   [Views in Reach Native](https://drive.google.com/open?id=1z07eypjlFJOSR8yW1ot0ZuKBj-vzJDox)
*   [Current dev branch](https://github.com/BlueWallet/BlueWallet/tree/btcpayserverui)
*   [Github Bluewallet issue](https://github.com/BlueWallet/BlueWallet/issues/328)
*   [Chat room on BTCPay](https://chat.btcpayserver.org/btcpayserver/channels/bluewallet-btcpay)

![](/uploads/blog/1__WgPKeu2PHYkA4Jr0JnaThA.png)
undefined

#### Hodl Hodl integration

There’s this saying on the wallets world, “You either die a hero or you live long enough to become an exchange” 😆

Bluewallet doesn’t really want to be an exchange. So integrating with Hold Hodl, where they focus on the exchange technology, so Blue can just focus on the wallet technology, seems like the perfect plan.

Only the future will tell, but I’m super excited about this one. P2P marketplaces definitely bring a lot of value and they are a huge escape tunnel from the regulated world.

**Why Hodl Hodl?**

No-KYC exchange, non-custodial, P2P transactions, kick-ass multi-sig tech, Lightning on exchanges pioneers, bad-ass group of people. Organizers of the arguably best Bitcoin conference :)

Still at a very early stage, so this is what we can show at the moment. But pretty sure this one will blow many people’s minds.

![](/uploads/blog/1__1UgOVs9myOAfURf8t3lrEg.png)
undefined![](/uploads/blog/1__o0uBYENEVmezDzSSZf1KBQ.png)
undefined

**We are a small team of Bitcoin users trying to help on bringing Bitcoin to the people and the people to Bitcoin — through beautifully crafted open source software.**

*   Are you a user? Give us a review on the app stores. That helps immensely.
*   Join our [beta access](https://testflight.apple.com/join/8KtgcwC6) and help us test and bug fix. Provide feedback.
*   Are you a developer? [Here is the place](https://github.com/BlueWallet/BlueWallet).
*   Are you a Bitcoin OG investor and you believe in what we are building? Drop me a line (n@bluewallet.io).

Thank you for reading and any feedback, comments, thoughts and violent reactions, I’m all yours. See you around!