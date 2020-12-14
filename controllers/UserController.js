const bcrypt = require('bcryptjs')
const User = require('../models/User')

exports.loginForm = (req,res) =>{
    res.render('auth/login')
}

exports.registerForm = (req,res) =>{
    res.render('auth/register')
}

exports.login = (req,res)=>{
    const {username, password}=req.body

  //  User.findOne({ username: username}) or
    User.findOne({ username})
    .then((user) =>{
        if(user && bcrypt.compareSync(password, user.passwordHash)){
            req.session.user={
                username: user.username,
                role: user.role
            }
            res.redirect('/dashboard')
        }else{
            res.redirect('/login')
        }
    })
}

exports.register = (req,res) =>{
 const name = req.body.name
 const username = req.body.username
 const password = req.body.password

    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt) 

    let user= new User()
    user.name = name
    user.username=username
    user.passwordHash= passwordHash

    user.save()
    .then(()=>{
        res.redirect('/login')
    })
    .catch(()=>{
        res.redirect('/register')
    })
}

exports.logout = (req,res) =>{
   delete req.session.user
   res.redirect('/login')
}