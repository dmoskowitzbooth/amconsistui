const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');
module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./ssl/server.key'),
      cert: fs.readFileSync('./ssl/server.crt')
    },
    port: 8080
  }
};
