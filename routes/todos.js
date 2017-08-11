// You should put your todo schema should go here
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')


var todoSchema = new mongoose.Schema({
    title: {type: String, required: true}
})

var Todo = mongoose.model('Todo', todoSchema)

router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router