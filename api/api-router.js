const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ api: "Let's Write Some code" });
  });
  
  module.exports = router;
  