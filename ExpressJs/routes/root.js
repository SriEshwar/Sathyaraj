const express = require('express')
const router = express.Router()
const path=require('path')

router.get('/index(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'..','views','indexPage.html'));
} )
router.get('/new-page(.html)?',(request,response)=>{
    response.sendFile(path.join(__dirname,'..','views','newPage.html'));
} )
router.get('/old-page(.html)?',(request,response)=>{ //it will redirect to that which was given wrong
    response.redirect(301,'newPage.html')});

module.exports = router