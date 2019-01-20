const express = require('express');
const path= require('path');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds159624.mlab.com:59624/cookbook', {
    useNewUrlParser: true
});

const PORT = process.env.PORT || 8080;

