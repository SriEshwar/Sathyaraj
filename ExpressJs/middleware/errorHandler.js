const {logEvents} = require('./logEvents')

const errorHandler=(error,request,response,next)=>{
    logEvents(`${error.name}:${error.message}`,'errorLog.txt')
    console.log(error.stack)
    response.status(500).send(error.message); // the server encountered an unexpected condition that prevented it from fulfilling the request
    next()
}

module.exports=errorHandler