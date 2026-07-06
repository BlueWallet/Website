---
title: Coin control — select and manage coins
tags: [usage, featured]
---

Coin control lets you view, label, freeze, and hand-pick the UTXOs (coins) used when you send Bitcoin. That helps with privacy, fee management, and keeping certain outputs separate.

This guide applies to **on-chain Bitcoin wallets** that already have coins.

## Open coin control from wallet details

Open your Bitcoin wallet, tap the wallet menu, then go to **Wallet details**.

Scroll to the **Coins** row and tap it to open Coin Control.

{% include phone-screenshot-image.html img="coin-control-01-wallet-details-coins.png" alt="Wallet details showing the coins row" %}

## Coin control overview

The Coin Control screen lists every spendable coin in the wallet. Each row shows the amount, address or label, and badges for **change** or **frozen** outputs.

The tip at the top explains that you can tap the colored circles to select multiple coins.

{% include phone-screenshot-image.html img="coin-control-02-coin-control-overview.png" alt="Coin Control screen listing wallet coins" %}

## View or edit a single coin

Tap a coin row (not the circle) to open its detail sheet. From here you can:

- Add or edit a **label** (memo) for the coin
- **Freeze** or unfreeze the coin so it is not spent accidentally
- Tap **Use coin** to start a send with only that output

{% include phone-screenshot-image.html img="coin-control-03-coin-detail.png" alt="Coin detail sheet with label and freeze options" %}

## Select coins for a send

To spend specific coins, tap the **colored circle** on one or more rows. Selected coins are highlighted and a bar appears at the bottom with **Freeze** / **Unfreeze** and **Use coin(s)**.

{% include phone-screenshot-image.html img="coin-control-04-coin-selected.png" alt="One coin selected with action buttons visible" %}

Tap **Use coin** or **Use coins** to open the send screen with only those outputs selected.

{% include phone-screenshot-image.html img="coin-control-05-send-with-selected-coins.png" alt="Send screen showing selected coins banner" %}

The blue **Coins selected** banner confirms which outputs will be used. Tap it to return to Coin Control and change your selection, or tap **×** to clear the selection and use automatic coin selection again.

## Tips

- **Frozen** coins stay in the wallet but are skipped when building transactions unless you explicitly select them in Coin Control.
- Coin control is available from **Send** as well — open the send screen menu and choose **Coin control** for the same view.
