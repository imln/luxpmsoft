const express = require('express');
const app = express();

//Routes
console.log("Enter serverJS");
require('./routes/routes')(app);

// Server setup
app.listen(8080, () => {
	console.log('server listening on port 8080');
});

