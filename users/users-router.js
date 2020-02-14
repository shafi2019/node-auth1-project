const router = require('express').Router();

const Users = require('./users-model.js');

const authrequired = require('../auth/auth-middleware.js');
router.get('/', authrequired,(req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});

module.exports = router;