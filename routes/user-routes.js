const { hash } = require('bcrypt')
const express=require('express')
const { model } = require('mongoose')
const User = require('../models/User')
const { use } = require('./books-router')

const bcrypt=express.Router('bcryptjs')

const router =express.Router()

router.post('/register',(req,res,next)=>{
    User.findOne({username:req.body.username}
        .then(user =>{
            if(user!=bull){
                let err =new Error(`User${req.body.username}already exists.`)
                return next(new(err))
            }
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err) return next(err)
                let user=new User()
                user.username=req.body.username
                user.password=hash
                user.save()
                .then(user=>{
                    res.status(201).json({
                        'status':'User registered sucessfully',
                        userId:user_id,
                        username:user.username
                    })
                }).catch(next)
            })
        })).catch(next)



})
router.post('/login',(req,res,next)=>{
    res.send("Login request")

})
module.exports=router
