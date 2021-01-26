---
layout: post
title: BlueWallet brings zero-configuration Lightning payments to iOS and Android
date: 2018-12-19 15:27:00
author: igor
categories: [news, updates]
---

BlueWallet has just released support for the Lightning Network. Being a 2nd layer scaling solution, Lightning promises low-fees and instant payments. But as a drawback brings a lot of complexities and unfamiliarities to unsuspecting users.

Completely aligned with Bitcoin’s “be your own bank” for sovereign individuals, Lightning requires users to run their own Lightning nodes (besides their own Bitcoin node), open and manage state channels with other nodes (this is what makes a network), maintain liquidity (both incoming and outgoing) in channels, and basically, do a hard ‘node operator’ work. This is the cost of independence from financial institutions.

Our approach to Lightning is different.

We decided to hide the complexity of running a node under the hood and take over the work of hub operator.

This makes the user experience smooth, bringing Lightning payments to anyone who is at least remotely acquainted with cryptocurrencies and mobile wallets.

We called it LndHub, an opensource wrapper around LND. This is “3rd layer solution” (as we jokingly call it; of course this is not real 3rd layer).

![](/uploads/blog/1__vqmo5jBOWO1VeKG25UHvXQ.png)


**This is how it works**: the user sends his bitcoins to a dedicated top-up address, and this balance is added to his account on LndHub. Then, the user can use this balance to pay Lightning invoices. But under the hood, it’s actually LndHub who pays the invoice, deducting the user’s account balance. It works the same way when the user wants to receive a Lightning payment — it’s LndHub who creates Lightning invoice and actually receives coins on one of its channels.

![](/uploads/blog/1__y4mllrICanzylWy4rrkdyg.png)

This has its drawbacks. Basically, user transfers his funds in custody to a 3rd party (and we all know that trusted 3rd parties are security holes, thanks to Nick Szabo). But how much of a problem is that? Let’s think a bit about it. Trust is minimized to an absolute minimum required to carry its duties. On the other hand, Lightning is expected for day-to-day use, and how much the average user usually has in his pocket for daily expenses? Probably, $50 for groceries and coffee? A fair tradeoff risking those for an exchange of usability.

Of course, on-chain Bitcoins private keys should be in full user’s control. Not your keys — not your coins, as they say. We are thinking of it as “savings” account (as opposed to Lightning — “current” account).

Other drawbacks include centralisation of the network. Given lots of users start using LndHub, amount of funds and liquidity it holds will also grow, turning LndHub into a major Hub on the network. This was anticipated in the dawn of Lightning development, and we don’t see a problem with that. Network still remains open, and is free to morph and mutate as per current economic reality.

Luckily, **LndHub is completely opensource,** which means any tech-savvy user can deploy his own instance of LndHub and use it with his wallet. This instance can even be shared with the party, such as friends and family: each member will have his own independent balance and transaction history. Should be pretty convenient for someone to onboard more people to the Lightning party. Just install lnd, bitcoind, lndhub and in your wallet settings put a link to your hub. Share the link with your friends and help them config their wallets. Done!

![](/uploads/blog/1__Q12kpMPZ726TWRJGl__iT__w.png)

This also mitigates effects of hub centralization, letting the user maintain control over his on-chain and off-chain funds.

To sum this up, here’s a quick pros and cons list:

**Pros**:

*   Improves user experience, allowing to onboard more users
*   Completely removes technicalities, like opening and maintaining channels and liquidity (both incoming and outgoing)t
*   Improves chances of successful payment routing
*   Receiving payments is a breeze (lndhub and lnd are 100% online, no need for Watchtowers)
*   Single LndHub (if self-hosted) can help share lightning experience with many users (think friends and family)

**Cons**:

*   Funds are held by a 3rd party (but only small amounts for everyday use). Mitigated by opensourcing LndHub.
*   Minor network centralization
*   Less private. Hub operator knows who paid whom. Luckily, trust is minimized as Hub doesn’t know who is on sending and who is on receiving end, and what is being paid for. And again, LndHub is opensource for people needing extra privacy.

#### What next?

You can give it a try with [BlueWallet mobile app (iOS and Android)](https://bluewallet.io), check out code for [LndHub](https://github.com/BlueWallet/LndHub) or [BlueWallet](https://github.com/bluewallet/bluewallet) (both are opensource and MIT licensed), and let us know what you think! Of course, there might be bugs, so be careful and please report them. LndHub API spec is also open, so you can build your own product on top of it.

For bonus cypherpunk points you can build wallet binaries yourself and plugnplay your own bitcoind/lnd/lndhub!

#### Handy links

*   [http://lndhub.io](http://lndhub.io)
*   [http://lndhub.io/about](http://lndhub.io/about)
*   [https://bluewallet.io](https://bluewallet.io)
*   [https://itunes.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040](https://itunes.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040?l=ru&ls=1&mt=8)
*   [https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet](https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet)
*   [https://github.com/BlueWallet/lndhub](https://github.com/BlueWallet/lndhub)
*   [https://github.com/BlueWallet/Bluewallet](https://github.com/BlueWallet/Bluewallet)