const expressErrorHander = require('express-async-handler')
const userModel = require('../models/userModel')
const Registeruser =expressErrorHander(async (req, res) =>
{
    const { myName, myPhoneno, myEmail, myPassword,myGender,myImage  } = req.body
    if (!myName || !myPhoneno || !myEmail || !myPassword || !myGender)
    {
        throw new Error("Please enter the all fields")
    }
    //creating table 
    try {
         const createTable = await userModel.create({
        name: myName,
        phoneno: myPhoneno,
        email: myEmail,
        password: myPassword,
        gender: myGender,
        image: myImage
       
         })
         res.send (createTable)
    } catch (error) {
        throw new Error(error)
    }
   
})
module.exports = {
    Registeruser
}