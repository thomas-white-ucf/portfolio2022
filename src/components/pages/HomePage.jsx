import React from "react";

import thomasLogo from "../../assets/images/thomasLogo.jpeg";

const HomePage = () => {
  return (
    <div>
      <img src={thomasLogo} alt="Thomas White" height="200px" width="200px" />
      <p>
        After graduating from UCF Mechanical Engineering in 2015, I performed
        Facility Condition Assessments and building Cost Estimates. October 2017
        I started contracting independently and assessed damage resulting from
        Hurricanes Irma and Maria in the U.S. Virgin Islands. Currently I am
        enrolled in UCF Coding Full Stack Development Bootcamp.
      </p>
      <p>
        In total I have assessed 25+ million square feet of commercial,
        government and residential facilities. This led me to start White
        Engineering LLC. I help construct cost estimates for renovations and
        developing projects. Located in Central Florida, I am able to consult
        large commercial developments and Orlando's themed entertainment
        industry.
      </p>
      <p>
        I've enjoyed traveling to ~44 States, The Bahamas, Mexico, Puerto Rico,
        U.S. Virgin Islands, Peru, Germany and Japan.
      </p>
    </div>
  );
};

export default HomePage;
