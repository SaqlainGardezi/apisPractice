var mongoose=require('mongoose');
var Dealer=mongoose.model('Dealer');



var sendJsonResponse=function(res,status,content){
	res.status(status);
	res.json(content);
};

// GET /
module.exports.displayAll=function(req,res){
	Dealer.find({}, function(err, dealers){
		if (err) { throw err;}
			
			sendJsonResponse(res, 200,dealers);

	});
};

// GET /:id
module.exports.displayOne=function(req,res){
	if(req.params.id){
	Dealer.findById(req.params.id, function(err, dealer){
		if (err) {
			sendJsonResponse(res,404, err);
		}
		else{
			sendJsonResponse(res,200, dealer);

		}
	});
	}
};

// POST /
module.exports.createOne=function(req,res){
	Dealer.create({
		agencyName: req.body.agencyName,
		agentName: req.body.agentName,
		email:req.body.email,
		address:req.body.address,
		city:req.body.city,
		contact: req.body.contact,
		website:req.body.website
	}, function(err, dealer){
		if (err) {
			sendJsonResponse(res, 400, err);
		}
		else{
			sendJsonResponse(res, 201,dealer);
		}
	}
	);

};

// DELETE /:id
module.exports.deleteOne=function(req,res){
	var dealerid=req.params.id;
	//console.log(listingid);
	if (dealerid) {
		Dealer.findByIdAndRemove(dealerid, function(err) {
  			if (err) throw err;
 			 // we have deleted the user
			sendJsonResponse(res, 200, {"message":"item deleted",
										"id": dealerid}
							);
		});
	}
	else{
		sendJsonResponse(res, 404, {
			"message": "No dealerid"
		});
	}
};

// PUT /:id
module.exports.editOne=function(req,res){
	Dealer.findByIdAndUpdate(req.params.id, { 	
						agencyName: req.body.agencyName,
						agentName: req.body.agentName,
						email:req.body.email,
						address:req.body.address,
						city:req.body.city,
						contact: req.body.contact,
						website:req.body.website						
							 				},
	function(err, dealer) {
		if (err) throw err;
		sendJsonResponse(res,200,req.body);
	});
};

