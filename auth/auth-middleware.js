//const users = require('../users/users-model.js');
//const bcrypt = require('bcryptjs');
/*
module.exports = (req, res, next) => {
   const { username, password } = req.headers
    if (!(username && password)) {
        res.status(401).json({ Message: "Invalid Credentials"});
    } else {
        users.findBy({ username })
        .first()
        .then(_user => {
            if (_user && bcrypt.compareSync(password, _user.password)) {
                req.session._user = _user;
                next()
            } else {
                res.status(401).json({ Message: "Invalid credential" })
            }
        })
        .catch((error) => {res.status(500).json({ messege: error })
    })
    }
    
}
*/

module.exports = (req, res, next) => {
  if (req.session.logedin && (req.session.logedin === true)) {
      next();
  } else {
      res.status(400).json({
          Message: "Stop!! You are not authorized"
      })
  }
};