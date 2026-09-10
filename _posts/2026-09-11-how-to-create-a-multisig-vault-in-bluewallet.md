---
layout: post
title: "How to create a multisig vault in BlueWallet"
date: 2026-09-11 09:00:00
author: nuno
categories: [guides, multisig]
description: "A Vault needs more than one key to spend. Default is 2-of-3. Spread the keys across devices, then back up the map."
image: blog/create-multisig-vault.jpg
---

One seed is one mistake. A Vault needs more than one key to move the coins. Lose a phone, you can still have bitcoin. Lose the only seed, you don't.

BlueWallet calls that a Vault. Default is 2-of-3: three keys, any two to spend. Shared custody for a group, or one person who refuses to park life savings behind a single device. Same product either way.

This post does one job: create the Vault the right way. Spending from it is a different walkthrough.

## What a Vault actually is

A multisig wallet. Several keys, a quorum that must sign before coins move. The keys can live on other BlueWallet installs, on PSBT-compatible hardware wallets, or on offline phones. The Vault works across those.

Having every key on the same phone is not a Vault. It is a regular wallet wearing a costume. Same security as one seed. Spread the keys from the start.

## What you'll need

- BlueWallet from the [download page](/download/). Official builds only.
- At least two devices you trust, ideally three. Other phones, an offline phone, a hardware wallet. Locations that are not the same bag.
- Paper or steel for each seed you create. The Vault backup is separate. You need both.

Do not create all three keys on the phone in your pocket "just to try it" and promise to move them later. Move them now, or you never will.

## Set it up

Same path as the [create a Vault](/docs/create-multisig-wallet/) docs.

1. Tap + on the home screen, then Vault.
2. Add the keys. BlueWallet can create a key on this device, or you import a public key / cosigner from another wallet. Repeat until you have the set you want.
3. Confirm the quorum. Default is 2-of-3. For a different setup or address type, turn on Advanced Mode in Settings first, then come back.

When the Vault lands in your list, you have a wallet that will not spend until enough keys sign. Receive works like any other wallet. Spending needs the quorum.

## Two backups, not one

Open the Vault, then the options. You will find two different backups.

- Vault backup. Seeds and the layout of the keys. This is a secret. Treat it like cash.
- Watch-only (coordination) backup. The map of public keys. Essential if you lose one seed and need to rebuild the wallet. It can travel more than the keys, but it is not public Twitter material.

Store both. Losing one seed without the map is how people write recovery threads that end badly.

To bring a Vault back later, import the multisig backup. If you only have extended keys and seeds, the Add Vault screen has fields for those too.

## Common mistakes

- All keys on one device. You did not upgrade. You renamed a hot wallet.
- Skipping the watch-only backup. The seeds alone are not always enough to rebuild the exact Vault.
- Parking the Vault on the phone you spend from every day. Everyday money is a normal Bitcoin wallet. Stack you cannot afford to lose to one stolen phone is a Vault.
- Changing the quorum later without writing it down. 2-of-3 and 3-of-5 are different wallets. The backup has to match what you actually created.

## When not to use a Vault

If this is coffee money, a normal wallet is fine. Multisig costs attention: more devices, more backups, slower spends.

If you wanted a view of cold storage without keys on this phone, that is [watch-only](/how-to-set-up-a-watch-only-wallet-in-bluewallet/), not a Vault. If you are moving an existing seed onto this phone, that is [import](/how-to-import-a-recovery-phrase-into-bluewallet/).

Spending from a Vault once it exists lives in the [Vaults spending docs](/docs/multisig-spend/).
