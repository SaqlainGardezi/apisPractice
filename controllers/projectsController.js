var mongoose=require('mongoose');
var Project=mongoose.model('Project');



var sendJsonResponse=function(res,status,content){
	res.status(status);
	res.json(content);
};

// GET /
module.exports.displayAll=function(req,res){
	
	Project.find({}, function(err, projects){
		if (err) { throw err;}
			
			sendJsonResponse(res, 200,projects);

	});
};

// GET /:id
module.exports.displayOne=function(req,res){
	if(req.params.id){
	Project.findById(req.params.id, function(err, project){
		if (err) {
			sendJsonResponse(res,404, err);
		}
		else{
			sendJsonResponse(res,200, project);

		}
	});
	}
};

// POST /
module.exports.createOne=function(req,res){
	Project.create({
		name: req.body.name,
		developerName: req.body.developerName,
		paymentMode:req.body.paymentMode,
		overview:req.body.overview,
		duration:req.body.duration,
		keyPersons: req.body.keyPersons,
		services:req.body.services


	}, function(err, project){
		if (err) {
			sendJsonResponse(res, 400, err);
		}
		else{
			sendJsonResponse(res, 201,project);
		}
	}
	);

};

// DELETE /:id
module.exports.deleteOne=function(req,res){
	var projectid=req.params.id;
	//console.log(listingid);
	if (projectid) {
		Project.findByIdAndRemove(projectid, function(err) {
  			if (err) throw err;
 			 // we have deleted the user
			sendJsonResponse(res, 200, {"message":"item deleted",
										"id": projectid}
							);
		});
	}
	else{
		sendJsonResponse(res, 404, {
			"message": "No projectid"
		});
	}
};

// PUT /:id
module.exports.editOne=function(req,res){
	Project.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			developerName: req.body.developerName,
			paymentMode:req.body.paymentMode,
			overview:req.body.overview,
			duration:req.body.duration,
			keyPersons: req.body.keyPersons,
			services:req.body.services						
					 				},
	function(err, project) {
		if (err) throw err;
		sendJsonResponse(res,200,req.body);
	});
};

