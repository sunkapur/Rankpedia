import React from 'react'
import Card from './Card'


const Section5 = () => {
  return (
    <div className="row mx-10 justify-content-center">
      <div className="col-12">
        <div className="text-center">
          <h3> What is experiential education? </h3>
          <h3> Why is this important for your child? </h3>
        </div>
      </div>

      <Card 
        card_image={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621597016/worldicon_bxklhm.svg"}
        title= "Real World Relevance"
        text="Learning has never been easier"
      />
      <Card
        card_image={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621596942/Group_258_sbgwga.svg"}
        title="Opportunity for creativity"
        text="Learning has never been easier"
      />
      <Card
        card_image={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621596943/Group_260_zntrnh.svg"}
        title="Oppurtunity for reflection"
        text="Learning has never been easier"
      />
      <Card
        card_image={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621596943/Group_261_gic7ua.svg"}
        title="Accelerated Learning"
        text="Learning has never been easier"
      />
      
      <a href="#">
        <button className="btn px-7 my-10 btn btn-blue-3 header-btn1 head-login">
          Read More On Why Rankpedia
        </button>
      </a>
    </div>
  )
}

export default Section5
