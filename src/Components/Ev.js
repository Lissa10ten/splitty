import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

import {User, UserCard} from './User.js';
import {BlueButton, BlueButtonWrapper, YelButton, GreyButton} from './Btns.js';
import {Inputs, InputWrapper} from './Inputs.js';



let MyEv=()=>
<>
<header class='m-2'>
  <div class="d-flex justify-content-end">
    <Link to='../me'><YelButton>Me</YelButton></Link>
    <Link to='/event/new'><YelButton>Add Event</YelButton></Link> 
    <BlueButton onClick={() => alert(
    `+ Summ
- Summ
Total: Summ`
)}>Total: Summ</BlueButton>
  </div>
</header>
<EvName>Event name</EvName>
<div class="d-flex justify-content-around flex-wrap-reverse">
  <User />  
  <User />  
  <User />  
</div>
<BlueButtonWrapper>
  <BlueButton>Delete this event</BlueButton>
  <Link to="/event/id/edit"><BlueButton>Edit this event</BlueButton></Link>
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
<a class="nav-link">{prop.children}</a>
</li>

let NewEv =()=>
<>
 <div class="d-flex justify-content-end">
   <Link to='../me'><YelButton>Me</YelButton></Link>
   <BlueButton onClick={() => alert(
    `+ Summ
- Summ
Total: Summ`
)}>Total: Summ</BlueButton>
 </div>
  <header class="my-2">
    <InputWrapper>
      <Inputs>Event name</Inputs>
    </InputWrapper>
  </header>
  <EvName>With me were:</EvName>
  <InputWrapper>
      <div class="d-flex m-1">
        <Inputs>Nick</Inputs>
        <Inputs>$</Inputs>
      </div>
    </InputWrapper>  
  <footer class="my-4">
    <BlueButtonWrapper>
      <BlueButton>Cancel</BlueButton>
      <BlueButton>Add user</BlueButton>
      <BlueButton>Save event</BlueButton>
    </BlueButtonWrapper>
  </footer>
</> 


let EditEv =()=>
<>
 <div class="d-flex justify-content-end">
   <Link to='../../me'><YelButton>Me</YelButton></Link>
   <BlueButton onClick={() => alert(
    `+ Summ
- Summ
Total: Summ`
)}>Total: Summ</BlueButton>
 </div>
  <header class="my-2">
    <InputWrapper>
      <Inputs placeholder="Event name">Event name</Inputs>
    </InputWrapper>
  </header>
  <EvName>With me were:</EvName>
  <InputWrapper>
      <div class="d-flex">
        <GreyButton>Delete this user</GreyButton>
        <Inputs placeholder="Nick">Nick</Inputs>
        <Inputs placeholder="summ">$</Inputs>
      </div>
      <div class="d-flex">
        <GreyButton>Delete this user</GreyButton>
        <Inputs placeholder="Nick">Nick</Inputs>
        <Inputs placeholder="summ">$</Inputs>
      </div>
      <div class="d-flex">
        <GreyButton>Delete this user</GreyButton>
        <Inputs placeholder="Nick">Nick</Inputs>
        <Inputs placeholder="summ">$</Inputs>
      </div>
      <div class="d-flex">
        <GreyButton>Delete this user</GreyButton>
        <Inputs placeholder="Nick">Nick</Inputs>
        <Inputs placeholder="summ">$</Inputs>
      </div>      
    </InputWrapper>  
  <footer class="my-4">
    <BlueButtonWrapper>
      <BlueButton>Cancel</BlueButton>
      <BlueButton>Add user</BlueButton>
      <BlueButton>Save event</BlueButton>
    </BlueButtonWrapper>
  </footer>
</> 


export {MyEv, NewEv, EventList, EventListener, EditEv};