const express = require('express');
const app = express();
const cors = require('cors');


const PORT = 8080;

app.use(cors({origin: 'http://localhost:3000/'}))

const indexRoutes = require('./routes/index.routes');
app.use('/', indexRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})
