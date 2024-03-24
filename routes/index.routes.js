const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(`Request received from '${req.hostname}'`);
	res.json({message: 'you got it'});
})

router.post('/csp-reports', (req, res) => {
	console.log(`Report received from '${req.hostname}'`);
	const report = req.body;
	console.log({report});
    res.json({report: report});
})

module.exports = router;