const express = require('express');

const { ServerConfig,Logger } = require('./config');
const apiRoutes = require('./routes');
const city = require('./models/city');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () =>{
    console.log(`the server is running in ${ServerConfig.PORT}`);    
})