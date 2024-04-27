const express = require('express')
const router = express.Router()
const path=require('path')

router.get('^/$|/index(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'..','views','subDirectory','indexPage.html'));
} )
router.get('/test(.html)?',(request,response)=>{  //it wil show the index if it is slash at the end or slash dot html 
    response.sendFile(path.join(__dirname,'..','views','subDirectory','testPage.html'));
} )

module.exports = router