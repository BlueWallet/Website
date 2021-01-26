---
layout: post
title: Bluewallet v.4.4.1  — Bitcoin wallet
date: 2019-09-04 09:27:00
author: nuno
categories: [news, updates]
---

Bluewallet v.4.4.1, [mobile Bitcoin wallet for iOS and android](https://bluewallet.io) is out and there are some cool new features that you should know about. Mainly the ability to send all funds, the ability to have a bit more privacy by allow you to hide your balances and the super cool “Scan to receive”, a new functionality available for Lightning based on _lnurl spec_.

#### **What is new**

### Send MAX (BIP84 & BIP49)

The ability to Send MAX, one of the most requested features appears when you tap on the amount. The keyboard goes up, you can see your total balance and you can tap on it to select the total amount. That simple.

Particularly useful if you want to migrate your wallets to Bech32 wallets ;)

![](/uploads/blog/1__meQxWp__U0428GlEkJKBqeg.png)
undefined

### Scan to receive (lnurl spec) by @fiatjaf

_lnurl_ is a protocol for communication between Lightning wallets and third-party services. It simplifies complicated common flows into standard subprotocols carried on between the user wallet and the service over simple HTTP JSON calls.

Basically it goes like this:

1.  The wallet reads a QR code;
2.  If it has the _lnurl_ prefix it is decoded and the the resulting URL is called;
3.  From the server response for that URL the wallet knows what subprotocol it should proceed with;
4.  In the case of **lnurl-withdraw**, for example, the server response will contain some parameters (min/max, default description) for the invoice that will be generated in the user wallet;
5.  The wallet proceeds with the subprotocol. In the case of **lnurl-withdraw**, for example, it will display an invoice generation window prefilled with the parameters returned by the server, and, upon confirmation by the user, send the invoice back to the server, which will pay it.

![](/uploads/blog/1__JZdpyNAQs0np2wgCpoHDrw.gif)
undefined

[Source](https://telegra.ph/lnurl-a-protocol-for-seamless-interaction-between-services-and-Lightning-wallets-08-19)

Supported by: [BlueWallet](https://bluewallet.io/), [Bitcoin Lightning Wallet](https://lightning-wallet.com/) and [@lntxbot](https://t.me/lntxbot)

Can be used on: [Kriptode](https://kriptode.com/), [Lightning Gifts](https://lightning.gifts/) and [@lntxbot](https://t.me/lntxbot)

### Allow user to hide their balance

The ability to hide your balance is a small privacy improvement. With it you now don’t need to be afraid of opening your wallet in public or over the shoulder kind of situations for instance.

![](/uploads/blog/1__l__z95zazGnMJMuoPyBNHxg.png)
undefined

#### Other noticeable improvements on this release

*   WatchApp Complication
*   New TX status screen
*   Share QR along with address
*   KRW currency support
*   iOS Handoff for tx and wallets

**What was fixed**

*   Crash on ManageFunds
*   Don’t allow more than one leading zero
*   Wallet selector on send view
*   Data is stored in OS secure keystore
*   Broken Lightning scheme handling
*   QR Correctness for watch app
*   Tap to copy preimage
*   Show last saved exchange rate

Keep Building! And keep that feedback coming. Free Open Source Software! Thank you all :)

We are always available by email bluewallet@bluewallet.io or on the usual channels.

*   [bluewallet.io](https://bluewallet.io/)
*   [Twitter](https://twitter.com/bluewalletio)
*   [Telegram](https://t.me/bluewallet)