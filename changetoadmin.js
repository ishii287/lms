require('./helpers/database').connection()
const User= require('./models/User')

User.findOne({username: 'head'})
.then((user=>{
    console.log(user) // nd run code changetoadmin.js on cmd
    // user.role = 'admin'
    // user.save().then(()=> console.log('user saved'))
}))