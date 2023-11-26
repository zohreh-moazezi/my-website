import React from "react";
import resume from './../picture/cv.png'

const CV = () => (
    <>
    <div className="resumeSection" id="AllComponent">
        <div className="Headers" data-aos = "fade-down" ><h1>CV</h1></div>
        <div  data-aos = "fade-down" >
            <img src={resume} className="resume" alt = "resume"></img>
        </div>
        <div  data-aos = "fade-down" >
        <a href={resume} download="MyExampleDoc" target='_blank'>
        <button className="download">Download</button>
        </a>
        </div>
        
    </div>
    </>
);
export default CV;