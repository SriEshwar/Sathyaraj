//3rd party middleware
//it is used to give access to the server
const whiteList=['https://www.youtube.com','https://www.google.com','http://localhost:3500/']
const corsOptions={
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1 || !origin){ //if we dont have any orgin you need allow
            callback(null,true)
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },optionsSuccessStatus:200
}

module.exports=corsOptions