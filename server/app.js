const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    res.json({ randomNumber });
});
app.listen(3000);
