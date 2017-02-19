var express = require('express');
var router = express.Router();

/* GET goodbye. */
router.get('/', function(req, res) {
  res.send(`goodbye`);
});

/* GET goodbye with name. */
router.get('/:name', function(req, res) {
  res.send(`goodbye ${req.params.name}`);
});

module.exports = router;
