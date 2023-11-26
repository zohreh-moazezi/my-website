import React from "react";
import sample1 from './../picture/Appointment.png';
import sample2 from './../picture/Headphone.png';


const Samples = () => (
    <>
    <div className="samples" id="AllComponent">
       <div className="Headers" data-aos = "fade-down"><h1 className="portfolio">Portfolio</h1></div>
       <div className="allSamples1">

        <div data-aos = "flip-left" className="image1">
            <a href="https://6499fdd3b14d05009904601f--poetic-liger-974ad7.netlify.app/">
            <img className="sampleItems"src={sample1} alt = "sample1" id="sample1"></img> 
            <div class="image-hover-text">
    <div class="image-hover-text-bubble">
      <span class="image-hover-text-title">Appointment</span>
      Implement by React
     </div>
  </div>
            </a>
           
        </div> 

        <div data-aos = "flip-left">
            <a href="https://655e2706ed458540d862d0f9--headphoneonlineshop.netlify.app/">
            <img className="sampleItems"src={sample2} alt = "sample1" id="sample2"></img>
            <div class="image-hover-text headPhone">
    <div class="image-hover-text-bubble">
      <span class="image-hover-text-title">Headphone Shop</span>
      Implement by React
     </div>
  </div>
            </a>
        </div>  

      </div>
    </div>
    </>
);

export default Samples;