const express = require('express')
const router = express.Router()
const path=require('path')

router.get('^/$|/index(.html)?',(req,res)=>{  //it wil show the index if it is slash at the end or slash dot html 
    res.sendFile(path.join(__dirname,'..','views','subdir','index.html'));
} )
router.get('/test(.html)?',(req,res)=>{  //it wil show the index if it is slash at the end or slash dot html 
    res.sendFile(path.join(__dirname,'..','views','subdir','test.html'));
} )

module.exports = router