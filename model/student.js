const mongoose = require('mongoose');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstname: String,
    lastname:String,
    field:String,
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    email:{
        type:String,
        unique:true
    },
    maths:{
        type:Number,
        min:0,
        max:100
    },
    science:{
        type:Number,
        min:0,
        max:100
    },
    english:{
        type:Number,
        min:0,
        max:100
    },
    gujrati:{
        type:Number,
        min:0,
        max:100
    },
    hindi:{
        type:Number,
        min:0,
        max:100
    },
})
const STUDENT =mongoose.model("student",studentSchema)

module.exports = STUDENT;