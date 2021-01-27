---
layout: post
title: v5.0.0 — Coldcard wallet support
date: 2020-03-02 18:28:04
author: nuno
categories: [news, updates]
---


Olá! 👋

I’m super excited for this one. It is a massive effort, and the result of many months of iterations to bring [Coldcard](https://coldcardwallet.com/) support to Blue. Thanks to all contributors that brought to the app PSBT support ([junderw](https://twitter.com/junderwood4649)), Hardware wallets support ([StepanSnigirev](https://twitter.com/StepanSnigirev)) and the Coldcard integration ([overtorment](https://twitter.com/overtorment)/[marcosrdz](https://twitter.com/marcosrdz)), you guys rock!

## Changelog

* ADD: Coldcard support
* ADD: Import/Export transactions(txn files) for future broadcast
* FIX: Allow capitalized bech32 addresses (closes #838)
* FIX: lnurl scan to receive is not returning the correct view (closes #828)
* FIX: Watch-only delete wallet doesn’t have confirmation now
* FIX: Typo in spanish


![](/uploads/blog/1_qimXeoqtnjceQQtxpyrSgA.png)

# How to use Coldcard with Bluewallet

Let’s have a look on how to use PSBT, watch-only wallets. And how to send transactions offline with your Coldcard and Bluewallet.

<div class="videoWrapper">
	<iframe src="https://www.youtube.com/embed/hF2MyDB0nno?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
</div>

Bluewallet Bitcoin wallet + Coldcard Coldstorage

1. Start the Coldcard device, go to Advanced → MicroSD Card → Export Wallet → Electrum Wallet. Put the SD card into Coldcard. Choose Native Segwit. It should create wallet skeleton file on SD card.
2. Put the SD card into the PC and move the created wallet skeleton file onto the Dropbox folder.
3. Grab the iPhone, launch BlueWallet, tap Create a wallet → Import wallet → scan QR or import from file → tap file icon and choose your wallet skeleton file. It should import your Coldcard wallet as watch-only.
4. Create a transaction from this watch-only wallet, when prompted — export it to a file and save it in Dropbox folder.
5. Put the SD card back into the PC, and move the transaction file from Dropbox folder to the SD card.
6. Put the SD card into the Coldcard, go to Ready To Sign and proceed with signing the transaction.
7. Put the SD card into the PC. There should be 2 new files: a file with tge transaction hex that is ready to broadcast (\*-final.txn), and a signed transaction file (\*-signed.psbt). Let us finish the transaction on iPhone, so move signed transaction file to Dropbox.
8. On the iPhone, tap Open Signed Transaction, and choose the signed transaction file from your Dropbox. Tap Send now!

Try it out! 👊

*PS: Take in consideration that we used dropbox on this example, but anything will work, File system, iCloud, Bluetooth, AirDrop, box.com, direct lightning to sd card adapter, etc*

That’s all for today. Reach out for any doubts, questions, feelings and violent reactions!

* website: <https://bluewallet.io/>
* Github: <https://github.com/BlueWallet/BlueWallet>
* Telegram: <https://t.me/bluewallet>