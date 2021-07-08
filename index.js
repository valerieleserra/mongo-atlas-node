const mongoose = require('mongoose')
require('dotenv/config')
mongoose
.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}) //connect takes 2 things ('connectionstring' , 
.then(() => console.log('We are connected to Mongo'))
.catch(err => console.log('We are not connected to Mongo', err))

//run JS file node .

//schema is a function that takes in an object

const movieSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    genre: [String],
    year: Number,
    rating: Number,
    date: {
      type: Date,
      default: Date.now(),
},
})

const Movie = mongoose.model('Movie' , movieSchema)  //movie model

function getAllMovies(){
    Movie.find()
    .then(allMovies => console.log('All of the movies!', allMovies))
    .catch(err => console.log('Where are all of the movies', err))
}

//getAllMovies()

function createMovie(){
const newMovie = new Movie({
    title: 'Lion King',
    genre: ['Family'],
    year: 1994,
    rating: 5
})
newMovie
.save()
.then (() => console.log ('movie was saved'))
.catch (err => console.log ('movie was not added', err))
}

//createMovie()

function getAllMoviesCount() {
    Movie.find()
  .countDocuments()
  .then(count => console.log('here is the count' , count))
  .catch(err => console.log(err))
  
}

//getAllMoviesCount()

function getMoviesFiltered(){
    Movie.find()
    .limit(10)
    .sort({year:-1})
    .then(movies=>console.log('filtered movie', movies))
    .catch (err=>console.log(err))
}

getMoviesFiltered()