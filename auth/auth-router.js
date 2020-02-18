const router = require('express').Router();
const bcrypt = require('bcryptjs');
//const authorize = require('./auth-middleware.js');
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json({ Message: `You are saccessfully registered ${user.username}`, saved});
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.logedin = true;
            res.status(200).json({ Message: `Welcome ${user.username}! The session is working`});
        } else {
            res.status(401).json({ Message: 'Try again please' })
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((error) => {
           if (error) {
               res.status(400).send('you can not Log Out now....')
           } else {
               res.send('You are Loged Out, see you soon!')
           }
        })
    } else {
        res.send();
    }
})
module.exports = router;

