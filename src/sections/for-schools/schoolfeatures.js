import React, { useContext } from "react";
import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";


const Schoolfeatures = () => {
//   const gContext = useContext(GlobalContext);

  return (
    <div className="pt-14 pt-md-0 pt-lg-0 pb-15 pb-md-18 pb-lg-15 mb-lg-1">
      <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="Heading-styling text-center mb-8 mb-lg-10">
                  <h2>
                  Take your School to the Next Level
                  </h2>
                </div>
              </div>
            </div>
            <div class="interest-explore-inner">
                              <div class="row">
                                    <div class="col-md-4 col-sm-6">
                                    
                                          <div class="image-holder">
                                            
                                                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622461286/brown-bg-min_dza8vd.jpg" alt="" class="img-fluid" />
                                                <div className="featured-card-details">
                                                1000+ <br/> Videos
                                                </div>
                                        </div> 
                                       
                                    </div>
                                   
                                    <div class="col-md-4 col-sm-6">
                                   
                                          <div class="image-holder">
                                         
                                                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622461286/yellow-bg-min_mb94sp.jpg" alt="" class="img-fluid" />
                                                <div className="featured-card-details">
                                                5000+ <br/>Revision Notes
                                                </div>
                                            
                                        </div> 
                                       
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                    {/* <a href="/program-listing/?Country=all&categoryname=Commerce %26 Finance&DegreeType=all"> */}
                                    {/* <a href="/english-preparation"> */}
                                          <div class="image-holder">
                                                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624971462/Mask_Group_55_xcthat.png" alt="" class="img-fluid" />
                                                <div className="featured-card-details">
                                                Custom <br/>Practice Tests
                                                </div>
                                        </div> 
                                        {/* </a>  */}
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                   
                                          <div class="image-holder">
                                                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622461286/light-green-bg-min_usay8t.jpg" alt="" class="img-fluid" />
                                                <div className="featured-card-details">
                                                Teacher
                                                </div>
                                          </div> 
                                    
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                   
                                       <div class="image-holder">
                                                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622461286/blue-bg-min_rwksur.jpg" alt="" class="img-fluid" />
                                                <div className="featured-card-details">
                                                Student <br/>Performance
                                                </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                    
                                         <div class="image-holder">
                                               <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622461286/pruple-bg-min_klwbco.jpg" alt="" class="img-fluid" />
                                               <div className="featured-card-details">
                                               Parents <br/> 360
                                                </div>
                                            </div> 
                                            
                                    </div>  
                                </div>
                                {/* <!--<a class="btn-default"  data-wow-duration="1s" data-wow-delay=".1s" href="#">Find Your Path</a>--> */}
                            </div>
      </div>
    </div>
  );
};

export default Schoolfeatures;
