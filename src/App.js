import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

let UserCard =()=>
<div class="card mb-5" style={{width: 180 }}>
  <img src="https://picsum.photos/200" class="card-img-top"></img>
  <div class="card-body">
  <h5 class="card-text">Nick</h5>
  </div>
</div>

let OwesMe =()=>
<div class="badge badge-pill badge-success m-2 p-3">Summ</div>

let OweTo =()=>
<div class="badge badge-pill badge-danger m-2 p-3">-Summ</div>

let Money =()=>
<div d-flex class=" d-inline-flex justify-content-center"> 
    <OwesMe />
    <OweTo />
</div>

let User =()=>
<div class='my-4'>
<div class="d-inline-flex flex-column">
  <UserCard  />
  <Money /> 
</div>
</div>

let EventListener =(prop)=>
<ul class="nav justify-content-center">{prop.children}</ul>

let EventList =(prop)=>
<li class="nav-item">
<a class="nav-link active">{prop.children}</a>
</li>



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

let BlueButton=(prop)=>
<button type="button" class="btn btn-outline-primary m-2">{prop.children}</button>

let AddEvent =(prop)=>
<button type="button" class="btn btn-outline-warning m-2" onClick={prop.onClick}>New event</button>



let Inputs =(prop)=>

<div class="input-group my-4" style={{width: 400}} >  
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">{prop.children}</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>

let InputWrapper =(prop)=>
<div class="d-flex justify-content-around">{prop.children}</div>

let BlueButtonWrapper =(props)=>
<div class="d-flex justify-content-center" >
    <span>
      {props.children}
    </span>
  </div>

let NewEv =()=>
<>
  <header class="my-2">
    <InputWrapper>
      <Inputs>Event name</Inputs>
    </InputWrapper>
  </header>
  <div class="d-flex justify-content-around flex-wrap-reverse">
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
  </div>
  <footer class="my-4">
    <BlueButtonWrapper>
      <BlueButton>Cancel</BlueButton>
      <BlueButton>Add a friend</BlueButton>
      <Link to='/event/spendings'><BlueButton>Go to spendings</BlueButton></Link>
    </BlueButtonWrapper>
  </footer>
</> 


let MyEv=()=>
<>
<header class='m-2'>
  <div class="d-flex justify-content-end">
    <Link to='/event/new'><AddEvent/></Link> 
    <Link to='/total'><BlueButton>Total: Summ</BlueButton></Link>
  </div>
</header>
<EvName>My event 1</EvName>
<div class="d-flex justify-content-around flex-wrap-reverse">
  <User />  
  <User />  
  <User />  
</div>
<BlueButtonWrapper>
  <BlueButton>Delete this event</BlueButton>
  <BlueButton>Add spendings</BlueButton>
</BlueButtonWrapper>
<footer class="my-3">
  <EventListener>
    <Link to='/event/id'><EventList>My event</EventList></Link>
    <Link to='/event/id'><EventList>My event</EventList></Link>
  </EventListener>  
</footer>
</>

let EvName =(prop)=>
<div class="m-auto" style={{width: 680 }}>
  <li class="list-group-item  list-group-item-info">{prop.children}</li>  
</div>

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