import React from "react";
import pdfUrl from "../CVFile/ZohrehMoazezi'CV.pdf"
import cv from "../CVFile/cv.png"

const CV = () => {
   return(
    <>
    <div className="resumeSection" id="AllComponent">
        <div className="Headers" data-aos = "fade-down" ><h1>CV</h1></div>
        <div  data-aos = "fade-down" >
            <img src={cv} className="resume"/>
        </div>
        <div  data-aos = "fade-down" >
        <a href={pdfUrl} download="ZohrehMoazezi" target='_blank'>
        <button className="download">Download</button>
        </a>
        </div>
        
    </div>
    </>
   );
}
export default CV;