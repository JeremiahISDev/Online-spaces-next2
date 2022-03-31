import React from "react";
function Contact() {
  return (
    <div className="contact m-6 p-2">
    <div id="Title" className="text-center text-blue-600 font-bold text-[2rem] pb-6">
      <h1>Contact Us</h1>
      </div>
      <div className="text-center align-center align-items-center justify-center justify-items-center flex" id="Form-Div">
      <form method="POST" className="text-center border-2 p-6 w-fit">
        <label htmlFor="email" className="px-4">Email:</label>
        <input type="email" name="email" className="border-2 rounded p-2 mb-4 border-blue-800" placeholder="example@domain.com"/> <br/>
        <label htmlFor="name" className="px-4">Name:</label>
        <input type="text" name="name" className="border-2 rounded p-2 border-blue-800" placeholder="John Doe"/>
        <br/>
        <div className="pt-4">
        <label htmlFor="message" className="px-4">Message:</label>
        <textarea name="message" className="form-textarea mt-1 block w-full border-2 rounded p-2 border-blue-800" rows="3" placeholder="Message"></textarea>
        </div>
        <br/>
        <br/>
        <button type="submit" name="submit" className="h-10 px-5 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Submit</button>
      </form>
      </div>
    </div>
  );
}
export default Contact;