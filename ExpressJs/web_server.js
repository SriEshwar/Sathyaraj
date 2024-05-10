const express=require('express')
const app=express()
const path=require('path');
const {logger}=require('./middleware/logEvents')
const cors=require('cors')
const corsOptions=require('./configuration/corsOption')
const errorHandler=require('./middleware/errorHandler')

const PORT = process.env.PORT || 3500;

//custom middleware
app.use(logger)

//built in middleware
app.use(express.urlencoded({extended:false}))//for form validation url = middlewares
app.use(express.json())//it takes the object that given into the customer data = middlewares 



app.use(cors(corsOptions))
app.use('/public',express.static(path.join(__dirname,'public'))); // it will allow all the files to be displayed which are given in public

app.use('/',require('./routes/root'))
app.use('/employees',require('./routes/api/employees'))

app.get('^/$|/test(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'views','subDirectory','testPage.html'));
} )

// app.get('/hello(.html)?',(request,response,next)=>{ //handle the route in different ways
//     console.log('hello.html page load')
//     next()},
//     (request,response)=>{
//         res.send('Hi everyone')
// })
// const one=(request,response,next)=>{
//     console.log('One')
//     next()
// }
// const two=(request,response,next)=>{
//     console.log('Two')
//     next()
// }
// const three=(request,response)=>{
//     console.log('Three')
//     response.send('Finihed!')
// }
// app.get('/chain(.html)?',[one,two,three])//multiple ways to handle the route

// app.get('/*',(request,response)=>{  //it will show 404 status code if the file not found and update in the console as 404 status code
//     response.status(404).sendFile(path.join(__dirname,'views','404.html'));
// } )

//if any url wrong url is given which is not present in it
app.all('*',(request,response)=>{
    response.status(404);
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

