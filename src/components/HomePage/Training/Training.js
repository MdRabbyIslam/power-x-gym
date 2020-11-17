import React from 'react';
import train1 from './train1.jpg';
import train2 from './train2.png';
import './Training.css'

function Training() {
    return (
        <div className="container mb-3">
            <h3 className="mb-5">TRAINING <span style={{color:'#FFC300'}}>PROGRAMS</span></h3>
            <div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card train-card">
      <img src={train2} class="card-img-top" alt="..."/>
      <div class="card-img-overlay font-weight-bold" style={{paddingTop:"50%", paddingRight:"50%"}}>
        <p style={{backgroundColor:"#FFC300", height:"50px", marginLeft:"-20px", paddingTop:"10px"}}>YOGA TRAINING SESSION</p>
  </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card train-card">
      <img src={train1} class="card-img-top" alt="..."/>
      <div class="card-img-overlay font-weight-bold" style={{paddingTop:"50%", paddingRight:"50%"}}>
        <p style={{backgroundColor:"#FFC300", height:"50px", marginLeft:"-20px", paddingTop:"10px"}}>CARDIO TRAINING SESSION</p>
  </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Training;