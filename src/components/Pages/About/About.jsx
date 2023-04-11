import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About</h1>
        <p>Mobile Master is a fake store created for learning purposes.</p>
      </div>
      <div className="about-project">
        <h2>Features</h2>
        <p>Rotatable 3D animated multi-color models</p>
        <p>Shopping Cart</p>
        <p>Light and dark mode</p>
      </div>
      <div className="about-project">
        <h3>Technology</h3>
        <p>ReactJS</p>
        <p>ThreeJS</p>
        <p>React Three fiber</p>
        <p>Sass</p>
        <p>Firebase</p>
      </div>
    </div>
  );
};

export default About;
