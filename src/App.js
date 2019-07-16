import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import {User} from './Components/User';
import {BlueButton, YelButton} from './Components/Btns';
import {Inputs, InputWrapper} from './Components/Inputs';
import {MyEv, NewEv, EventList, EventListener, EditEv} from './Components/Ev'

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