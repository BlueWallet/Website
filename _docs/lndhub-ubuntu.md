---
title: LNDhub on VPS with Ubuntu
subtitle: Coldcard with Bluewallet - Lightning SD card
tags:
  - lndhub
---
To avoid rewriting things already well explained in other tutorials, I leave here [a link to set up](https://gist.github.com/bretton/0b22a0503a9eba09df86a23f3d625c13) your Bitcoin&Lightning node on Ubuntu 16.04, if you already have one you can jump to Step 1.\
You can follow this or other guides as long as LND is the implementation of choice for Lightning, we will apply the necessary changes to configurations files in the next steps. If you are starting from scratch, I suggest to execute this on a VPS, for example a Digital Ocean's droplet.

### Step 1: Install Redis

LndHub uses Redis as database, install it with

```
$ sudo apt update
$ sudo apt install redis-server
```

and edit two important settings in

```
$ sudo nano /etc/redis/redis.conf

```

changing the line about `supervised` from `supervised no` to `supervised systemd`

```
# If you run Redis from upstart or systemd, Redis can interact with your
# supervision tree. Options:
#   supervised no      - no supervision interaction
#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode
#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET
#   supervised auto    - detect upstart or systemd method based on
#                        UPSTART_JOB or NOTIFY_SOCKET environment variables
# Note: these supervision methods only signal "process is ready."
#       They do not enable continuous liveness pings back to your supervisor.
supervised systemd
```

and the line `appendonly no` to `appendonly yes` to enable disk persistance.

```
# AOF and RDB persistence can be enabled at the same time without problems.
# If the AOF is enabled on startup Redis will load the AOF, that is the file
# with the better durability guarantees.
#
# Please check http://redis.io/topics/persistence for more information.

appendonly yes

# The name of the append only file (default: "appendonly.aof")

appendfilename "appendonly.aof"

# The fsync() call tells the Operating System to actually write data on disk
```

### Step 2: Redis autostart

Setup Redis to start automatically after a system restart. Open the file

```
$ sudo nano /etc/systemd/system/redis.service

```

and paste the following script inside.

```
[Unit]
Description=Redis In-Memory Data Store
After=network.target

[Service]
User=redis
Group=redis
ExecStart=/usr/bin/redis-server /etc/redis/redis.conf
ExecStop=/usr/bin/redis-cli shutdown
Restart=always

[Install]
WantedBy=multi-user.target
```

Now start and enable it with `systemctl`.

```
$ sudo systemctl start redis
$ sudo systemctl enable redis
```

### Step 3: Bitcoin&LND configuration files

Since `bitcoin.conf` and `lnd.conf` are often topic of discussion, here I paste my files that are currently working with Bitcoin v0.17.1 and LND v0.5.1-beta, except for passwords of course.

```
$ sudo nano .bitcoin/bitcoin.conf

```

```
server=1
txindex=1
daemon=1
externalip=104.248.248.9
maxconnections=10
rpcuser=user
rpcpassword=password
minrelaytxfee=0.00000000
incrementalrelayfee=0.00000010
zmqpubrawblock=tcp://127.0.0.1:28332
zmqpubrawtx=tcp://127.0.0.1:28333
rpcport=8332

```

```
$ sudo nano .lnd/lnd.conf

```

```
[Application Options]
; set external IP if not using NAT
externalip=104.248.248.9
; set node alias (seen in explorers)
alias=HIVENLABSLN1
restlisten=localhost:8080

[Bitcoin]
bitcoin.active=1
bitcoin.mainnet=1
bitcoin.node=bitcoind

[Bitcoind]
bitcoind.rpcuser=user
bitcoind.rpcpass=password
bitcoind.zmqpubrawblock=tcp://127.0.0.1:28332
bitcoind.zmqpubrawtx=tcp://127.0.0.1:28333

```

Note: `external IP` field is to be changed according to your VPS IP.

### Step 4: Download and configure LndHub

You are now ready to get and install LndHub, start copying the github repository with

```
$ git clone https://github.com/BlueWallet/LndHub

```

and copy `admin.macaroon` and `tls.cert` in root folder of LndHub.

```
$ cp .lnd/data/chain/bitcoin/mainnet/admin.macaroon LndHub/
$ cp .lnd/tls.cert LndHub/
```

Now you need to set the config file of LndHub. As for `bitcoind` and `lnd` I leave you here my version.

```
$ sudo nano LndHub/config.js

```

```
let config = {
  bitcoind: {
    rpc: 'http://user:password@127.0.0.1:8332',
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    family: 4,
    db: 0,
  },
  lnd: {
    url: '127.0.0.1:10009',
  },
};

if (process.env.CONFIG) {
  console.log('using config from env');
  config = JSON.parse(process.env.CONFIG);
}

module.exports = config;

```

### Step 5: Install LndHub

Node is required to install and run LndHub, install it with the following command.

```
$ sudo apt install nodejs npm

```

Enter the LndHub folder and install node modules.

```
$ cd LndHub
$ npm install
```

Compile babeljs

```
$ npm install -g babel-cli
$ mkdir build
$ babel ./ --out-dir ./build --copy-files --ignore node_modules
```

and, finally, run it.

```
$ node build/index.js 

```

### Step 6: LndHub autostart

Setup LndHub to start automatically after a system restart. Open the file

```
$ sudo nano /etc/systemd/system/lndhub.service

```

and paste the following script inside.

```
[Unit]
Description=LndHub Wrapper for Lightning Daemon
Wants=lnd.service
After=lnd.service

[Service]
WorkingDirectory=/LndHub
ExecStart=/usr/bin/node build/index.js

Type=simple
KillMode=process
LimitNOFILE=128000
TimeoutSec=240
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
```

Now start and enable it with `systemctl`.

```
$ sudo systemctl enable lndhub
$ sudo systemctl start lndhub
```

You should now see the LndHub default page at this address: <http://vps-ip-address:3000/>

### Step 7: Link Bluewallet to your node

Open the Bluewallet app on your smartphone, go to settings (top-right corner) -> Lightning Settings and add your node URL <http://vps-ip-address:3000/>.\
There is no confirmation message when you click Save at the moment, v3.7.2 on iOS, so don't worry if you don't see any feedback. The first test you can do is create a new Lightning wallet and generate an invoice, and if no error is returned, it's all correctly configured.\
Your bank is born, let's take a moment to think about what you achieved here: you can now pay in BTC from your smartphone instantly with Lightning, everywhere in the world, and you can let somebody who trusts you join your node and create their account linked with your hub just downloading an app.