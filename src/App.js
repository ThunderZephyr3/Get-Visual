import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import './index.css';
import cherries from './cherries.jpg';
import Cards from './Cards';

class App extends Component {

  constructor() {
    super();    
    this.state = {
      title: 'API Requests for Dummies',
      recipes: []
    }
  }

  //MAKE AJAX CALLS HERE
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
    var that = this;
    //changed fetch('http://localhost:3000/api/countries') to 'http://localhost:3000/api/recipes'
    fetch('http://localhost:3000/api/recipes')
      .then(function(response){
        response.json()
          .then(function(data) {
            that.setState({
              recipes: data
            })
          })
      })

  }

  removerecipe(id) {
    var that = this;
    let recipes = this.state.recipes;
    let recipe = recipes.find(function(recipe) {
      return recipe.id === id
    });
    
    var request = new Request('http://localhost:3000/api/remove/'+ id, {
      method: 'DELETE'
    });

    fetch(request)
      .then(function(response) {
        recipes.splice(recipes.indexOf(recipe), 1);
        that.setState({
          recipes: recipes
        });
        response.json()
          .then(function(data) {

          })
      })
  }

  addRecipe(event) {
    event.preventDefault();
    // let recipeNameDel = document.getElementById('recipe_name');
    // recipeNameDel = '';    
    var that = this;
    // console.log(document.getElementById('ingredients_name').value)
    // let ingredientsString = document.getElementById('ingredients_name').value;
    // let ingredientsArr = ingredientsString.split('\n');    
    // console.log('ingredientsArr', ingredientsArr);
    let recipe_data = {
      recipe_name: document.getElementById('recipe_name').value,
      ingredients_name: document.getElementById('ingredients_name').value,
      description_name: document.getElementById('description_name').value,      
      // continent_name: this.refs.continent_name.value,
      id: Math.random().toFixed(3)
    };

    //browser API with xml http request
    //changed  var request = new Request('http://localhost:3000/api/new-recipe' to new-recipe;
    var request = new Request('http://localhost:3000/api/new-recipe', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(recipe_data)
    });

    let recipes = that.state.recipes;
      recipes.push(recipe_data);
      console.log(recipes);
      that.setState({
        recipes: recipes
    })

    //xmlhttprequest()
    fetch(request)
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log('data', data);
          })
      })
      .catch(function(err) {
        console.log(err);
      })

      document.getElementById('recipe_name').value = '';
      document.getElementById('ingredients_name').value = '';
      document.getElementById('description_name').value = '';
  }
  render() {
    let title = this.state.title;
    let recipes = this.state.recipes;
    const results = [];
    console.log('recipes', this.state.recipes)
    this.state.recipes.forEach((elem, i) => {
        results.push(<Cards id={elem.id} key={i} recipeName={elem.recipe_name} ingredientsName={elem.ingredients_name} descriptionName={elem.description_name} delete={this.removerecipe.bind(this, elem.id)}/>);
    })
    return (
      <MuiThemeProvider>
      <div className="App">
        <h1>{title}</h1>
        {/* <img src={cherries} alt="hero" id="heroImg"/> */}
        <form ref="recipeForm">
          <br />
          <h2>Recipe Name</h2>
          <TextField
            hintText="Add your recipe name"
            id="recipe_name" 
          /><br />
          {/* <input type="text" className="recipe-name-input" ref="recipe_name" placeholder="recipe name"/> */}
          <br />
          <h2>Ingredients</h2>
          <TextField
            hintText="Add ingredients here"
            id="ingredients_name"
            multiLine={true}
            rows={2}
          /><br />
          {/* <input type="text" className="ingredients-input" ref="continent_name" placeholder="ingredients"/> */}
          <h2>Instructions</h2>
          <TextField
            hintText="Add instructions here"
            id="description_name"
            multiLine={true}
            rows={2}
          /><br />
          {/* <input type="text" className="instructions-input" ref="continent_name" placeholder="instructions"/> */}
          <button id="btnPrimary" onClick={this.addRecipe.bind(this)}>Create Recipe</button>
        </form>
        <hr></hr>
        {results}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
