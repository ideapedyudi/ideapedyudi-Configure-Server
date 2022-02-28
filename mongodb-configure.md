## 📦 Install

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

```bash
sudo apt-get install gnupg
```

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install -y mongodb-org
```


## ✨ Command

```bash
sudo systemctl start mongod
```

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl status mongod
```

```bash
sudo systemctl enable mongod
```

```bash
sudo systemctl stop mongod
```

```bash
sudo systemctl restart mongod
```