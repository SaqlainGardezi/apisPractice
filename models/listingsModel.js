var mongoose = require( 'mongoose' );


mongoose.Promise = require('bluebird');

//var dbURI = 'mongodb://localhost/locator';


//if (process.env.NODE_ENV === 'production') {
	
	//dbURI = process.env.MONGOLAB_URI;
	dbURI='mongodb://saqlain:12345@ds049631.mlab.com:49631/getting-mean';
//} 

//mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});



 /* 		Main Schema 	*/
var listingSchema=new mongoose.Schema({
	name: {type: String,
			required: true},
	baths: Number,
	beds: Number,
	Garrages: Boolean

});

// 			Compile schema into model
mongoose.model('Listing', listingSchema);