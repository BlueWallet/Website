---
title: Import a wallet
tags: [usage, featured]
---

Instead of creating a new wallet, you can import one you already have — from another app, a paper backup, or a previous BlueWallet install.

You can import using a **recovery phrase (mnemonic)**, a **private key**, or a **WIF**. BlueWallet detects the format automatically.

## Open the import screen

From the home screen, tap **+** in the top-right corner to open the add-wallet screen, then tap **Import wallet**.

{% include phone-screenshot-image.html img="import-wallet-01-add-wallet.png" alt="Add wallet screen with Import wallet link" %}

## Enter your backup

On the import screen, paste or type your backup into the text field. The instructions at the top explain what formats are accepted.

{% include phone-screenshot-image.html img="import-wallet-02-import-screen.png" alt="Import wallet empty screen" %}

### Recovery phrase (mnemonic)

Enter your seed words as a sentence: no numbers, in the correct order, with a single space between each word.

For example: `clock boat sunshine`

If you are unsure about a word, check the [BIP39 English word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt).

{% include phone-screenshot-image.html img="import-wallet-03-mnemonic-entered.png" alt="Import screen with recovery words entered" %}

Use **Paste** to paste from the clipboard, **Scan** to scan a QR code, or **Clear** to reset the field.

{% include phone-screenshot-image.html img="import-wallet-04-import-actions.png" alt="Import screen with Paste Scan Clear and Import button" %}

When everything looks correct, tap **Import**. BlueWallet will recover the wallet and add it to your list.

## Scan a QR code or import a file

Tap **Scan** on the import screen to open the camera and scan a QR backup. You can also import from a compatible file format using the options in the scan/import menu (⋯ in the top-right corner).

## Advanced import options

Tap **⋯** on the import screen for extra options:

- [Import with a passphrase](/docs/import-passphrase/) — if your backup uses a BIP39 passphrase (25th word)
- [Search accounts on import](/docs/import-search-accounts/) — scan more derivation paths when recovering a wallet from another app
- [Custom derivation path on import](/docs/import-custom-derivation/) — enter a specific BIP32 path when discovery does not find your wallet

## Tips

- Import each wallet separately — there is no bulk import for multiple wallets at once.
- Double-check every word before importing. A single typo can make recovery fail.
- Never enter your backup on a device you do not trust.
