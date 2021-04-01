---
title: Create a Bitcoin wallet
tags: [usage, featured]
---
Creating a Bitcoin wallet on BlueWallet is easy.

You can either click on the "Add now" button or the "+" icon in the top right corner

{% include phone-screenshot-image.html img="bluewallet-first-page.png" alt="BlueWallet's first page" %}

That will take you to the "add wallet" screen.

## Adding a new wallet

In the "add wallet" screen, you can choose between a Bitcoin wallet and a Lightning wallet.

{% include phone-screenshot-image.html img="add-bitcoin-wallet.png" alt="Add bitcoin wallet page" %}

For Bitcoin, click on the Bitcoin button. (If you want to create a Lightning wallet, see [this guide](/docs/create-lightning-wallet).)

You may also name your wallet, or leave the default name.

<div class="side-note" markdown="1">

### Advanced options

If you have "Advanced mode" enabled in general settings,
you'll see more options for creating the wallet.

{% include phone-screenshot-image.html img="add-bitcoin-wallet-with-advanced-options.png" alt="Add Bitcoin wallet with advanced options" %}

#### Wallet type

The first group of options is for the wallet type:

##### SegWit HD (BIP84 Bech32 - Native)

Is the latest bitcoin address type. It will save the most on fees and it will give you multiple addresses for best practice when it comes to protect your privacy.

##### SegWit HD (BIP49 PS2H - Wrapped)

It is a compromise to the new addresses type above, it provides better compatibility with older addrress types and most services like exchanges, but a smaller save on fees.

##### SegWit (P2SH)

This is a single address wallet, in case you want a wallet with just one address. The others will give you a new address every time you make a transaction. This is not good for privacy for instance, only use it if you know what you are doing.


#### Manual entropy

BlueWallet supports manual entropy. See [here](../manual-entropy/) for more details.

When you're ready, you can click on "Create" to make your new wallet.
</div>
