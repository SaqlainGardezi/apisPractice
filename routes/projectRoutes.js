var express=require('express');
var router=express.Router();

var ctrlProjects=require('../controllers/projectsController');

router.get('/', ctrlProjects.displayAll);
router.get('/:id', ctrlProjects.displayOne);

router.post('/', ctrlProjects.createOne);

router.delete('/:id', ctrlProjects.deleteOne);

router.put('/:id', ctrlProjects.editOne);

module.exports=router;