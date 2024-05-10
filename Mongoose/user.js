const mongoose=require('mongoose')

const addressSchema=new mongoose.Schema({
        street:String,
        city:String
})

const userSchema=new mongoose.Schema({ //we define the structure of collection the data
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        validate:{ //this data store in props
            validator:v=>v%2===0,
            message:props=>`${props.value} is not an even number`
        }
    },
    email:{
        type: String,
        minLength:10,
        required:true,   // email feild is required
        lowercase:true
    }, 
    createdAt:{
        type:Date,
        immutable:true, //we cant change the date
        default:() => Date.now()
    },
    UpdatedAt:{
        type:Date,
        default:() => Date.now()
    },
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    hobbies:[String],
    address:addressSchema  //It has another objectId because it is a another schema
})

userSchema.methods.sayHi=function(){
    console.log(`Hi! My name is ${this.name}`)
}
// userSchema.statics.findByName=function(name){          //direct;y we can use this in the collection
//     return this.find({name:new RegExp(name,"i")})
// }
userSchema.query.byName=function(name){                   //its a query we can use after a method
    return this.find({name:new RegExp(name,"i")})
}

userSchema.virtual("namedEmail").get(function(){          //It is not in the actual database but it ac as a virtual property
    return `${this.name} <${this.email}>`
})
userSchema.pre("save",function(next){             //middleware
    this.updatedAt=Date.now()
    next()
})
userSchema.post("save",function(doc,next){        //middleware
    doc.sayHi()             
    next()
})

module.exports = mongoose.model("User",userSchema)  //user is the name of the model
