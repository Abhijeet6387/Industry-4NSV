const express = require("express");
const router= express.Router(); 

router.get('/',(req,res)=>{
    res.render('introduction')
})
router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/implementation/layouts',(req,res)=>{
    res.render('layouts')
})
router.get('/implementation/LHBCoachShellManufacture',(req,res)=>{
    res.render('LHBCoachShellManufacture')
})
router.get('/implementation/tables',(req,res)=>{
    res.render('tables')
})

router.get('/implementation/architecture',(req,res)=>{
    res.render('Implementation and architecture')
})
router.get('/moredetails',(req,res)=>{
    res.render('more details')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})

module.exports=router;