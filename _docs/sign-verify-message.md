---
title: Sign and verify a message
tags: [usage]
---

**Sign/Verify Message** lets you prove that a Bitcoin address belongs to a particular person — or check a proof someone sent you — without moving any funds. This is useful before sending a large payment, when onboarding to a service, or when confirming an address in chat. Many **exchanges ask or require address ownership confirmation** — they give you a message to sign so you can prove a withdrawal address is really yours.

## Open Sign/Verify Message

Open your wallet, tap **⋯** in the top-right corner to open [Wallet details](/docs/wallet-details/), then tap **Sign/Verify Message**.

The screen has three fields: **Address**, **Message**, and **Signature**.

{% include phone-screenshot-image.html img="sign-verify-message-01-screen.png" alt="Sign and verify message screen" %}

## Verify an address

When someone claims to own a Bitcoin address, they can sign a short message with that address’s private key and send you the **address**, **message**, and **signature**.

1. Paste the **Address** they provide (or leave the field as-is if you opened the screen from your own wallet).
2. Paste the exact **Message** they signed — every character must match.
3. Paste their **Signature**.
4. Tap **Verify**.

{% include phone-screenshot-image.html img="sign-verify-message-02-filled.png" alt="Address, message, and signature filled in before verifying" %}

If the signature is valid for that address and message, BlueWallet shows **Verification successful!**

{% include phone-screenshot-image.html img="sign-verify-message-03-verified.png" alt="Verification successful alert" %}

If anything does not match, you will see **Verification failed!** Do not trust the address until you get a valid signature or confirm the address another way.

## Sign a message (prove you own an address)

To prove your own address to someone else — for example when an **exchange asks you to confirm address ownership**:

1. Enter the **Address** you want to prove (pre-filled when you open the screen from your wallet).
2. Type the **Message** — use the exact text the exchange or service gives you, or a statement that you control the address.
3. Tap **Sign**. BlueWallet fills in the **Signature** field.
4. Send them the address, message, and signature. Use **Share** to send a verification link after signing.

They can verify it in BlueWallet or any compatible Bitcoin message verification tool.

## Tips

- Message signing does **not** spend bitcoin and does not reveal your private key.
- The message must match exactly — extra spaces or different capitalization will fail verification.
- This feature is available on on-chain Bitcoin wallets that support message signing. Lightning-only wallets do not offer it.
- You can also open Sign/Verify from an individual address in **Show addresses** on wallet details.
