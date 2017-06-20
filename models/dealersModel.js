var mongoose = require( 'mongoose' );


mongoose.Promise = require('bluebird');

//var dbURI = 'mongodb://localhost/locator';


//if (process.env.NODE_ENV === 'production') {
	
	//dbURI = process.env.MONGOLAB_URI;
	dbURI='mongodb://saqlain:12345@ds049631.mlab.com:49631/getting-mean';
//} 

//mongoose.Promise = require('bluebird');


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
var dealerSchema=new mongoose.Schema({
	agencyName: {type: String,
				required: true},
	agentName: String,
	email:String,
	address:String,
	city:String,
	contact: String,
	website:String,
});

// 			Compile schema into model
mongoose.model('Dealer', dealerSchema);