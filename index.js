const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8080;

app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
	console.log(`Request received from '${req.hostname}'`);
	res.json({message: 'you got it'});
})

app.post('/csp-reporting', (req, res) => {
	const report = req.body;
	console.log({report});
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})
