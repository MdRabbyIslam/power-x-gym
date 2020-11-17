import React from 'react';
import './Footer.css';
import yt from '../../image/icon/bxl-youtube.png'
import fb from '../../image/icon/bxl-facebook.png'
import twt from '../../image/icon/bxl-twitter.png'
import instra from '../../image/icon/bxl-instagram.png'

function Footer() {
    return (
        <div className="footer-body">
                {/* <!-- Footer --> */}
              <div className="page-footer font-small mdb-color pt-4">

                {/* <!-- Footer Links --/> */}
                <div className="container text-center text-md-left">

                  {/* <!-- Footer links --> */}
                  <div className="row text-center text-md-left mt-3 pb-3">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h3 className="text-uppercase mb-4 font-weight-bold text-white">POWER <span style={{color:'#FFC300'}}>X</span></h3>
                      
                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="w-100 clearfix d-md-none"/>

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Need Help?</h6>
                      <p>
                      Help Center
                      </p>
                      <p>
                        Email Support
                      </p>
                      <p>
                        Live Chat
                      </p>
                      <p>
                        Gift Certificates
                      </p>
                      <p>
                        Send Us Feedback
                      </p>
                    </div>
                    {/* <!-- Grid column --/> */}

                    <hr className="w-100 clearfix d-md-none"/>

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <p className="text-uppercase mb-4 font-weight-bold">Digital Resources</p>
                      <p>
                        Articles
                      </p>
                      <p>
                        E-Books
                      </p>

                    </div>

                    {/* <!-- Grid column --> */}
                    <hr className="w-100 clearfix d-md-none"/>

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                      <p className="text-center text-md-right pl-0">
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">
                            <img src={yt} alt=""></img>
                          </li>
                          <li className="list-inline-item">
                          <img src={fb} alt=""></img>
                          </li>
                          <li className="list-inline-item">
                          <img src={instra} alt=""></img>
                          </li>
                          <li className="list-inline-item">
                          <img src={twt} alt=""></img>
                          </li>
                          
                        </ul>
                      </p>
                      <p>Forum</p>
                      
                    </div>
                    {/* <!-- Grid column --> */}

                  {/* <!-- Footer links --> */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Join Our Newsletter</h6>
                      <p>
                        Get Exclusive News, features and Updates From The KBA Academy.
                      </p>
                      

                    </div>

                  <hr/>

                  {/* <!-- Grid row --> */}
                  
                  {/* <!-- Grid row --> */}

                {/* <!-- Footer Links --> */}

              </div>
              </div>
              {/* <!-- Footer --> */}
                      </div>
                      <div className="d-flex justify-content-center">
                  <footer style={{color: '#D6DBDF'}}><small>© 2020 Programming Hero. All rights reserved</small></footer>
                  </div>
        </div>
    );
};

export default Footer;