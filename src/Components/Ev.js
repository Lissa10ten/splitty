import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

import {User, UserCard} from './User.js';
import {BlueButton, BlueButtonWrapper, AddEvent} from './Btns.js';
import {Inputs, InputWrapper} from './Inputs.js';



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

let EventListener =(prop)=>
<ul class="nav justify-content-center">{prop.children}</ul>

let EventList =(prop)=>
<li class="nav-item">
<a class="nav-link active">{prop.children}</a>
</li>

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

export {MyEv, NewEv, EventList, EventListener};