
const { appendFile } = require('fs');
const mongoos = require('mongoose');


const express =require('express');

const app= express();

require("./src/database/DatabaseConnection");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const customerRoute = require("./src/routers/CustomerRouter");
app.use(customerRoute);

app.listen(3000, () => {
    console.log('server listening ata port 3000');
});

