var express=require('express');
var router=express.Router();

var ctrlListings=require('../controllers/listingsController');

router.get('/', ctrlListings.displayAll);
router.get('/:id', ctrlListings.displayOne);

router.post('/', ctrlListings.createOne);

router.delete('/:id', ctrlListings.deleteOne);

router.put('/:id', ctrlListings.editOne);

module.exports=router;