import React , {useEffect} from "react";
import myPic from "./../picture/mypic.png";
import Aos from "aos";
import "aos/dist/aos.css";


const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration : 2000});
        }, []);
        return(
           <div className="about" id="AllComponent">
            <div className="Headers" data-aos = "fade-down" ><h1  >About Me</h1></div>
            <div className="myImg" data-aos = "fade-down">
          <img src={myPic} alt="My pic" className="myPic"></img>
        </div>
            <p data-aos = "fade-down" className="summary">
                I'm Zohreh Moazezi , I'm 29 years old.<br/> I graduated from a University of Ershad Damavand in the field of IT Engineering (2012 - 2016) .<br/>I'm a Frontend Developer who works with React Framework. 
                Also I can build React project by webpack from scratch.<br/>
                As a programmer, I have a solid ability to write clean, well-organized , maitainable and high performant code and follow best practices.<br/>
                It is enjoyable for me to program and take on challenges and I can find answers to each question by searching online.<br/>
                I am motivated, a quick learner, and hardworking, and I hope to contribute to technology positively.
            </p>
            
           </div>
    );
};
export default AboutMe;