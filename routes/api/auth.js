const express = require('express');
const User = require('../core/user');
const router = express.Router();
const jwt = require('jsonwebtoken')

const user = new User();

router.post('/login', (req, res) => {
    
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            jwt.sign(
                result,
                config.get('jwtsecret'),
                {expiresIn: 3000},
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                }
            );
        }else {
            
            res.send('Username/Password incorrect!');
        }
    })

});


// Post register data
router.post('/register', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };
    
    user.create(userInput, function(lastId) {
      
        if(lastId) {
           
            user.find(lastId, function(result) {
                jwt.sign(
                    result,
                    config.get('jwtsecret'),
                    {expiresIn: 3000},
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token })
                    }
                );
            });

        }else {
            res.status(400).send('Server Errord')
        }
    });

});



// router.get('/loggout', (req, res, next) => {
    
//     if(req.session.user) {
       
//         req.session.destroy(function() {
//             res.redirect('/');
//         });
//     }
// });

module.exports = router;