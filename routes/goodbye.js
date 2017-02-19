var express = require('express');
var router = express.Router();

/* GET goodbye listing. */
router.get('/', function(req, res) {
  res.send(`goodbye`);
});

/* GET goodbye listing. */
router.get('/:name', function(req, res) {
  res.send(`goodbye ${req.params.name}`);
});

module.exports = router;
