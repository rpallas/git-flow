var express = require('express');
var router = express.Router();

/* GET hello. */
router.get('/:name', function(req, res) {
  res.send(`hello ${req.params.name || ''}`);
});

module.exports = router;
