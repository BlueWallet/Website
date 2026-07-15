---
title: Custom derivation path on import
tags: [usage]
---

A **derivation path** tells BlueWallet how to turn your recovery phrase into addresses. Most wallets use a standard path, but some apps use a custom one. If automatic discovery does not find your wallet, you can enter the path manually.

The usual flow is: enter your seed, enable **Search accounts**, run discovery, then open **Use custom derivation path**.

## Enter your recovery phrase

Go to the [import screen](/docs/import-wallet/) and enter your backup words.

{% include phone-screenshot-image.html img="import-custom-derivation-01-seed-entered.png" alt="Import screen with recovery phrase entered" %}

## Enable Search accounts

Tap **⋯** in the top-right corner and turn on [Search accounts](/docs/import-search-accounts/). This scans a wider set of known paths before you try a custom one.

{% include phone-screenshot-image.html img="import-custom-derivation-02-search-enabled.png" alt="Search accounts enabled in import menu" %}

Tap **Import**. BlueWallet opens the **Discovery** screen and lists wallets it finds. This step can take longer when **Search accounts** is on.

{% include phone-screenshot-image.html img="import-custom-derivation-03-discovery.png" alt="Discovery screen after import" %}

## Enter a custom derivation path

If your wallet still is not listed, tap **Use custom derivation path** at the bottom of the discovery screen.

{% include phone-screenshot-image.html img="import-custom-derivation-04-custom-derivation.png" alt="Custom derivation path screen" %}

Type the path for your wallet, for example `m/84'/0'/0'` for native SegWit (BIP84) or `m/49'/0'/0'` for nested SegWit (BIP49). BlueWallet checks several address types for that path and shows whether each was used on-chain.

Select the wallet type that shows **Found**, then tap **Import**.

## When to use it

- You know the exact derivation path from the wallet or app that created the backup.
- Discovery with [Search accounts](/docs/import-search-accounts/) finds wallets, but none match your balance or addresses.
- You are recovering from hardware or software that used a non-standard path.

## Tips

- Common Bitcoin paths include `m/44'/0'/0'` (legacy), `m/49'/0'/0'` (nested SegWit), `m/84'/0'/0'` (native SegWit), and `m/86'/0'/0'` (Taproot).
- A wrong path will not expose someone else's funds. It simply derives a different, empty wallet.
- If you also used a [BIP39 passphrase](/docs/import-passphrase/), enable **Passphrase** before importing so discovery uses the correct seed.
