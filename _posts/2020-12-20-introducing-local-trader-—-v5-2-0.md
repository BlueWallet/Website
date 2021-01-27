---
layout: post
title: Introducing Local Trader — v5.2.0
date: 2020-04-03 18:29:44
author: nuno
categories: [news, updates]
---
Version 5.2.0 is out and it introduces some cool new features and a new Product. Let’s take a look shall we.

Finally we provide support for TLS with ElectrumX (other implementations will be available on the next release) after many requests. Users running Electrum Servers probably know what this means. But essentially more security and privacy for this users using the [Bitcoin wallet](https://bluewallet.io/).

![](/uploads/blog/1_PLxkIoqqPaOh9ppT9_sKmg.jpeg)

Remove password was introduced. It is advise that you encrypt your storage, but many new users that probably don’t need encryption at the beginning, were activating this feature by mistake and with that, having to type a password every time they access the app. Now, if you want to remove this password you can do it easily through the interface.

Also take in consideration that if you have multiple storages and remove the encryption, these secondary storages will be removed as well.

![](/uploads/blog/1_A7Xl06wiAKH6WOpASX41MA.jpeg)

Another Security feature for iOS is also included, where you can define if your storage should be delete or not if you remove the app. Useful if for some reason you just need to delete the app, now you can keep your encrypted storage for a later instal.

# Introducing Local Trader

As a bonus, this version also includes the release of our new product, that for now we are going to call “Local Trader”.

Local Trader will be a p2p non-custodial and non-KYC trade platform. It is powered by [Hodl Hodl](https://hodlhodl.com/) and this is an alpha release with limited features.

Why is this product relevant? Well, for different reasons.

Mainly because it will provide mobile, non-KYC, private trades between individuals — which is important now in this world where it is more and more difficult to acquire/trade Bitcoin without attaching or giving away your private information.

We need more freedom tech and less fin(ance) tech. And we are going in the freedom tech direction. Hope you can join us!

The first release of Local Trader includes:

- Search for offers
- Filter by country
- Filter by offer type
- Filter by payment option
- Filter by currency

More goodies on this soon! 🤯

<div class="videoWrapper">
	<iframe src="https://www.youtube.com/embed/fBqfOwIisek?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
</div>


Local Trader on BlueWallet

If you are curious why would we release something with limited features. The goal is to put product out there, get feedback and see which direction this product can take based on what the users have to say. Instead of spending months and months of development in secret like other projects, we like to iterate fast, get feedback faster and let the users define the product. So take a look, try it out and [tell us what do you think](https://t.me/bluewallet).

**v5.2.0 Changelog**

New
- Local Trader (v.Alpha, Powered by [@hodlhodl](http://twitter.com/hodlhodl))
- Support for TLS with ElectrumX (SSL connection)
- Remove password (Decrypt/Unmount Storage)
- Delete storage or not (iOS)
- UAH Local currency

Fixed
- Allow use of Today extension on iOS 10
- Redesigned General Settings
- Electrum (re)connection improvements

APK available on GitHub releases as usual. If you don’t have access to the play store this is where you should go.

<https://github.com/BlueWallet/BlueWallet/releases/tag/v5.2.0>

- iOS: <http://apple.co/2QwnLzw>
- android: <https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet>

Stay safe out there. Backup your keys! 💙

Keep Building!