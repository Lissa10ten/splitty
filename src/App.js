import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import { GraphQLClient } from 'graphql-request';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {User} from './Components/User';
import {BlueButton, YelButton} from './Components/Btns';
import {Inputs, InputWrapper} from './Components/Inputs';
import {MyEv, NewEv, EventList, EventListener, EditEv} from './Components/Ev'



// redux

const gql = new GraphQLClient("/graphql", { headers: {} })

function promiseReducer(state, action) {
  if (!state)
    return{};
  if (action.type === 'PROMISE') {
    return {...state, [action.name]: {status: action.status, payload: action.payload, error: action.error}}
  }
  return state
}

const store = createStore(promiseReducer, applyMiddleware(thunk))

store.subscribe(()=> console.log(store.getState()))

function promiseActionMaker(name, promise){
  const actionPending  = () => ({type: 'PROMISE', name, status: 'PENDING', payload: null, error: null})
  const actionResolved = payload => ({type: 'PROMISE', name, status: 'RESOLVED', payload, error: null})
  const actionRejected = error => ({type: 'PROMISE', name, status: 'REJECTED', payload: null, error})

  function actionPromiseThunk() {
    return async dispatch =>{
      dispatch(actionPending())
      let data = await promise.catch(e=> dispatch(actionRejected(e)))
      dispatch(actionResolved(data))
    }
  }
  return actionPromiseThunk;
}



let graphqlCreateEvThunk = () =>
 promiseActionMaker('createEv', gql.request(
    `mutation createEvent($name:String!, $total:Float!){
    createEvent(name:$name,total:$total){
        _id, name
        }
    }`, 
  ))




let Me =()=>
<>
    <header class='m-2'>
      <div class="d-flex justify-content-end">
      <Link to='/event/new'><YelButton>Add Event</YelButton></Link>
      <BlueButton onClick={() => alert(
    `+ Summ
- Summ
Total: Summ`
)}>Total: Summ</BlueButton>
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
            <Route path="/event/id/edit" component = {EditEv} exact />
            {/* <Route component = {NotFound} /> */}
        {/* </Switch> */}
    </div>
</Router>
        );
    }
}
 
export default App;