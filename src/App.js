import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './index.css';
import Cards from './Cards';

class App extends Component {

  constructor() {
    super();    
    this.state = {
      title: 'GET Visual',
      requests: [],
    }
  }


  componentDidMount() {
    console.log('component has mounted')
    var that = this; 
    fetch('http://localhost:3000/api/receive')
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log(data);
            that.setState({
              requests:data
            })
          })
        })
      }



  addInputFields(event) {
    event.preventDefault(); 
    const that = this;

    let inputData = {
      id: document.getElementById('id').value,
      request: document.getElementById('request').value,
      c_path: document.getElementById('c_path').value,
      c_component: document.getElementById('c_component').value,
      c_purpose: document.getElementById('c_purpose').value,
      c_moreInfo: document.getElementById('c_moreInfo').value,
      s_id: document.getElementById('s_id').value,
      s_request: document.getElementById('s_request').value,
      s_path: document.getElementById('s_path').value,
      s_url: document.getElementById('s_url').value,
      s_purpose: document.getElementById('s_purpose').value,
      s_moreInfo: document.getElementById('s_moreInfo').value
    };


   let requests = that.state.requests;
      requests.push(inputData);
      that.setState({
        requests: requests
    })

  
    fetch('http://localhost:3000/api/submit', {
      headers: new Headers({"Content-Type" : 'application/json'}),
      method: "POST",
      body: JSON.stringify(inputData),
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
    })
  };


  removeData(id) {

    var that = this; 
    let requests = this.state.requests; //[]
    let request = requests.find(function(request) {
      return request.id === id
    });

    var requestFETCH = new Request("http://localhost:3000/api/remove/" + id, {
      method: 'DELETE'
    })

    fetch(requestFETCH)
      .then(function(response) {
        requests.splice(requests.indexOf(request), 1)
        that.setState({
          requests : requests
        })
        // response.json()
      })
  }

  hanndleChange() {
    // document.getElementById('s_id').value = " ";
    document.getElementById('s_id').value = document.getElementById('id').value; 

  }

  render () {
    let title = this.state.title;
    let requests = this.state.requests;
    const results = [];
    requests.forEach((elem,i) => {
      results.push(<Cards key={i} 
                    id={elem.id} 
                    request={elem.request} 
                    clientPath={elem.c_path} 
                    clientComponent={elem.c_component} 
                    clientPurpose={elem.c_purpose} 
                    clientInfo={elem.c_moreInfo} 
                    serverPath={elem.s_path} 
                    serverUrl={elem.s_url} 
                    serverPurpose={elem.s_purpose} 
                    serverInfo={elem.s_moreInfo}
                    remove={this.removeData.bind(this, elem.id)} />);
    });


    return (
        <MuiThemeProvider>
        <div className="App">
          <form ref="apiForm">
            <h1>{title}</h1>
            <div id="formContainer">
              <div id="clientSideInput">
                <h2>Fill Out Client Side Info</h2>
                  <TextField
                    hintText="ID"
                    id="id" //changed it from c_id
                    name="id"
                    onChange={this.hanndleChange.bind(this)}
                  errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Request Type"
                    id="request" //changed it from c_request
                  /><br />
                  <TextField
                    hintText="Path"
                    id="c_path"
                  /><br />
                  <TextField
                    hintText="Component"
                    id="c_component"
                  /><br />
                  <TextField
                    hintText="Purpose"
                    id="c_purpose"
                    multiLine={true}
                    rows={1}
                  /><br />
                  <TextField
                    hintText="Additional Info"
                    id="c_moreInfo"
                    multiLine={true}
                    rows={1}
                  /><br />
              </div>
              <div id="serverSideInput">
                <h2 >Fill Out Server Side Info</h2>
                  <TextField
                    hintText="ID"
                    id="s_id" //changed back to s_id
                    name="s_id"
                    onChange="id.value = s_id.value; return true;"
                    errorText="This field is required"
                  /><br />
                  <TextField
                    hintText="Request Type"
                    id="s_request" //changed back to s_request
                  /><br />
                  <TextField
                    hintText="Path"
                    id="s_path"
                  /><br />
                  <TextField
                    hintText="URL"
                    id="s_url"
                  /><br />
                  <TextField
                    hintText="Purpose"
                    id="s_purpose"
                    multiLine={true}
                    rows={1}
                  /><br />
                  <TextField
                    hintText="Additional Info"
                    id="s_moreInfo"
                    multiLine={true}
                    rows={1}
                  /><br />
                </div>
                <div class="clear"></div>
                <button id="btnPrimary" onClick={this.addInputFields.bind(this)}>Create Data Flow Diagram</button>
            </div>
          </form>
          <hr></hr>
          {results}
          </div>
        </MuiThemeProvider>
    )
  }

}

export default App;