//Your MLAB database should be here 
var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://trever:trever@ds129183.mlab.com:29183/inspire', {
  server:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
  replset:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
})

connection.on('error', (err) =>{
  console.log('Mlab Error you fool ', err)
})

connection.once('open', ()=>{
  console.log('connected to mlab or whatever')
})