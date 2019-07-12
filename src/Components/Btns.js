import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


let BlueButtonWrapper =(props)=>
<div class="d-flex justify-content-center" >
    <span>
      {props.children}
    </span>
  </div>

let BlueButton=(prop)=>
<button type="button" class="btn btn-outline-primary m-2">{prop.children}</button>

let AddEvent =(prop)=>
<button type="button" class="btn btn-outline-warning m-2" onClick={prop.onClick}>New event</button>
;

export {BlueButton, BlueButtonWrapper, AddEvent};