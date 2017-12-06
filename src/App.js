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
      requests: {client:[], server:[]}
    }
  }

  addInputFields(event) {
    event.preventDefault(); 
    const that = this;
    let client_data = {
      id: document.getElementById('id').value,
      request: document.getElementById('request').value,
      path: document.getElementById('c_path').value,
      component: document.getElementById('c_component').value,
      purpose: document.getElementById('c_purpose').value,
      moreInfo: document.getElementById('c_moreInfo').value
    }

    let server_data = {
      id: document.getElementById('s_id').value,
      request: document.getElementById('s_request').value,
      path: document.getElementById('s_path').value,
      url: document.getElementById('s_url').value,
      purpose: document.getElementById('s_purpose').value,
      moreInfo: document.getElementById('c_moreInfo').value
    }
    // let recipe_data = {
    //   //     recipe_name: document.getElementById('recipe_name').value,
    //   //     ingredients_name: document.getElementById('ingredients_name').value,
    //   //     description_name: document.getElementById('description_name').value,      
    //   //     // continent_name: this.refs.continent_name.value,
    //   //     id: Math.random().toFixed(3)
    //   //   };
  };

  render () {
    let title = this.state.title;
    return (
        <MuiThemeProvider>
          <form ref="apiForm">
            <h1>{title}</h1>
            <div id="formContainer">
              <div id="clientSideInput">
                <h2>Fill Out Client Side Info</h2>
                  <TextField
                    hintText="ID"
                    id="id" //changed it from c_id
                  errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Request Type"
                    id="request" //changed it from c_request
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Path"
                    id="c_path"
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Component"
                    id="c_component"
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Purpose"
                    id="c_purpose"
                    errorText="This field is required"
                    multiLine={true}
                    rows={2}
                  /><br />
                  <TextField
                    hintText="Additional Info"
                    id="c_moreInfo"
                    multiLine={true}
                    rows={2}
                  /><br />
              </div>
              <div id="serverSideInput">
                <h2 >Fill Out Server Side Info</h2>
                  <TextField
                    hintText="ID"
                    id="s_id" //changed back to s_id
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Request Type"
                    id="s_request" //changed back to s_request
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Path"
                    id="s_path"
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="URL"
                    id="s_url"
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Purpose"
                    id="s_purpose"
                    errorText="This field is required"
                    multiLine={true}
                    rows={2}
                  /><br />
                  <TextField
                    hintText="Additional Info"
                    id="s_moreInfo"
                    multiLine={true}
                    rows={2}
                  /><br />
                </div>
                <button id="btnPrimary" onClick={this.addInputFields.bind(this)}>Create Data Flow Diagram</button>
              </div>
          </form>
        </MuiThemeProvider>
    )
  }

//GET REQUEST
  //this will be under componentdidmount;
  //to get the previous cards, we will run a get request to get data of the previous cards and
  //pass them down respectively to the client comp and the server comp.

  //POST REQUEST
  //this will be initiated by an onclick method
  //the post request will take the info of the text field on the form as the REQEST.BODY and 
  //send it to the server
  //the server receivese the REQUEST.body and save it to the database. 
  //expecting the request.body to be something like this? : {}





  // constructor() {
  //   super();    
  //   this.state = {
  //     title: 'API Requests for Dummies',
  //     recipes: []
  //   }
  // }

  // //MAKE AJAX CALLS HERE
  // componentDidMount() {
  //   console.log('COMPONENT HAS MOUNTED');
  //   var that = this;
  //   //changed fetch('http://localhost:3000/api/countries') to 'http://localhost:3000/api/recipes'
  //   fetch('http://localhost:3000/api/recipes')
  //     .then(function(response){
  //       response.json()
  //         .then(function(data) {
  //           that.setState({
  //             recipes: data
  //           })
  //         })
  //     })

  // }

  // removerecipe(id) {
  //   var that = this;
  //   let recipes = this.state.recipes;
  //   let recipe = recipes.find(function(recipe) {
  //     return recipe.id === id
  //   });
    
  //   var request = new Request('http://localhost:3000/api/remove/'+ id, {
  //     method: 'DELETE'
  //   });

  //   fetch(request)
  //     .then(function(response) {
  //       recipes.splice(recipes.indexOf(recipe), 1);
  //       that.setState({
  //         recipes: recipes
  //       });
  //       response.json()
  //         .then(function(data) {

  //         })
  //     })
  // }

  // addRecipe(event) {
  //   event.preventDefault();   
  //   var that = this;
  //   // console.log(document.getElementById('ingredients_name').value)
  //   // let ingredientsString = document.getElementById('ingredients_name').value;
  //   // let ingredientsArr = ingredientsString.split('\n');    
  //   // console.log('ingredientsArr', ingredientsArr);
  //   let recipe_data = {
  //     recipe_name: document.getElementById('recipe_name').value,
  //     ingredients_name: document.getElementById('ingredients_name').value,
  //     description_name: document.getElementById('description_name').value,      
  //     // continent_name: this.refs.continent_name.value,
  //     id: Math.random().toFixed(3)
  //   };

  //   //browser API with xml http request
  //   //changed  var request = new Request('http://localhost:3000/api/new-recipe' to new-recipe;
  //   var request = new Request('http://localhost:3000/api/new-recipe', {
  //     method: 'POST',
  //     headers: new Headers({'Content-Type': 'application/json'}),
  //     body: JSON.stringify(recipe_data)
  //   });

  //   let recipes = that.state.recipes;
  //     recipes.push(recipe_data);
  //     console.log(recipes);
  //     that.setState({
  //       recipes: recipes
  //   })

  //   //xmlhttprequest()
  //   fetch(request)
  //     .then(function(response) {
  //       response.json()
  //         .then(function(data) {
  //           console.log('data', data);
  //         })
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //     })

  //     document.getElementById('recipe_name').value = '';
  //     document.getElementById('ingredients_name').value = '';
  //     document.getElementById('description_name').value = '';
  // }
  // render() {
  //   let title = this.state.title;
  //   let recipes = this.state.recipes;
  //   const results = [];
  //   console.log('recipes', this.state.recipes)
  //   this.state.recipes.forEach((elem, i) => {
  //       results.push(<Cards id={elem.id} key={i} recipeName={elem.recipe_name} ingredientsName={elem.ingredients_name} descriptionName={elem.description_name} delete={this.removerecipe.bind(this, elem.id)}/>);
  //   })
  //   return (
  //     <MuiThemeProvider>
  //     <div className="App">
  //       <h1>{title}</h1>
  //       {/* <img src={cherries} alt="hero" id="heroImg"/> */}
  //       <form ref="recipeForm">
  //         <br />
  //         <h2>Recipe Name</h2>
  //         <TextField
  //           hintText="Add your recipe name"
  //           id="recipe_name" 
  //         /><br />
  //         {/* <input type="text" className="recipe-name-input" ref="recipe_name" placeholder="recipe name"/> */}
  //         <br />
  //         <h2>Ingredients</h2>
  //         <TextField
  //           hintText="Add ingredients here"
  //           id="ingredients_name"
  //           multiLine={true}
  //           rows={2}
  //         /><br />
  //         {/* <input type="text" className="ingredients-input" ref="continent_name" placeholder="ingredients"/> */}
  //         <h2>Instructions</h2>
  //         <TextField
  //           hintText="Add instructions here"
  //           id="description_name"
  //           multiLine={true}
  //           rows={2}
  //         /><br />
  //         {/* <input type="text" className="instructions-input" ref="continent_name" placeholder="instructions"/> */}
  //         <button id="btnPrimary" onClick={this.addRecipe.bind(this)}>Create Recipe</button>
  //       </form>
  //       <hr></hr>
  //       {results}
  //     </div>
  //     </MuiThemeProvider>
  //   );
  // }
}

export default App;
