const express = require('express');

const { ServerConfig,Logger } = require('./config');
const apiRoutes = require('./routes');
const serverConfig = require('./config/server-config');

const app = express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () =>{
    console.log(`the server is running in ${ServerConfig.PORT}`);
})