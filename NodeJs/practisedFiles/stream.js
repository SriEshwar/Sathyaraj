const fs=require('fs')
const path=require('path')
const readStream=fs.createReadStream(path.join(__dirname,'files','bigFile.txt'),{encoding:'utf8'})
const writeStream=fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'))

readStream.on('data',(dataChunk)=>{
    writeStream.write(dataChunk) 
})
readStream.pipe(ws)  //it is same as above code
