exports.loginForm = (req,res) =>{
    res.render('auth/login')
}

exports.registerForm = (req,res) =>{
    res.send('Register Form Works!')
}

exports.login = (req,res)=>{
    res.send('Login Works!')
}

exports.register = (req,res) =>{
    res.send('Register woks!')
}

exports.logout = (req,res) =>{
    res.send('Logout works!')
}