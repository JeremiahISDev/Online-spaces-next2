import React from "react";
import { Free, PersonalPro, Enterprise } from "./Pricing Cards";
function Pricing() {
  return (
    <div className="contact">
      <div className="container">
        <div className="cards flex items-center place-items-center">
          <Free />
          <PersonalPro />
          <Enterprise/>
        </div>
        
      </div>
    </div>
  );
}

export default Pricing;