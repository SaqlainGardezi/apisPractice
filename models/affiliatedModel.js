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
var affiliatedSchema=new mongoose.Schema({
	ownerName: {	type: String,
					required: true
				},
	companyName: String,
	teamMember: Number,
	address: String,
	contact:String,
	email:{	type:String,
			required:true
			},
	password:String

});

// 			Compile schema into model
mongoose.model('Affiliated', affiliatedSchema);