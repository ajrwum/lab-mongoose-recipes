const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made

    // === iteration 2
    // - creating my recipe
    const myRecipe = {
      title: "Aperitive Biscuit",
      level: "Easy Peasy",
      ingredients: ["1 puffpastry dough", "Emmental cheese", "Cumin", "Salt", "1 egg yolk"],
      cuisine: "French cuisine",
      dishType: "other",
      image: "https://www.cestmeilleurfaitmaison.fr/wp-content/uploads/2014/07/DSC_0111.jpg",
      duration: 30,
      creator: "AJ",
    };
    // - inserting this recipe into the db
    Recipe.create(myRecipe)
    .then((recipe) => {
      console.log(recipe.title);
    })
    .catch((err) => {
      console.error(err);
    })
    
    
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
