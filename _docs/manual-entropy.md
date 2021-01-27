---
title: Adding manual entropy
tags: [setup]
---

BlueWallet supports manual entropy.

To use this feature, go to:

`Settings` ➤ `General` then toggle on `Advanced mode`.

Now when you go back to the "add wallet" screen, you will see the option to add manual entropy.

{% include phone-screenshot-image.html img="add-manual-entropy.png" alt="Add manual entropy" %}

This option is available for both Bitcoin and Lightning wallets.

You can choose to provide a custom source of entropy for your wallet, either by a coin flip, 6-sided dice roll, or 20-sided dice roll.

## Supported sources of entropy

### 6-sided dice roll

{% include phone-screenshot-image.html img="6-sided-dice-roll-manual-entropy.png" alt="6-sided dice roll manual entropy" %}

### 20-sided dice roll

{% include phone-screenshot-image.html img="20-sided-dice-roll-manual-entropy.png" alt="20-sided dice roll manual entropy" %}

### Coin flip

{% include phone-screenshot-image.html img="coin-flip-manual-entropy.png" alt="Coin flip manual entropy" %}

When you're done entering your entropy, click "Save" to go back to the "add wallet" screen.

You should see a note at the bottom of the screen informing you that your saved entropy is being used:

{% include phone-screenshot-image.html img="manual-entropy-used.png" alt="Manual entropy is used" %}

If you didn't provide all the 256 bits of entropy, BlueWallet will use the system's random number generator to obtain the remaining bytes. In that case you'll see a message like this:

{% include phone-screenshot-image.html img="incomplete-manual-entropy.png" alt="Incomplete manual entropy" %}
