import React from "react";

const Skills = () => {
  return (
    <>
      <div id="AllComponent" data-aos="fade-down" className="skillSection">
        <div className="Headers">
          <h1 className="skillHeader">Skills</h1>
        </div>

        <div className="skills" id="AllComponent">
          <div className="skillButton" id="htmlButton" data-aos="fade-down">
            HTML5
          </div>
          <div className="skillButton" data-aos="fade-down">
            CSS3
          </div>
          <div className="skillButton" id="jsButton" data-aos="fade-down">
            Java Script
          </div>
          <div className="skillButton" id="reactButton" data-aos="fade-down">
            React
          </div>
          <div className="skillButton" id="gitButton" data-aos="fade-down">
            Git & GitHub
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
