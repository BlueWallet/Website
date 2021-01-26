---
title: BlueWallet introduces Lapp Browser and Lapp Marketplace
description: In the latest release of BlueWallet (v3.6.0) for Android & iOS we added a Lapp Browser. Similar to Dapp Browser, Lapp Browser allows you…
layout: post
date: 2019-01-21 11:27:00
author: igor
categories: [news, updates]
---

![](/uploads/blog/1__8aBrXNxm5J8qGqxNe3leSQ.png)

![](/uploads/blog/1__8ocpMPrkE__pasqTKq8NeGQ.gif)

What is Lightning-powered App (Lapp)? In general, this is any application which works with Lightning network. In our case, this is any web-page that can receive payments or pay you back (not only that but more on that later).

Since BlueWallet added Lightning integration, our users made thousands of payments, and we have some stats and insights to share (which we will in further blog posts), but for now, we want to bring closer users and real business. We want to make it easier for regular people to discover great goods and services, allow them to interact with Lapps, pay and get paid easily.

![](/uploads/blog/1__I9tmpGCk61N84__PCZ1TBFw.gif)

_Its been one year since Lightning network mainnet launch, and it’s time to take it seriously._

Thus, the very first thing to meet & greet users on the Lapp Browser will be a Lapp Marketplace — a simple collection of Lapps worth of your attention.

### How does it work?

In the essence, Lapp Browser is a webview that navigates to Lightning-enabled webpages. The webview has javascript code injected, which bridges user’s Lightning wallet with the Lapp, allowing a more smooth interaction. The interaction part itself can evolve a lot in the future to be and feel more native, more integrated, etc.

BlueWallet partially conforms to [webln](https://github.com/wbobeirne/webln) specification (which is still in early alpha), so any Lapp that implements that spec will integrate with the wallet more naturally. Ideally, paying and getting paid in Lapp will be within one button tap (not a hustle of switching between apps and copypasting _bolt11_ strings).

![](/uploads/blog/1__QZlxfhsTQob4xJAaedg6DA.gif)

### Why are we doing this?

There’s no way to know what the future of wallets will be.

Imagine a world where you have full control of your money. Bitcoin is the main currency online and offline. You open your wallet app where you are able to easily pay your bills, send money to your family, buy stuff online, topup your phone, etc.

This is the world we want to live in. And this experiment is a first step to start learning how can we build this on top of the Lightning Network.

![](/uploads/blog/1__3UuRMNuJputXC04a9kMJgA.gif)

### Whats next

Lots of work to be done. At the moment very few Lapps implement webln spec. Although this spec is still in alpha stage, it feels like a way to go. For example, every Dapp supports web3 specs, so developers might want to build their next Lapp considering webln compatibility. Except for frictionless send and receive, this spec also drafts providing identity to Lapp (so Lapp can seamlessly create an account and authorize you; no personal information leaked though, only anonymous public key is shared), and also mechanisms to sign messages with your identity, and verify other people signatures. Please, give [this spec](https://github.com/wbobeirne/webln) some love.

### Disclaimer

BlueWallet’s Lightning integration is custodial by default, but you can easily connect it with your own LND instance for the same experience (everything we do is opensource).

Be warned, there might be bugs (please report them). Actually, with this release we’ve hit a sort of “beta” jackpot: Lapp browser is in beta, Lightning integration is in beta, and BlueWallet itself is still in beta. Don’t use it for large amounts! Be reckless, but not too reckless.

### Handy links

*   [https://bluewallet.io](https://bluewallet.io)
*   [Our Lightning integration announcement](https://medium.com/bluewallet/bluewallet-brings-zero-configuration-lightning-payments-to-ios-and-android-30137a69f071)
*   [A glimpse on the future](https://medium.com/bluewallet/a-glimpse-on-the-future-of-bitcoin-ux-4129cca9ece6)
*   [Marketplace sources](https://github.com/BlueWallet/Website/tree/master/marketplace)