require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Essentials!');
});

app.post('/', (req, res) => {
	console.log('User is comming.');
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log('Server is running.');
});
