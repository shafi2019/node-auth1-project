const router = require('express').Router();

const Users = require('users-model.js');


router.get('/', (re, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(error => res.send(error))
});

module.exports = router;