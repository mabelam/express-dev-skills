var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills');
const skills = require('../controller/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/:id/delete', skillsCtrl.delete);
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;
