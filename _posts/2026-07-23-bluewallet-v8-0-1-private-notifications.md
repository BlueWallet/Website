---
layout: post
title: "BlueWallet v8.0.1 is Out: Liquid Glass, Private Notifications and More"
date: 2026-07-23 08:00:00
author: nuno
categories: [news, updates]
description: BlueWallet v8.0.1 brings Liquid Glass for iOS, private push notifications, a blocked transaction details UI, and a bunch of new features and fixes for iOS and Android.
image: blog/blogv801.png
---

Hot on the heels of v8.0.0, we're back with v8.0.1. Smaller number, but don't let that fool you, there's a lot packed in here. Let's get into it.

**Liquid Glass for iOS**

If you're on iOS, the app now embraces Apple's Liquid Glass design. It's subtle, it's smooth, and it makes BlueWallet feel right at home on your latest iPhone.

**Private push notifications**

This one's a favorite. Thanks to community contributor [@r6mez](https://github.com/r6mez){:target="_blank" rel="noopener"}, you can now hide payment details from Apple and Google's push notification servers.

Normally, a notification looks like this:

![BlueWallet notification showing +10000 sats received](/uploads/blog/blog-v801-private-notifications-amount.png)

Amounts and payment info flowing through push servers isn't ideal if you care about privacy. So we added a toggle for it.

![Hide payment details toggle in BlueWallet settings](/uploads/blog/blog-v801-private-notifications-toggle.png)

Turn it on, and you'll just get a simple, generic heads-up instead. No amounts, no payment details, just a nudge to open the app.

![Generic BlueWallet notification with payment details hidden](/uploads/blog/blog-v801-private-notifications-hidden.png)

**New features**

* Import Unchained JSON as a multisig cosigner
* Support for BC-UR v2 air-gapped scanning for hardware wallets (OneKey, Keystone)
* RBF enabled for single-sig watch-only wallets (HD Bech32)
* 19 new languages, including Filipino, Armenian, Akan and Sesotho

**Improvements**

* Renewed Settings UI
* Better contrast on the green success color
* Faster transaction fetching for HD wallets
* Swapped out crypto-js for modern noble crypto libraries under the hood

**Fixes**

* A crash on startup
* Laggy amount input on the RBF custom fee screen
* Text size on main app views, plus a clipped wallet balance in the carousel
* QR codes no longer have rounded corners
* The signed transaction hex screen now stays scrollable
* The floating button no longer overlaps the transaction details UI (it was blocking it before, now it plays nice)

Here's a quick look at the app in action:

<video loop autoplay playsinline preload="auto" muted class="uk-width-1-1 uk-border-rounded uk-margin-medium-top uk-margin-medium-bottom">
  <source src="{{ '/uploads/blog/bluepreview801.mp4' | relative_url }}" type="video/mp4">
</video>

BlueWallet is free and open source. If you appreciate the work, a review on the app stores goes a long way, and if you feel like supporting us further, [donations are open too](https://donate.bluewallet.io){:target="_blank" rel="noopener"}.

**Ready to update?**

* [App Store](https://apps.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040){:target="_blank" rel="noopener"}
* [Google Play](https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet){:target="_blank" rel="noopener"}
* Full release notes on [GitHub](https://github.com/BlueWallet/BlueWallet/releases/tag/v8.0.1){:target="_blank" rel="noopener"}

Go grab the update, your notifications (and your privacy) will thank you.

Keep building! ⚡
