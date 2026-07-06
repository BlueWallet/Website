---
title: Seed final word
tags: [usage]
---

When you write down a new recovery phrase, the last word is not random — it is a **checksum** derived from the first 11 or 23 words. If you have a partial backup missing only the final word, **Seed final word** can calculate valid options.

## Open the tool

Go to **Settings** → **Tools** → **Seed final word**.

{% include phone-screenshot-image.html img="seed-final-word-01-screen.png" alt="Seed final word tool" %}

## Generate the final word

1. Enter your **partial mnemonic** — the first 11 words of a 12-word seed, or the first 23 words of a 24-word seed. Separate words with spaces.
2. Tap **Generate the final word**.

BlueWallet shows one valid checksum word. Tap again to generate another valid option (there are usually several possibilities for 11 words).

{% include phone-screenshot-image.html img="seed-final-word-02-generated.png" alt="Generated final seed word" %}

3. Tap **Clear** to reset the field and try again.

You can then use the complete phrase to [import a wallet](/docs/import-wallet/).

## When to use it

- Your written backup is missing only the last word.
- You are restoring from a partial paper backup and know the word count (12 or 24).
- You want to verify which final words are valid for a partial phrase you have.

## Tips

- This tool only works when exactly 11 or 23 words are entered. Any other count shows an error.
- Multiple final words may be valid for the same partial phrase — you may need to try importing each candidate until the correct wallet appears.
- Never enter your full seed in a screenshot or share it with anyone. Work on a device you trust.
- This does not recover a forgotten middle word — only the checksum (final) word.
