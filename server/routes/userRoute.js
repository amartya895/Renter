const express = require('express');
const router = express.Router();

const User = require('../modals/user');

router.post('/signup', async(req ,resp)=>{

    const newUser = new User({name:req.body.name , email:req.body.email , password:req.body.password});

    try {
        const user = await newUser.save();
        resp.send('User Registerd Successfully');
    } catch (error) {
        return resp.status(400).json({message : 'something went wrong'});
    }

});

router.post('/login', async(req , resp)=>{
    const { email, password } = req.body; // array destructuring 
    try {
        const user = await User.findOne({email , password});
        if(user)
        {
            const temp  = {
                name: user.name,
                email : user.email,
                _id : user._id
            }

            resp.send(temp);
        }
        else {
            resp.status(400).json({ message: 'Login failed' });
          }
    } catch (error) {
        resp.status(500).json({ error: 'Internal Server Error' });
    }
})

  
module.exports = router