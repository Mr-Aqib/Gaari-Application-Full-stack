const expressErrorHander = require('express-async-handler')
const userModel = require('../models/userModel')
const encrypt = require('bcrypt')
// ----------------------------------------------------------------Resgister User function---------------------------------------
const Registeruser =expressErrorHander(async (req, res) =>
{
    const { myName, myPhoneno, myEmail, myPassword,myGender,myImage  } = req.body
    if (!myName || !myPhoneno || !myEmail || !myPassword || !myGender)
    {
        throw new Error("Please enter the all fields")
    }
    // checking if email or user already exsist
    const userExsist =await userModel.findOne({ email: myEmail })
    if (userExsist)
    {
        throw new Error("Email already exists")
    }
    // Hash the password
    const hashedPassword=await encrypt.hash(myPassword,10)
    //creating table 
    try {
         const createTable = await userModel.create({
        name: myName,
        phoneno: myPhoneno,
        email: myEmail,
        password: hashedPassword,
        gender: myGender,
        image: myImage
       
         })
         res.send (createTable)
    } catch (error) {
        throw new Error(error)
    }
   
})

// -------------------------------------------Login User Function----------------------------------------
const loginUser = expressErrorHander(async (req, res) =>
{
    // Name and Email from user frontend
    const { myEmail, myPassword } = req.body
    if (!myEmail || !myPassword) 
    {
        throw new Error("Please enter the email and password")
    }
    const finduser = await userModel.findOne({ email: myEmail})
    if (!finduser)
    {
        throw new Error("Invalid Email")
    }
    if (finduser && await encrypt.compare(myPassword, finduser.password))
    {
        res.send(finduser)
    }
    else
    {
         throw new Error("Invalid password")
        }
})
module.exports = {
    Registeruser,
    loginUser
}