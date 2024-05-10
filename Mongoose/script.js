// getting-started.js
const mongoose = require('mongoose');
const User=require('./user')

main().catch(err => console.log(err.message));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
  
  // const user=await User.create({name:"sathyaraj",
  // age:22,
  // email:"Sathyaraj2508@gmail.com",
  // hobbies:["Gaming","Swimming"],
  // address:{
  //     street:"Ramuevenue",
  //     city:"Pollachi"
  // }})

  //const find=await User.where("name").equals("sathyaraj")
  //.where("age").lt(55).limit(2).populate("bestFriend")  //.select("age")

  // find[0].bestFriend = "663cfd5fd00b42f1e5e4bf01"
  // await find[0].save()
  
 // console.log(find)

 const user=await User.findOne({name:"sathyaraj"})

//  const virtualMethod =await User.findOne({name:"sathyaraj"})
//  console.log(virtualMethod.namedEmail)

 console.log(user)
 user.save()
 console.log(user)

}

