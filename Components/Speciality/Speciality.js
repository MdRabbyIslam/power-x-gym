import React from 'react';
import sp1 from '../../image/sp-1.png';
import sp2 from '../../image/sp-2.png';
import sp3 from '../../image/sp-3.png';
import './Speciality.css'

function Speciality() {
    return (
        <div className="container mb-3">
            <h3 className="mb-5"><span style={{color:'#FFC300'}}>WHY</span> CHOOSE US</h3>
            <div className="card-deck">
            <div className="card card-div  d-flex align-items-center">
                <img src={sp1} className="card-img-top pt-3" alt="..."/>
                <div className="card-body">
                <h6 className="card-title font-weight-bold">FREE FITNESS TRAINING</h6>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div className="card card-div d-flex align-items-center shadow bg-white rounded" style={{border: '1px solid #FFC300'}}>
                <img src={sp2} className="card-img-top pt-3" alt="..."/>
                <div className="card-body">
                <h6 className="card-title font-weight-bold">TONS OF CARDIO & STREINGTH</h6>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div className="card card-div  d-flex align-items-center">
                <img  src={sp3} className="card-img-top pt-3" alt="..."/>
                <div className="card-body">
                <h6 className="card-title font-weight-bold">NO COMMITMENT MEMBERSHIPS</h6>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Speciality;