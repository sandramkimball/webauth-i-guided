const router = require('express').Router();
const bcrypt = require('bcryptjs');


const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});


//read password from body
//hash password
//return to user in object
//{password:'original pass', hash: 'hash password'}
router.post('/hash', (req, res)=> {
 bcrypt.genSalt(10, function (err, salt) {
   bcrypt.hash(req.body, salt, function(err, hash){
     //store hash in password db
   });
 });
    res.json({hash})
})

module.exports = router;
