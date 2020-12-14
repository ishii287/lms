const Course = require('../models/Course')
const Test =require('../models/Test')

exports.addCourseForm = (req,res)=>{
    res.render('course/add')
}

exports.addCourse = (req,res) =>{
   var course = new Course(req.body)

   course.save()
   .then(()=>{
       res.redirect('/courses')
   })
}

exports.listCourses =(req,res)=>{
    Course.find().then((courses)=>{
        res.render('course', {courses})
    })
}

exports.addTestForm = (req,res)=>{
    const courseId = req.params.courseId
    res.render('test/add', {courseId})
}

exports.addTest = (req,res)=>{
    const courseId = req.params.courseId
    req.body.courseId=courseId
    const test = new Test(req.body)

    test.save()
    .then(()=>{
        res.redirect('/tests/' + courseId)
    })
}

exports.listTests = (req,res)=>{
    const courseId = req.params.courseId
    Test.find({courseId})
    .then((tests)=>{
    res.render('test', {courseId, tests})
    })
}
