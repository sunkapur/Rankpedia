import React from "react";
import InformationCrad from "../../components/InformationCard";
import imgE from "../../assets/image/inner-page/png/explore.png";

const items = [
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_251_lolkh3.svg",
    title: "Practice",
    content:
      "Practice with tailored learning methodologies",
      color:"#E5F5FF"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_252_th9057.svg",
    title: "Ask",
    content:
      "Ask the best subject matter expert",
      color: "#F5F5D4"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Learn",
    content:
      "Learn, get accessed and progress",
      color: "#F5DEDE"
  }
];

const Doubtsinfocard = () => {
  return (
    <div className="pb-9 pb-md-0 pb-lg-0">
      <div className="container">
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15 faqInfocardstyling"
              data-aos="fade-up"
              data-aos-duration={900}
              key={index}
            >
              <InformationCrad options={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doubtsinfocard;