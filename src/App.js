import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import {User} from './Components/User';
import {BlueButton, AddEvent} from './Components/Btns';
import {Inputs, InputWrapper} from './Components/Inputs';
import {MyEv, NewEv, EventList, EventListener} from './Components/Ev'

let Me =()=>
<>
    <header class='m-2'>
      <div class="d-flex justify-content-end">
      <Link to='/event/new'><AddEvent/></Link>
      <Link to='/total'><BlueButton>Total: Summ</BlueButton></Link>
      </div>
    </header>
    <div class="d-flex justify-content-around">
        <User />
    </div>
    <footer>
      <EventListener>
        <Link to='/event/id'><EventList>My event</EventList></Link>
        <Link to='/event/id'><EventList>My event</EventList></Link>
        <Link to='/event/id'><EventList>My event</EventList></Link>
      </EventListener>
    </footer>    
</> 

let Spends=()=>
<>
  <InputWrapper>
    <Inputs>Spending type</Inputs>
  </InputWrapper>
  <Chooser />
  <InputWrapper>
    <Inputs>
    $
    </Inputs>
    <Upload />
  </InputWrapper>
</>
 
 let Upload =()=>
 <div class="input-group my-4" style={{width: 400}}>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
 
let Chooser =()=>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Choose a friend</label>
  </div>
  <select class="custom-select">
  <option value="Nick 1">Nick 1</option>
  <option value="Nick 2">Nick 2</option>
  
  </select>
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
            <Route path="/event/id" component = {MyEv} exact />
            <Route path="/event/spendings" component = {Spends} exact />
            {/* <Route component = {NotFound} /> */}
        {/* </Switch> */}
    </div>
</Router>
        );
    }
}
 
export default App;