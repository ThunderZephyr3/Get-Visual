import React, { Component } from 'react';
import App from './App.js'; 
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

const Cards = (props) => (
  <div id="cardsBackground">
  <Card id="cards">
    <h2>{props.recipeName}</h2>
    <h4>Ingredients:</h4>
    <p>{props.ingredientsName}</p>
    <h4>Instructions:</h4>
    <p>{props.descriptionName}</p>
    <button id="btnRemove" onClick={props.delete}>Delete</button>
    {/* <CardHeader
      title={props.recipeName}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {props.ingredientsName}
      {props.descriptionName}
    </CardText>
    <CardActions>
      <FlatButton label="Delete" onClick={props.delete}/>
    </CardActions> */}
  </Card>
  </div>
);

export default Cards;
