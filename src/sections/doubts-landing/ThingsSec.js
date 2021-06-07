import React, { useContext } from "react";
import { Link } from "gatsby";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";
import Faqsection from "../faq/Faqsection"
const ThingsSec = ({ Title,Accordianheading1,Accordianpara1,Accordianheading2,Accordianpara2,Accordianheading3,Accordianpara3,
  Accordianheading4,Accordianpara4,Accordianheading5,Accordianpara5,Accordianheading6,Accordianpara6,Accordianheading7,Accordianpara7,Accordianpara71 }) => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-5 pt-md-19 pt-lg-17 pb-15 pb-md-18 pb-lg-25 mb-lg-1">

    <h3 className="text-center mb-15">{Title}</h3>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          <div className="col-lg-6 col-md-10 col-sm-11">
          <Accordion id="accordianarrow2" preExpanded={['a']}> 
            <AccordionItem uuid="a">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {Accordianheading1}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                        {Accordianpara1}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading2}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className="accordiondisc">
                {Accordianpara2}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading3}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    {Accordianpara3}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading4}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    {Accordianpara4}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading5}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    {Accordianpara5}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading6}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    {Accordianpara6}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {Accordianheading7}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    {Accordianpara7}
                    </p>
                    <p className="accordiondisc">
                    {Accordianpara71}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${imgC});
              `}
            >
              <a
                href="https://www.youtube.com/watch?v=lK2HwzB-unE&list=RDdYReZzz8vu4&index=10"
                className="video-btn sonar text-white circle-98 font-size-8"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleVideoModal();
                }}
              >
                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621536971/Icon_material-play-circle-outline_rpwskz.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsSec;
