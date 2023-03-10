import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About</h1>
        <p>
          Mobile Master is a fake store created for learning purpouses. However
          Stripe payments accualy work and there is no refund.
        </p>
      </div>
      <div className="about-project">
        <h1>About Project</h1>
        <p>
          This project was created in ReactJS. It usess ThreeJS and React Three
          Fiber for animated models. Styles are handled via Sass. Deployment to
          online server was done in firebase.
        </p>
        <h2>Features:</h2>
        <p>Rotatable 3D animated multi-color models</p>
        <p>Shopping Cart</p>
        <p>Light and dark mode</p>
        <p>Working Stripe payments</p>
        <h2>Technology</h2>
        <p>ReactJS</p>
        <p>ThreeJS</p>
        <p>React Three fiber</p>
        <p>Express</p>
        <p>Sass</p>
        <p>Firebase</p>
      </div>
    </div>
  );
};

export default About;
