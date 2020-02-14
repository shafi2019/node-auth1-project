const router = require('express').Router();

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

router.use('/users', usersRouter);
router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.json({ api: "Let's Write Some code" });
  });
  
module.exports = router;
  