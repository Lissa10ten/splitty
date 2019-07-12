import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let UserCard =()=>
<div class="card mb-5" style={{width: 180 }}>
  <img src="https://picsum.photos/200" class="card-img-top"></img>
  <div class="card-body">
  <h5 class="card-text">Nick</h5>
  </div>
</div>

let User =()=>
<div class='my-4'>
<div class="d-inline-flex flex-column">
  <UserCard  />
  <Money /> 
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

export {User, UserCard};
