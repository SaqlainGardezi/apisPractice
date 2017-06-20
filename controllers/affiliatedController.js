var mongoose=require('mongoose');
var Affiliated=mongoose.model('Affiliated');



var sendJsonResponse=function(res,status,content){
	res.status(status);
	res.json(content);
};

// GET /
module.exports.displayAll=function(req,res){
	Affiliated.find({}, function(err, affiliated){
		if (err) { throw err;}
			
			sendJsonResponse(res, 200,affiliated);

	});
};

// GET /:id
module.exports.displayOne=function(req,res){
	if(req.params.id){
	Affiliated.findById(req.params.id, function(err, affiliated){
		if (err) {
			sendJsonResponse(res,404, err);
		}
		else{
			sendJsonResponse(res,200, affiliated);

		}
	});
	}
};

// POST /
module.exports.createOne=function(req,res){
	Affiliated.create({
		ownerName: req.body.ownerName,
		companyName: req.body.companyName,
		email:req.body.email,
		address:req.body.address,
		teamMember:req.body.teamMember,
		contact: req.body.contact,
		password:req.body.password
	}, function(err, affiliated){
		if (err) {
			sendJsonResponse(res, 400, err);
		}
		else{
			sendJsonResponse(res, 201,affiliated);
		}
	}
	);

};

// DELETE /:id
module.exports.deleteOne=function(req,res){
	var affiliatedid=req.params.id;
	//console.log(listingid);
	if (affiliatedid) {
		Affiliated.findByIdAndRemove(affiliatedid, function(err) {
  			if (err) throw err;
 			 // we have deleted the user
			sendJsonResponse(res, 200, {"message":"item deleted",
										"id": affiliatedid}
							);
		});
	}
	else{
		sendJsonResponse(res, 404, {
			"message": "No affiliatedid"
		});
	}
};

// PUT /:id
module.exports.editOne=function(req,res){
	Affiliated.findByIdAndUpdate(req.params.id, { 	
						ownerName: req.body.ownerName,
						companyName: req.body.companyName,
						email:req.body.email,
						address:req.body.address,
						teamMember:req.body.teamMember,
						contact: req.body.contact,
						password:req.body.password						
							 				},
	function(err, affiliated) {
		if (err) throw err;
		sendJsonResponse(res,200,req.body);
	});
};

