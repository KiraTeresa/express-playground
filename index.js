const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

app.use(cors({origin: 'http://localhost:3000/'}))
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.json({type: 'application/csp-report'}));

const indexRoutes = require('./routes/index.routes');
app.use('/', indexRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})
