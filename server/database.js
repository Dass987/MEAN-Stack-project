const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-stack';

mongoose.connect(URI)
	.then(db => console.log('DB is connected'))
	.catch(error => console.log(error));

module.exports = mongoose;