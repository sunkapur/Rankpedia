import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/image/home-1/png/analytics.png";
import img2 from "../../assets/image/home-1/png/business-agent.png";
import img3 from "../../assets/image/home-1/png/code.png";
import img4 from "../../assets/image/home-1/png/headphones-2.png";
import img5 from "../../assets/image/home-1/png/coins.png";
import img6 from "../../assets/image/home-1/png/drop.png";

import homesection1 from "../../assets/image/home/enagage.png";
import homesection2 from "../../assets/image/home/l6-content2-img.png";
import homesection3 from "../../assets/image/home/enrich.png";
import homesection4 from "../../assets/image/home/prepare.png";

import group1 from "../../assets/image/home/gallery1.png";
import group2 from "../../assets/image/home/gallery2.png";
import group3 from "../../assets/image/home/gallery3.png";
import group4 from "../../assets/image/home/gallery4.png";


import small1 from "../../assets/image/home/small1.png";
import small2 from "../../assets/image/home/small2.png";
import small3 from "../../assets/image/home/small3.png";
import small4 from "../../assets/image/home/small4.png";

import homebanner from "../../assets/image/home/banner.png";

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Marketing",
    image: img1,
    jobs: 472,
  },
  {
    title: "Human Resource",
    image: img2,
    jobs: 172,
  },
  {
    title: "Developer",
    image: img3,
    jobs: 272,
  },
  {
    title: "Customer Support",
    image: img4,
    jobs: 2172,
  },
  {
    title: "Finance",
    image: img5,
    jobs: 422,
  },
  {
    title: "Design",
    image: img6,
    jobs: 222,
  },
];

const Section2 = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    centerPadding: "28%",
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "25%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1595,
        settings: {
          centerPadding: "15%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          centerPadding: "10%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          centerPadding: "16%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "12%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "5%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 890,
        settings: {
          centerPadding: "18%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: "15%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "28%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          centerPadding: "26%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "24%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "22%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "18%",
          slidesToShow: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
          autoplay: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className={className} {...rest}>
       
        <div class="content-section pt-10 pb-9 new-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
            <div class="content-img sxrty">
           <img class="hmgrt" src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643089987/home-page/Bringing-About-a-Change_vzucke.jpg" } alt="" />
            </div>
          </div>
          <div class="col-10 col-lg-6 imgs-imt" id="hmgfre-estr">
            <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <h2 class="title gr-text-3 engag" >Teaching Methodology</h2>
              <p class="gr-text-8 clscls">Fun <b>online classes for CBSE </b> students to simplify complex concepts. Get access to hours of video lessons scaffolder perfectly with Bloom???s Taxonomy. The improved learning can help identify achievable learning goals. </p>
            </div>
            <div class="content-widget">
              <div class="row">
                
              </div>
            </div>
          </div>
        </div>


        <div class="row align-items-center justify-content-center">

<div class="col-10 col-lg-6 col-xl-6 pr-xl-13 order-lg-1 formob" id="dsp-ben-elb">
  <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
    <h2 class="title gr-text-3 mb-6 engag">Holistic Education: NEP 2020 Ready</h2>
    <p class="gr-text-8 clscls">Taking the holistic approach, we integrated technology with education to assist the students in learning about the country???s traditions and cultures and thereby improving the learning process.</p>
       <a href="/neplanding" class="btn btn-red mx-auto gtstrdr">Learn More</a> 
  </div>
  <div class="content-widget">
    <div class="row mb-n9">
     
    </div>
  </div>
</div>

<div class="col-lg-6 order-lg-2 extclt" data-aos="flip-right" data-aos-duration="2000" data-aos-once="true">
  <div class="content-img text-right">
  <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621248431/kisspng-jigsaw-puzzles-vector-graphics-stock-photography-i-long-awaited-fling-windows-vcenter-server-to-vcsa-5c050a82c97ab5.0533047615438342428253_uc3mjv.png" } alt="" />
  </div>
</div>

</div>


      </div>
    </div>
        
        
      </div> */}
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-phone mx-auto text-center"
          >
            Bringing About a Change
          </h2>
          <div 
            className="col-md-6" 
            data-aos="flip-right" 
            data-aos-duration="1000" 
            data-aos-once="true"
          >
            <img 
              src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643089987/home-page/Bringing-About-a-Change_vzucke.jpg" 
              alt="" 
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 
              style={{
                fontWeight: 100
              }}
              className="section-2-heading-desktop"
              data-aos="fade-left" 
              data-aos-duration="500" 
              data-aos-once="true"
            >
              Bringing About a Change
            </h2>
            <p>
              Our research has provided us with an estimate of the number of students who have dropped out of school.As a result, we have devised several strategies for reintegrating these students into the system.
            </p>
          </div>
        </div>

        <div className="row align-items-center px-3 px-md-0">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-phone mx-auto text-center"
          >
            Learner-Centered Stratification of Rankpedia
          </h2>
          <div 
            className="col-md-6 order-md-last" 
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            <img 
              src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643094421/home-page/3-Verticals_1_siwcwr.png" 
              alt="" 
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 
              style={{
                fontWeight: 100
              }}
              className="section-2-heading-desktop"
              data-aos="flip-right" 
              data-aos-duration="2000" 
              data-aos-once="true"
            >
              Learner-Centered Stratification of Rankpedia
            </h2>
            <p>
              Rankpedia has been expanded into three verticals, namely E-Learning, E-school, and Continuing Education, in order to deliver world-class educational possibilities to students all around the world.  
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
