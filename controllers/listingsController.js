var mongoose=require('mongoose');
var Listing=mongoose.model('Listing');



var sendJsonResponse=function(res,status,content){
	res.status(status);
	res.json(content);
};

// GET /
module.exports.displayAll=function(req,res){
	Listing.find({}, function(err, listings){
		if (err) { throw err;}
			
			sendJsonResponse(res, 200,listings);

	});
};

// GET /:id
module.exports.displayOne=function(req,res){
	if(req.params.id){
	Listing.findById(req.params.id, function(err, listing){
		if (err) {
			sendJsonResponse(res,404, err);
		}
		else{
			sendJsonResponse(res,200, listing);

		}
	});
	}
};

// POST /
module.exports.createOne=function(req,res){
	Listing.create({
		name:req.body.name,
		baths:req.body.baths,
		beds: req.body.beds,
		garrages: req.body.garrages
	}, function(err, listing){
		if (err) {
			sendJsonResponse(res, 400, err);
		}
		else{
			sendJsonResponse(res, 201,listing);
		}
	}
	);

};

// DELETE /:id
module.exports.deleteOne=function(req,res){
	var listingid=req.params.id;
	//console.log(listingid);
	if (listingid) {
		Listing.findByIdAndRemove(listingid, function(err) {
  			if (err) throw err;
 			 // we have deleted the user
			sendJsonResponse(res, 200, {"message":"item deleted",
										"id": listingid}
							);
		});
	}
	else{
		sendJsonResponse(res, 404, {
			"message": "No locationid"
		});
	}
};

// PUT /:id
module.exports.editOne=function(req,res){
	Listing.findByIdAndUpdate(req.params.id, { name:req.body.name,
												baths:req.body.baths,
												beds: req.body.beds,
												garrages: req.body.garrages						
							 				},
	function(err, listing) {
		if (err) throw err;
		sendJsonResponse(res,200,req.body);
	});
};

