const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000;

app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
	console.log(`Request received from '${req.hostname}'`);
	res.json({message: 'you got it'});
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})
