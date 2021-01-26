---
title: Preparing for war — how was 2019 and a glimpse of the future
description: 2019 was a great year for BlueWallet. Although it is a new wallet and still in its infancy, we did get some some media coverage, we did…
layout: post
date: 2019-12-25 08:27:00
author: igor
categories: [news, updates]
---

**Preparing for war — how was 2019 and a glimpse of the future**

2019 was a great year for BlueWallet. Although it is a new wallet and still in its infancy, we did get some some [media coverage](https://www.coindesk.com/bitcoins-lightning-comes-to-apple-smartwatches-with-new-app), we did get some [recognition from industry experts](https://docs.google.com/spreadsheets/d/1aZ1zbaUEzCo9NCctN8-eL2VLIiSdY009tTJvRXDUWEw/edit#gid=0) and we did get [some users](https://t.me/bluewallet) to remind us how much we suck and how much better it can still be. All that, working on the project on our free time in a pure open source fashion.

This year blew away our wildest expectations on what we thought we could achieve. To give you a bit of perspective, at this time last year we were releasing the android version of the app and our Lightning wallets feature right before Christmas. And probably, at that time, most of you hadn’t really heard about Blue.

Talking about Lightning. While the Lightning Network slowly matures, and after doing our part to put it on the spotlight and bringing the attention it actually deserved. We decided to take a step back and work on the layer that really matters. The base layer.

In the core, BlueWallet is (and always was) a non-custodial on-chain [bitcoin wallet](https://bluewallet.io), born out of the frustration and ashes of the 2017 Bull market. When fees were high and the majority of wallets still had not implemented segwit and flexible fees. Paying $20 in fees for a transaction because your wallet’s fee estimation was broken? That was a real deal back then.

The very first release of BlueWallet fixed exactly that: segwit, flexible fees (starting from 1 sat/byte), and RBF (replace-by-fee).

During the next cycle of adoption (this is how I like to call the bull-run) I expect to see exactly the same thing we saw in 2017: with that many people discovering the advantages of Bitcoin and making their first happy transactions. The block space will again be an extremely scarce commodity.

After another block reward halving, a more mature fee market will develop, and we will witness a natural competition for block space. This is why I think it is important to prepare for that in advance: your bitcoin wallet app (as a customer-facing software) should be the one to act in your best interests, trying to save as much pennies on transactions as possible and, at the same time, give you the full control you need and should have.

In preparation for that, at BlueWallet we implemented:

*   **CPFP — Bump transaction** (child-pays-for-parent) — a technique that allows you to spend incoming transaction that is unconfirmed by sending it to your another address, but with the total fees higher than the original transaction. This helps if it takes forever for your incoming transaction to confirm on the blockchain.
*   **RBF — Bump transaction** (replace-by-fee) — if you sent a transaction and it’s still unconfirmed you can replace it with the one with higher fees, making it more attractive for miners to mine, thus, speeding up the confirmation.
*   **RBF — Cancel transaction** — a technique similar to regular RBF, but where the replacement transaction’s output is the address you control, thus, paying yourself, effectively cancelling the transaction.
*   **Batch send** — when creating a transaction add as many payees as you want. This helps to save on fees when having to pay multiple destinations. Making a nice UI/UX on this one was a challenge.
*   **Flexible fees** (starting from 1 sat per byte) and fee recommendations fetched from a real up-to-date bitcoin node.
*   Finally, [from now on, we are **promoting BIP84 Native SegWit wallets as the default wallet**](https://twitter.com/bluewalletio/status/1207311114209497089) when users create a new wallet. We were warned and actually advised against that, as that triggers a stream of complaints from users who can’t withdraw coins from exchanges because exchanges still don’t recognize ‘bc1……’ addresses. But it’s time. Really. Users should take their complaints to obsolete exchanges. Native segwit will allow saving on fees even more.

I like to repeat that **BlueWallet is preparing for war**, and this war will be for block space. Once another billion of Earth inhabitants realize the benefits of hard, censorship-resistant and non-confiscatable money.

If this is the kind of fight you want to be part of, protecting the Bitcoin user interests over miners and corporate players, [**you know where to go**](https://github.com/BlueWallet/BlueWallet). And you are much welcomed!

![](img/0__wzOrnxP3ajASE1jK.jpg)

That was not the only features we were busy with. Among many, some **new and also remarkable features**:

*   Connect to your own Bitcoin Node through Electrum server for maximum self-sovereignty, no SPVs, full node fashion.
*   Watch-only ZPUB wallets. Just scan the QR code with a ZPUB or input a ZPUB into the text field directly. XPUB and YPUB are supported as well.
*   With recent transition to PSBT under the hood, we added a workflow to have your transaction signed on your hardware wallet in a pure air-gapped fashion. Just mark your watch-only ZPUB wallet as working with an external HW wallet, then create a transaction and feed the QR code with the unsigned PSBT to your hardware wallet. Sign it on hardware wallet, scan it back to BlueWallet and broadcast it to the network. You have just conveniently made a transaction on your mobile device, while keeping your private keys on a secure hardware wallet, truly air-gapped! This is still in beta and only the [CryptoAdvance device is 100% supported](https://twitter.com/StepanSnigirev/status/1209426608949465088), but we will work on testing and polishing the integration with other hardware wallets.

We still have a lot of work to do:

*   Ongoing integration with HodlHodl. Non-custodial fiat-to-btc trading is an important bitcoin infrastructure project. It’s a hedge against all regulated exchanges going bad with AML/KYC.
*   When LND will be stable enough we will include it as part of the wallet, allowing users to switch their lightning wallets into non-custodial mode, and gradually make it the default mode. But custodial lightning brought some unexpected benefits, such as practically unlimited incoming capacity, instant on, zero onchain footprint. It makes sense to maintain both and explore possible synergies here.
*   Multisig wallets are hard to tackle, mostly UI/UX wise. A proper joining ceremony is a hard task to design. The ceremony of creating a transaction and inviting all participants to sign it, can also be a challenge.
*   To reach maximum security, it makes sense to use only multisig wallets with all keys residing on your own devices, preferably hardware wallets from different manufacturers. Designing, implementing and testing this flow is not easy.
*   Sign message with your wallet/verify. I strongly feel that your private keys should help you with authentication on 3rd-party services, but what’s the proper way to do that we do not know, yet.
*   Provide-UTXO — when creating a transaction, supply UTXO to use in form of JSON document. This allows using the wallet on a completely offline/air-gapped device, provided you carry with you your up-to-date UTXO set. Then you sign it, broadcast via SMS/pigeons/whatever and congrats! You can transact even from a desert island.
*   Choose UTXO / UTXO spend strategies — when creating a transaction, choose which UTXO (or UTXO strategy) you want to use. For example, you could strive for the smallest fees (use higher-value outputs first), optimize for amounts used (sum of input amounts are close to total output amounts — might produce dust output), or you could consolidate (use all available inputs — yes this completely destroys privacy but helps to prepare for a period of high fees) etc.
*   Coinjoin — a proper coins mix service with other peers is tricky, but we might attempt it.
*   RBF-Service. A trustless server that broadcasts your replacement transactions with higher fees if previous transaction wasn’t confirmed in a timeframe you specified. You can start with 1 sat/byte transaction and gradually increase fee until it’s confirmed in a reasonable time (with the smallest fee possible). Automatically. This is only an idea at the moment.
*   NFC. Users will be able to ‘tap-to-share’ their receive address to other users, and other NFC-capable devices. This will eliminate the requirement for users to have to fiddle with their device’s display brightness, and having to move around their camera view in order to scan a QR Code. This feature will also be useful for our upcoming BTCPayServer integration.
*   Push notifications have been set aside for too long, but they will be eventually done.

And some [other more experimental consumer ideas](https://medium.com/bluewallet/work-in-progress-building-a-bitcoin-wallet-e81ca6db82d7) that we are already sharing with the community and putting it out there. The list doesn’t end there, but one needs to keep some secrets as well :) Feel free to bring your ideas on!

Just some statistics of the year:

*   **32 production releases**
*   **738 commits**
*   **27 contributors**

A special thanks to all the contributors, you guys rock! 🤘

To summarize, we are preparing for war! It will be a war about block space, it will be a war about providing the users with the right tools to fight against corporate interests trying to take advantage of Bitcoin. Join us, we promise it won’t be a boring one!

[https://github.com/bluewallet/bluewallet](https://github.com/blueWallet/blueWallet)

Cheers!