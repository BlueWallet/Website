---
title: Coldcard - Cloud
subtitle: Coldcard with Bluewallet - Using Dropbox
tags: [hww]
---

  <div class="uk-container{{container}}">
      <div class="videoWrapper">
        <iframe src="https://www.youtube.com/embed/hF2MyDB0nno?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
      </div>
  </div>


In this video you will see the usage of PSBT, watch-only wallets. And how to send transactions offline with your Coldcard and Bluewallet. Using dropbox on this example.

- Start the Coldcard device, go to `Advanced` ➤ `MicroSD Card` ➤ `Export Wallet` ➤ `Electrum Wallet`. 
- Put the SD card into Coldcard. Choose Native Segwit. It should create wallet skeleton file on SD card.
- Put the SD card into the PC and move the created wallet skeleton file onto the Dropbox folder.
- Grab the iPhone, launch BlueWallet, tap `Create a wallet` ➤ `Import wallet` ➤ `scan QR or import from file` ➤ `tap file icon` and choose your wallet skeleton file. It should import your Coldcard wallet as watch-only.
- Create a transaction from this watch-only wallet, when prompted - export it to a file and save it in Dropbox folder.
- Put the SD card back into the PC, and move the transaction file from Dropbox folder to the SD card.
- Put the SD card into the Coldcard, go to Ready To Sign and proceed with signing the transaction.
- Put the SD card into the PC. There should be 2 new files: a file with tge transaction hex that is ready to broadcast `(*-final.txn)`, and a signed transaction file `(*-signed.psbt)`.Let us finish the transaction on iPhone, so move signed transaction file to Dropbox.
- On the iPhone, tap Open Signed Transaction, and choose the signed transaction file from your Dropbox. - Tap Send now!

PS: Take in consideration that we used dropbox on this example, but anything will work, File system, iCloud, Bluetooth, AirDrop, box.com, direct lightning to sd card adapter, etc