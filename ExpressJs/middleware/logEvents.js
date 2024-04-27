const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fileSystem = require('fs');
const fileSystemPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!fileSystem.existsSync(path.join(__dirname, '..','logs'))) {
            await fileSystemPromises.mkdir(path.join(__dirname,'..','logs'));
        }

        await fileSystemPromises.appendFile(path.join(__dirname,'..','logs', logName), logItem);
    } catch (error) {
        console.log(error);
    }
}

const logger=(request,response,next)=>{
    logEvents(`${request.method}\t ${request.origin} ${request.url}`,'requestLog.txt')
    console.log(`${request.method} ${request.path}`)
    next()
}

module.exports = {logger,logEvents};
