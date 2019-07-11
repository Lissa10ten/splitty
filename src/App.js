import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

let User =()=>
<div className="card m-auto" style={{width: 180 }}>
  <img src="https://picsum.photos/200" className="card-img-top"></img>
  <div className="card-body">
  <h5 className="card-text">Lissa</h5>
  </div>
</div>

let OwesMe =()=>
<div className="badge badge-pill badge-success m-2 p-2">Summ</div>

let OweTo =()=>
<div className="badge badge-pill badge-danger m-2 p-2">-Summ</div>

let Money =()=>
<div>
    <OwesMe />
    <OweTo />
</div>

let Me =()=>
<div>
    <div className="d-flex flex-row-reverse">
        <AddEvent />
        <TotalMoney />
    </div>
    <User  />
    <Money />
</div> 

let TotalMoney =()=>
<button type="button" className="btn btn-outline-primary m-2">Total: Summ</button>

let AddEvent =()=>
<button type="button" className="btn btn-outline-warning m-2">Add event</button>



let NewEv =()=>
<div>
    
    <Inputs>Event name</Inputs>
    <ChooseUser />
</div> 


let ChooseUser =()=>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button" />
</div>

let Inputs =()=>
<div class="input-group mb-3" style={{width: 400}} >
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Event name</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>

class App extends Component {
    state = {  }
    render() { 
        return (  
            <Router history = {createHistory()}>
    <div>
        {/* <Switch> */}
            <Route path="/me" component = {Me} />
            <Route path="/event/new" component = {NewEv} exact />
            {/* <Route component = {NotFound} /> */}
        {/* </Switch> */}
    </div>
</Router>
        );
    }
}
 
export default App;
