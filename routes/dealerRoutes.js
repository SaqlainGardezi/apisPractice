var express=require('express');
var router=express.Router();

var ctrlDealers=require('../controllers/dealersController');

router.get('/', ctrlDealers.displayAll);
router.get('/:id', ctrlDealers.displayOne);

router.post('/', ctrlDealers.createOne);

router.delete('/:id', ctrlDealers.deleteOne);

router.put('/:id', ctrlDealers.editOne);

module.exports=router;