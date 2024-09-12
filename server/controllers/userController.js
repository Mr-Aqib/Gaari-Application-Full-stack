const Registeruser = (req,res) =>
{
    const { name, phoneno, email, password,gender  } = req.body
    if (!name || !phoneno || !email || !password || !gender)
    {
        throw new Error("Please enter the all fields")
    }
    else
    {
         res.send({
             name,
             phoneno,
        email,
             password,
        gender
    })
        
        }
}
module.exports = {
    Registeruser
}