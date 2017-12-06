import React, { Component } from 'react';
import App from './App.js'; 
import ReactHover from 'react-hover'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

// <Cards key={i} 
//                     id={elem.id} 
//                     request={elem.request} 
//                     clientPath={elem.c_path} 
//                     clientComponent={elem.c_component} 
//                     clientPurpose={elem.c_purpose} 
//                     clientInfo={elem.c_moreInfo} 
//                     serverPath={elem.s_path} 
//                     serverUrl={elem.s_url} 
//                     serverPurpose={elem.s_purpose} 
//                     serverInfo={elem.s_moreInfo}
//                     remove={this.removeData.bind(this, elem.id)} />);

// <ReactHover
//   options={optionsCursorTrueWithMargin}>
//   <ReactHover.Trigger type='trigger'>
//     <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
//   </ReactHover.Trigger>
//   <ReactHover.Hover type='hover'>
//     <h1> I am hover HTML </h1>
//   </ReactHover.Hover>
// </ReactHover>

const Cards = (props) => (
  <div id="cardsField">
    <Card id="clientCard">
      <h3>Client</h3>
      <input id="checkBox" type="checkbox"></input>
      <p><b>ID: </b>{props.id}</p>
      <p><b>Request: </b>{props.request}</p>
      <p><b>Path: </b>{props.clientPath}</p>
      <p><b>Component: </b>{props.clientComponent}</p>
      <p><b>Purpose: </b>{props.clientPurpose}</p>
    </Card>
    <div id="arrows">
      <ReactHover>
      <ReactHover.Trigger type='trigger'>
      <p>-------------------------------&gt;</p>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <p id="upperArrowHoverText"> {props.clientInfo} </p>
      </ReactHover.Hover>
      </ReactHover>
      <br></br>
      <br></br>
      <ReactHover>
      <ReactHover.Trigger type='trigger'>
      <p>&lt;------------------------------</p>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <p id="lowerArrowHoverText"> {props.serverInfo} </p>
      </ReactHover.Hover>
      </ReactHover>
    </div>
    <Card id="serverCard">
      <h3>Server</h3>
      <input id="checkBox" type="checkbox"></input>
      <p><b>ID: </b>{props.id}</p>
      <p><b>Request: </b>{props.request}</p>
      <p><b>Path: </b>{props.serverPath}</p>
      <p><b>URL: </b>{props.serverUrl}</p>
      <p><b>Purpose: </b>{props.serverPurpose}</p>
    </Card>
      <div class="clear"></div>
         <button id="btnRemove" onClick={props.remove}>Delete Diagram</button>
  </div>

)

// const Cards = (props) => (
//   <div id="cardsBackground">
//   <Card id="cards"> //styling id
//     <h2>{props.recipeName}</h2>
//     <h4>Ingredients:</h4>
//     <p>{props.ingredientsName}</p>
//     <h4>Instructions:</h4>
//     <p>{props.descriptionName}</p>
//     <button id="btnRemove" onClick={props.delete}>Delete</button>
//     { <CardHeader
//       title={props.recipeName}
//       actAsExpander={true}
//       showExpandableButton={true}
//     />
//     <CardText expandable={true}>
//       {props.ingredientsName}
//       {props.descriptionName}
//     </CardText>
//     <CardActions>
//       <FlatButton label="Delete" onClick={props.delete}/>
//     </CardActions> }
//   </Card>
//   </div>
// );

export default Cards;
