var express=require('express');
var router=express.Router();

var ctrlAffiliated=require('../controllers/affiliatedController');

router.get('/', ctrlAffiliated.displayAll);
router.get('/:id', ctrlAffiliated.displayOne);

router.post('/', ctrlAffiliated.createOne);

router.delete('/:id', ctrlAffiliated.deleteOne);

router.put('/:id', ctrlAffiliated.editOne);

module.exports=router;