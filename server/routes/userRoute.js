const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();


const User = require("../modals/user");

const maxAge = 3*24*60*60;
const SECRET_KEY= process.env.SECRET_KEY;

const createToken = (id)=>{
  jwt.sign({id} , `${SECRET_KEY}`, {
    expiresIn:maxAge
  });
}

router.post("/signup", async (req, resp) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender : "",
    state :"",
    pincode : "",
    address :"",
    martialstatus : "",
    dob :"",
    
  });

  try {
    const user = await User.create(newUser);
    const token = createToken(newUser._id);
    resp.cookie('jwt' , token , {httpOnly:true , maxAge:maxAge*1000});
    resp.status(201).json({userid : user._id});
  } catch (error) {
    return resp.status(400).json({ message: "something went wrong" });
  }
});

router.post("/login", async (req, resp) => {
  const { email, password } = req.body; // array destructuring
  try {
    const user = await User.login(email , password);
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        dob : user.dob,
        martial : user.martialstatus,
        gender : user.gender,
        address : user.address,
        state : user.state,
        pincode : user.pincode,
        _id: user._id,
      };

      resp.send(temp);
    } else {
      resp.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    resp.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/updateuser", async (req, resp) => {
  const {
    userid,
    username,
    usergender,
    usermartial,
    useraddress,
    userdob,
    userstate,
    userpincode,
  } = req.body;

  try {
    const user = await User.findOne({ _id: userid }); 
    if (!user) {
      return resp.status(404).json({ message: "User not found" });
    }

    console.log(user);
    
    user.name = username;
    user.gender = usergender;
    user.martialstatus = usermartial;
    user.address = useraddress;
    user.dob = userdob;
    user.state = userstate;
    user.pincode = userpincode;

    await user.save(); 

    // console.log("Updated user:", user);
    return resp.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return resp.status(500).json({ message: "Internal server error" });
  }
});




module.exports = router;
