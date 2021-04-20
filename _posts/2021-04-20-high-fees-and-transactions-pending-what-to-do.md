---
layout: post
title: High fees and transactions pending - What to do
date: 2021-04-20 09:36:00
categories: usage, tutorial
---
<div id="bump" class="uk-card">
     <div class="features uk-text-center">
           <img src="https://bluewallet.io/uploads//features/fees.png" alt="fee estimation">
        </div>
   </div>

As could be [predicted a more mature fee market](https://bluewallet.io/Preparing-for-war-how-was-2019-and-a-glimpse-of-the-future-72637ffe58eb/) started to develop in this cycle, and we are witnessing a natural competition for block space. Think about block space as another very scarce property of the network, where participants are competing to get their transactions in.

As I write this my bitcoin node is rejecting transactions below the 12 sat/vb mark, the network is full, the next block target is 200 sats/vb. Essentially, it is not looking good, so let's take a look from the user perspective on what can be done to mitigate this and save some satoshis at the same time.

Your bitcoin wallet app should be the one to act in your best interests, trying to save as much sats on transactions as possible and, at the same time, give you the full control you need and should have. Most apps out there are doing an embarrassing job on this, with poor fee estimations or simply not even being ready to send and receive Segwit transactions. Which ends-up contributing to the high fee environment we are seeing. 

Let's take a look on all the strategies we have available

### Segwit wallets

BlueWallet provides Segwit wallets (bech32) by default, which are the ones that help you on saving more on fees. Besides allowing you to save on fees they also optimize the block space you use, which we already saw it was a scarce resource. Now, unfortunately there are still some wallets/exchanges not using Segwit. You can do two things about it. First, stop using them. And two, ask them to upgrade their wallets ffs.

### Fee estimation and Flexible fees 

We have a lot going on in the Fees feature, so try to take full advantage of it. It provides you a fee estimation targeting confirmations in 10m, 3h or 1 day. This estimations are done in real time in two ways, first by looking directly to the current mempool state, which is different from most services that are using historical data from the node. It does not mean that one is correct and the other is wrong (both are not great). But in times of fee volatility, it does not help much to look to historical data, you want to look to the data in real time so it adapts faster to the huge swigs we see nowadays. Second, you can see how much you are spending without creating the transaction, just type a value a check the fee result live.

Now that we know this about the fee estimation and that we can manually change it and tweak it, we can take better advantage of the next two features. And we can do this by simply sending a smaller fee, and then changing it based on the time it is taking to confirm and our preference. 

### Bump transaction 

<div class="uk-text-center">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Transactions not confirming? <br><br>Here&#39;s how to bump the fee and increase the transaction priority.<br><br>👩‍🎤 <a href="https://t.co/0OWjrc1Oru">https://t.co/0OWjrc1Oru</a> <a href="https://twitter.com/hashtag/bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#bitcoin</a> <a href="https://t.co/p7XvimVrdY">pic.twitter.com/p7XvimVrdY</a></p>&mdash; BlueWallet (@bluewalletio) <a href="https://twitter.com/bluewalletio/status/1383426612218134533?ref_src=twsrc%5Etfw">April 17, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</div>

Bump transactions using RBF or replace-by-fee, is useful if you sent a transaction and it’s still unconfirmed (pending) you can replace it with the one with higher fees, making it more attractive for miners to mine, thus, speeding up the confirmation.

### Cancel transaction 

Cancel transactions using RBF or replace-by-fee  is technique similar to regular RBF, but where the replacement transaction’s output is the address you control, thus, paying to yourself (your wallet address), effectively cancelling the transaction.

### Batch send 

Now a very simple technique that people usually forget and useful when doing more than one transaction is that you can do multiple "sends" on a single transaction. when creating a transaction add as many payees as you want. This helps to save on fees, helps to optimize for block space, etc. So please use it and abuse it, we did spend some time on trying to make a good experience for this feature, so let us know how does it go.

### Lightning

Not using the block space is probably the best alternative when it comes to fees, and that's what Lightning is about. You can use our Lightning service with zero configuration. Or you can use your own node, [mynodebtc](http://mynodebtc.com/) makes this super simple, and soon the service will be available on [umbrel](https://getumbrel.com/) as well.

<hr class="uk-margin-medium">

There's more advanced techniques like utxo consolidation strategies, but the ones mentioned should give you the best experience in terms of fees and confirmation times possible at the moment with a bitcoin wallet. In essence, you can try to switch to Lightning whenever it is possible, or optimize your usage of the block space, for both yours and others convenience.

This is why it was important to prepare for this scenario in advance, and I'm happy that we did so, there's a lot of work and optimization done in the past couple of years that I believe put BlueWallet in the state of the art in the ecosystem when it comes to fees and transaction optimization for the user. From the top notch fee estimation to the batch experience, to the ability to just cancel a transaction that it is taking too long. 

1 sat/b transaction fees are gone (at least for awhile) and there's now a fee market that we need to optimize for. \
\
Keep building!