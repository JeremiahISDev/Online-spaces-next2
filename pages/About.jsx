import React from "react";
function About() {
  return (
    <div className="about">

            <h1 className="text-center font-bold text-blue-600 text-3xl p-6">About Us</h1>
            <div className="w-fit border-2 m-4 p-6 border-blue-700 rounded overflow-hidden shadow-lg">
        <p className="text-center text-blue-800 font-extrabold"> 
          <div><a href="./assets/Checklist.pdf" download="Project_Checklist_Final.pdf">Checklist</a></div>
          <div><a href="./assets/Log.pdf" download="Project_Worklog_Final.pdf">Worklog</a></div>
          <div className="text-black font-normal">This website was built
using TailwindCSS. The overall layout, structure, and design of the website are
original and were developed from scratch by members of team 1067.</div>
            </p>
            </div>
          </div>
);
}
export default About;
