const mongoose = require('mongoose')
require('dotenv/config')
mongoose
.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}) //connect takes 2 things ('connectionstring' , 
.then(() => console.log('We are connected to Mongo'))
.catch(err => console.log('We are not connected to Mongo', err))

//run JS file node .

//schema is a function that takes in an object

const movieSchema = mongoose.Schema({
    title: String,
    genre: [String],
    date: {
      type:Date,
      default: Date.now()
}
})

const Movie = mongoose.model('Movie' , movieSchema) 
function getAllMovies(){
    Movie.find()
    .then(allMovies => console.log('All of the movies!', allMovies))
    .catch(err => console.log('Where are all of the movies', err))
}

getAllMovies()