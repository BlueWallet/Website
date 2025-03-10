---
layout: post
title: "Introducing v6 with Multisig "
date: 2021-04-02 12:56:23
categories: news, updates
---
Version 6 of BlueWallet has been introduced a couple of months ago and it brings all the power of [Multisig to a mobile app](https://bluewallet.io/multisig-wallet/). 

The goal is simple, as a user learns about bitcoin and goes on its own self-sovereign journey there will be a moment where he realises security is a real concern. Bringing users from learning how to backup a seed, to discover cold storage and thinking/playing with Multisig can now be easily done within BlueWallet.

<div class="uk-container{{container}}">
      <div class="videoWrapper">
        <iframe src="https://www.youtube.com/embed/Yfp1-XouEXM?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
      </div>
  </div>

## What is Multisig?

A Multisig Vault is a wallet with multiple keys. This allows you to exponentially increase security (if used correctly) or for shared custody as well. Shared custody is when you want to share a wallet with a group of people.

Multiple devices are advised. The Vault will work with other BlueWallet apps and PSBT compatible wallets, like Electrum, Specter, Coldcard, Cobo vault, etc. It is advised that you use multiple devices, and consider store these devices in multiple locations if you see it is fit for your use case.

## What are the main features

### 1. Editing Keys

You can create all Vault keys in the same device, and remove or edit these keys later. Having all keys on the same device has the equivalent security of a regular Bitcoin wallet. As advised above, please consider multiple devices from the start.

{% include image.html img="tip2.png" alt="Multisig bitcoin wallet" %}

### 2. Vault Backups

On the wallet options you will find your Vault backup and watch-only (coordination) backup. This backup is like a map to your wallet. It is essential for wallet recover in case you lose one of your seeds. 

{% include image.html img="tip3.png" alt="Multisig bitcoin wallet" %}

### 3. Importing Vaults

To import a Multisig, use your multisig backup file and use the import feature. If you only have extended keys and seeds, you can use the individual import fields on the Add Vault creation option.

{% include image.html img="tip4.png" alt="Multisig bitcoin wallet" %}

### 4. Advanced options

By default BlueWallet will generate a 2of3 Vault. To create a different quorum or to change the address type you can activate the advanced options in the Settings. 

{% include image.html img="tip5.png" alt="Multisig bitcoin wallet" %}

For tutorials and documentation you can check the [support section](https://bluewallet.io/docs). 

We will keep improving and building on top of the current foundation, which in terms of user experience and security seems pretty solid.

Check out this review from [BTC Sessions](https://www.youtube.com/channel/UChzLnWVsl3puKQwc5PoO6Zg) to have real feeling on all the power it gives you.

<div class="uk-container{{container}}">
      <div class="videoWrapper">
        <iframe src="https://www.youtube.com/embed/E1qcYkSerko?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
      </div>
  </div>

\
Give it a go, feedback and violent reactions welcomed :)