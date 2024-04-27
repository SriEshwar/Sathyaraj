//It is asynchronous functions

const path=require('path')
const fileSystemPromises=require('fs').promises

const fileOps=async()=>{
  try{
    const data=await fileSystemPromises.readFile(path.join(__dirname,'files','start.txt'), 'utf8')
    console.log(data)
    await fileSystemPromises.writeFile(path.join(__dirname,'files','subscribe.txt'), 'hi everyone subscribe please')
    console.log('write completed');
    await fileSystemPromises.appendFile(path.join(__dirname,'files','subscribe.txt'), '\n\n thanks fro subscribing')
    console.log('append completed');
    await fileSystemPromises.rename(path.join(__dirname,'files','subscribe.txt'), path.join(__dirname,'files','thanks.txt'))
    console.log('rename completed');
    await fileSystemPromises.unlink(path.join(__dirname,'files','start.txt'), 'utf8')
    console.log('Start file deletd')
  }catch(error){
    console.error(error)
  }
}
fileOps()
fileSystemPromises.readFile(path.join(__dirname,'files','start.txt'), 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data); //.toString() to convert the data to string
}); 

fileSystemPromises.writeFile(path.join(__dirname,'files','subscribe.txt'), 'hi everyone subscribe please', (error) => {  //to write a file we need to gve the text in the reading format 
  if (error) throw error;
  console.log('write complete'); //.toString() to convert the data to string
  fileSystemPromises.appendFile(path.join(__dirname,'files','subscribe.txt'), '\n\n thanks fro subscribing', (error) => {  //to write a file we need to gve the text in the reading format 
    if (error) throw error;
    console.log('append complete'); //.toString() to convert the data to string
    fileSystemPromises.rename(path.join(__dirname,'files','subscribe.txt'), path.join(__dirname,'files','thanks.txt'), (error) => {  //to write a file we need to gve the text in the reading format 
      if (error) throw error;
      console.log('rename complete'); //rename the same file
    })
  })
});

console.log('hii')  

//exit on uncaught errors
process.on('uncaughtExceptions',error=>{
    console.error(`There was an uncaught error:${error}`)
    process.exit(1)
})