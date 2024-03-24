const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(`Request received from '${req.hostname}'`);
	res.json({message: 'you got it'});
})

router.post('/csp-reports', (req, res) => {
	console.log(`Report received from '${req.hostname}'`);
	const data = {
        blocked: req.body['csp-report']['blocked-uri'],
        violatedDirective: req.body['csp-report']['violated-directive']
    }
    console.log({data});
    res.json(data);
})

module.exports = router;