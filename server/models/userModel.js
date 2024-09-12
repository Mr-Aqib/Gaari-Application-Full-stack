const mongoose = require('mongoose')
// Creating user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneno:
    {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: false,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fuser-profile&psig=AOvVaw0TRqkySAjT2OwVXR4m6Sm-&ust=1726255880254000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDXrcCSvogDFQAAAAAdAAAAABAE'
    }
   
},
    {
    timestamps: true
    })
module.exports=mongoose.model('userTable',userSchema)