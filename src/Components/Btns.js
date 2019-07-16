import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


let BlueButtonWrapper =(props)=>
<div class="d-flex justify-content-center" >
    <span>
      {props.children}
    </span>
  </div>

let BlueButton=(prop)=>
<button type="button" class="btn btn-outline-primary m-2"onClick={prop.onClick}>{prop.children}</button>

let YelButton =(prop)=>
<button type="button" class="btn btn-outline-warning m-2" onClick={prop.onClick}>{prop.children}</button>

let GreyButton =(prop)=>
<button type="button" class="btn btn-outline-secondary m-3" style= {{height: 50}} onClick={prop.onClick}>{prop.children}</button>

export {BlueButton, BlueButtonWrapper, YelButton, GreyButton};