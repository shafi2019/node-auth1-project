const users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    const { username, password } = req.headers
    if (!(username && password)) {
        res.status(401).json({ Message: "Invalid Credentials"});
    } else {
        users.findBy({ username })
        .first()
        .then(_user => {
            if (_user && bcrypt.compareSync(password, _user.password)) {
                next()
            } else {
                res.status(401).json({ Message: "Invalid credential" })
            }
        })
        .catch((error) => {res.status(500).json({ messege: error })
    })
    }
}
