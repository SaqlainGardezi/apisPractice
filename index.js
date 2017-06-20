var express=require('express');
var path=require('path');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');

//Models
require('./models/listingsModel');
require('./models/dealersModel');
require('./models/affiliatedModel');
require('./models/projectsModel')

// Routes
var listingRoutes = require('./routes/listingRoutes');
var dealerRoutes=require('./routes/dealerRoutes');
var affiliatedRoutes=require('./routes/affiliatedRoutes');
var projectRoutes=require('./routes/projectRoutes');


//setup express app
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Call to api
app.use('/api/listing', listingRoutes);
app.use('/api/dealer', dealerRoutes);
app.use('/api/affiliated', affiliatedRoutes);
app.use('/api/project', projectRoutes);

// to use Angular continue with it
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//listen for requests
app.listen(process.env.port || 3000, function(err){
	console.log(" >> Now listening for requests ");
});
