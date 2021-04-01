---
title: LNDHub on Mac OSX
tags:
  - lndhub
---
**Requirements:**

* [NodeLauncher](https://github.com/lightning-power-users/node-launcher)
* Mac Terminal
* Homebrew installed — [https://brew.sh](https://brew.sh/)
* [LndHub](https://github.com/BlueWallet/LndHub)
* [BlueWallet](http://bluewallet.io/)

Let’s create a self-sovereign mobile lightning wallet using nothing but a Mac, a mobile phone and some software supplied by the fantastic open source community!

![](/assets/img/uploads/1.png)

Step 1 — LND

1A — Download and set up Pierre Rochard’s NodeLauncher.

**[lightning-power-users/node-launcher](https://github.com/lightning-power-users/node-launcher/releases)**

Setup guide here:

**[Easiest Bitcoin Lightning Guide](https://medium.com/lightning-power-users/windows-macos-lightning-network-284bd5034340)**

![](/assets/img/uploads/2.png)

Launch Bitcoin and LND

1B— “**Launch Bitcoin**” to begin syncing with Bitcoin (12–72 hours).

1C — “**Launch LND**” to start syncing LND (2–6 hours)

1D — “**Create**” LND Wallet

Step 2— LndHub

LndHub is the open-source wrapper for LND provided by BlueWallet.

[**BlueWallet/LndHub***Wrapper* ](https://github.com/BlueWallet/LndHub)

2A — Set up the LNDHub

git clone [git@github.com](mailto:git@github.com):BlueWallet/LndHub.git\
cd LndHub

2B— Copy in the LND Macaroon `admin.macaroon`to the LndHub directory. Quick find from NodeLauncher, “**Show Macroons**”:

![](/assets/img/uploads/3.png)

Click “Show Macaroons”

2C — Copy in the `tls.cert` file. Quick find by Nodelauncher “**Advanced**” menu, then “S**how lnd.conf**”

![](/assets/img/uploads/4.png)

Click “Show lnd.conf”

![](/assets/img/uploads/5.png)

Copy this file into LndHub folder

2D — Edit the LndHub `config.js` file to add bitcoin RPC credentials

sudo nano config.js

* Change bitcoind.rpc login:password to match the rpcuser & rpcpassword in your bitcoin.conf (use Nodelauncher Advanced menu to locate this file, and then a text editor to open)
* Change all the IP addresses from 1.1.1.1 to 127.0.0.1
* Change <LND gRPC Port> to what is specified on your NodeLauncher pane (usually 10010 )
* Change the redis port from 12914 to 6379

let config = {bitcoind: {rpc: 'http://<rpcuser>:<rpcpassword>@127.0.0.1:8332',},redis: {port: 6379,host: '127.0.0.1',family: 4,password: 'password',db: 0,},lnd: {url: '127.0.0.1:<LND gRPC port>',password: '',},};if (process.env.CONFIG) {console.log('using config from env');config = JSON.parse(process.env.CONFIG);}module.exports = config;Step 3— Redis

Redis is the datastore for LndHub.

3A —Install Redis, then create the working directory inside the LndHub folder

brew install redis\
sudo mkdir redis

3B — Edit the `redis.conf` file

sudo nano /usr/local/etc/redis.conf

Change the supervision `supervised systemd` :

![](/assets/img/uploads/6.png)

Change the working directory to `dir /Users/<user>/LndHub/redis` :

![](/assets/img/uploads/7.png)

Get stuck? Additional tutorial [here](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298): <https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298>

Step 4— Deploy with NPM and Babel

Finalise LndHub configuration and deploy. Ensure you are back in your main LndHub directory (/User/<user>/LndHub)

4A — Install Node, and then check versions

brew install nodenode -v\
npm -v

4B — Install node modules

npm config set prefix '~/.npm-global'\
export PATH=~/.npm-global/bin:$PATH\
npm install

4C — Compile babeljs

npm install -g babel-cli\
mkdir buildbabel ./ --out-dir ./build --copy-files --ignore node_modules

4D — Run LndHub

node build/index.js

Check for `'BOOTING UP' 'Listening on port 3000'`

Head to <http://127.0.0.1:3000/> to now see LndHub running.

Step 5— Port Forward

Since LndHub is running locally, we need to forward external ports.

5A — Head to `192.168.0.1` in your browser, and enter your router username and password. Google it if you don’t know, but normally `admin:password`

5B — Find your computer’s MAC and IP address (displayed in “devices” or “overview”). Also can use `ifconfig` [to get MAC](https://ithelp.brown.edu/kb/articles/find-the-mac-address-of-a-computer-or-device) and `ipconfig getifaddr en0`[to get local IP](https://apple.stackexchange.com/questions/20547/how-do-i-find-my-ip-address-from-the-command-line) in terminal.

5C — Navigate to “Games and Services” to find “Port Forwarding” and add your LndHub as a forwarded port on 3000. My local IP was `192.168.0.13`

![](/assets/img/uploads/8.png)

5C — Navigate to “LAN” and then locate the “DHCP Reservation Lease” pane. Bind your Local IP to your MAC Address:

![](/assets/img/uploads/9.png)

All this is doing is forwarding external requests on port 3000 direct to your local IP and directly to your Mac’s Address.

Now find your external IP address (google “what’s my IP” if you don’t know), and add port 3000 in your browser:

[http://<YOUR-IP-ADDRESS>:3000/](http://144.132.69.213:3000/)

![](/assets/img/uploads/10.png)

LndHub Running!

Step 6— Connect to BlueWallet

Now head to BlueWallet and add the above url to in Lightning Settings. You are self-sovereign!

![](/assets/img/uploads/11.png)