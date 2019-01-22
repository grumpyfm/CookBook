const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://testTask:qwerty1@ds159624.mlab.com:59624/cookbook',  {
    useNewUrlParser: true
});

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', route);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server stardet at port ${PORT}`);
});