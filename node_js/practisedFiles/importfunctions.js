console.log('hello')

const operatingsystem=require('os') //instead of import funtion we use this
const path=require('path') 
const math=require('./math')
//import {add,sub,mul,div} from './math'; //we need to user mjs extension

console.log(math.add(1,2))

console.log(operatingsystem.type())
console.log(operatingsystem.version())
console.log(operatingsystem.homedir())

console.log(__dirname)
console.log(__filename)
/*----------*/
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename)) //it will give the details of the path in an  object

