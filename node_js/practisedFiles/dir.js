const filesystem=require('fs')
if(!filesystem.existsSync('./new')){   //it makesure the file already exist or not
    filesystem.mkdir('.new',(error)=>{  //mkdir = make directory
        if(error) throw error
        console.log('Directory created')
    })
}
if(filesystem.existsSync('./new')){   //existsSync = cit makesure the file already exist or not
    filesystem.rmdir('./new',(error)=>{  //rkdir = remove directory
        if(error) throw error
        console.log('Directory created')
    })
}

//exit on uncaught errors
process.on('uncaughtException',error=>{
    console.error(`There was an uncaught error:${error}`)
    process.exit(1)
})