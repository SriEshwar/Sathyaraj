const express=require('express')
const app=express()
const path=require('path');
const {logger}=require('./middleware/logEvents')
const cors=require('cors')
const errorHandler=require('./middleware/errorHandler')

const PORT = process.env.PORT || 3500;

//custom middleware
app.use(logger)

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
app.use(cors(corsOptions))
app.use('/subDirectory',require('./routes/subDirectory'))

//built in middleware
app.use(express.urlencoded({extended:false}))//for form validation url = middlewares
app.use(express.json())//it takes the object that given into the customer data = middlewares 

app.use('/public',express.static(path.join(__dirname,'public'))); // it will allow all the files to be displayed which are given in public

app.get('/index(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'views','indexPage.html'));
} )
app.get('^/$|/test(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'views','subDirectory','testPage.html'));
} )
app.get('/new-page(.html)?',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','newPage.html'));
} )
app.get('/old-page(.html)?',(request,response)=>{ //it will redirect to that which was given wrong
    response.redirect(301,'newPage.html');
} )
app.get('/hello(.html)?',(request,response,next)=>{ //handle the route in different ways
    console.log('hello.html page load')
    next()},
    (request,response)=>{
        res.send('Hi everyone')
})
const one=(request,response,next)=>{
    console.log('One')
    next()
}
const two=(request,response,next)=>{
    console.log('Two')
    next()
}
const three=(request,response)=>{
    console.log('Three')
    response.send('Finihed!')
}
app.get('/chain(.html)?',[one,two,three])//multiple ways to handle the route

// app.get('/*',(request,response)=>{  //it will show 404 status code if the file not found and update in the console as 404 status code
//     response.status(404).sendFile(path.join(__dirname,'views','404.html'));
// } )

//if any url wrong url is given which is not present in it
app.all('*',(request,response)=>{
    res.status(404);
    if(request.accepts('html')){
        response.sendFile(path.join(__dirname,'views','404.html'))
    }else if(request.accepts('json')){
        response.json({"error":"404 Not Found"})
    }else{
        response.type('txt').send("404 Not Foud")
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

