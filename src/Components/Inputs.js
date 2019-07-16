import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let Inputs =(prop)=>

<div class="input-group my-4" style={{width: 400}} >  
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">{prop.children}</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={prop.placeholder} />
</div>

let InputWrapper =(prop)=>
<div class="d-flex flex-wrap justify-content-around">{prop.children}</div>

export {Inputs, InputWrapper};