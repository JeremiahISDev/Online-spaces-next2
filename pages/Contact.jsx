import React from "react";
function Contact() {
  return (
    <div className="contact m-6 p-2">
    <div id="Title" className="text-center text-blue-600 font-bold text-[2rem] pb-6">
      <h1>Contact Us</h1>
      </div>
      <form className="text-center border-2 p-6">
        <label htmlFor="email" className="pr-4">Email:</label>
        <input type="email" name="email" className="border-2 rounded p-2" placeholder="example@domain.com"/>
      </form>
    </div>
  );
}
export default Contact;