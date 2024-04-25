const { format } = require('date-fns')
const {v4:uuid} =require('uuid')

const fs=require('fs')
const fsPromises=require('fs').promises
const path =require('path')

const logEvents=async(message)=>{      //it is just a text file if there is any events occurs in server side it logs that into the text file
    const dateTime=`${format(new Date(),'dd/MM/yyy\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem) //it will also create the file if it doesnt exists
    }
    catch(err){
        console.error(err)
    }
}

module.exports=logEvents

// console.log(format(new Date(),'dd/MM/yyy\tHH:mm:ss'))
// console.log(uuid())