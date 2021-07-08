const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://valml:scully12@cluster0.bplbj.mongodb.net/test' , {useNewUrlParser:true}) //connect takes 2 things ('connectionstring' , 
.then(() => console.log('We are connected to Mongo'))
.catch(err => console.log('We are not connected to Mongo', err))

//run JS file node .