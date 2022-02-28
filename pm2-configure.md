## 📦 Install

```bash
sudo apt update
```

```bash
sudo npm install pm2@latest -g
```

## ✨ Command

```bash
pm2 startup systemd
```

```bash
pm2 save
```

```bash
pm2 restart app_name
```

```bash
pm2 reload app_name
```

```bash
pm2 stop app_name
```

```bash
pm2 delete app_name
```

```bash
pm2 list
```

```bash
pm2 info app_name
```

```bash
pm2 monit
```

## 🤞 Script

```bash
npm start
```

```bash
pm2 start npm --name "app name" -- start
```

```bash
pm2 ecosystem
```

```bash
module.exports = {
    apps : [{
      name   : "app1",
      script : "./app.js"
    }]
}
```