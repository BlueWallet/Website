---
layout: post
title: Sunsetting Lndhub.io
date: 2023-02-23 10:27:00
author: nuno
categories: [news, updates]
---

Today, we are announcing that the Lightning node, Lndhub.io, where BlueWallet provides Lightning wallets to its users, is sunsetting. While you can still withdraw your sats, creating new or refilling existing Lightning wallets on LndHub node will no longer be possible.

**TL;DR:** If you have sats on BlueWallet’s lightning node, please move them as soon as possible.

Lndhub started as a weekend experiment on a new fringe technology barely used at the time called the Lightning Network. Today, with the availability of more mainstream services offering scalable solutions, Lndhub has fulfilled its purpose in its current form.

Lndhub as a software and FOSS self hosted solution will keep existing and being supported for anyone interested in running it.
You will always be able to connect to your own LndHub from BlueWallet or other software that supports LndHub API specification.

**What you need to do and know:**
* The service will be shutdown on the 31st of May.
* If you have sats there, please move them to another service/wallet of your choice.
* If you are running your own Lndhub you are not affected.
* Regular bitcoin wallets are not affected.

This may sound like bad news, but this essentially means BlueWallet going forward will only support self-custody solutions. This is good for bitcoin and BlueWallet users.

**App alternatives:**
* [Phoenix Wallet](https://phoenix.acinq.co) (iOS, Android)
* [Breez Wallet](https://breez.technology/mobile/) (iOS, Android)

**Self-hosted alternatives:**
* Self-hosted LndHub ([go implementation](https://github.com/getAlby/lndhub.go), [nodejs implementation](https://github.com/BlueWallet/LndHub)) on [Umbrel](https://umbrel.com) and others, on hardware you own.
* Self-hosted [LNbits](https://lnbits.com)


Keep building. Thanks!