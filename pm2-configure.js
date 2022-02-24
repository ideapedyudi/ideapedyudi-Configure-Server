

// install
// sudo npm install pm2@latest -g


// command
// pm2 startup systemd
// pm2 save
// pm2 restart app_name
// pm2 reload app_name
// pm2 stop app_name
// pm2 delete app_name
// pm2 list
// pm2 info app_name
// pm2 monit


// ecosystem.config.js
// module.exports = {
//     apps : [{
//       name   : "app1",
//       script : "./app.js"
//     }]
//   }

// npm start
// pm2 start npm --name "app name" -- start