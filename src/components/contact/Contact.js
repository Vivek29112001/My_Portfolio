import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        from_name: username,
        phone_number: phoneNumber,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "2911vivek@gmail.com" // All messages will be sent to this email
      };
  
      emailjs.send('your_serviceID', 'your_templateID', templateParams, 'your_publicKey')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success(`Thank you dear ${username}, Your message has been sent successfully!`);
          setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, (error) => {
          console.log('FAILED...', error);
          toast.error("Failed to send the message, please try again.");
          setErrMsg("Failed to send the message, please try again.");
        });
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b p-4 border-gray-800 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-6 lg:p-10 rounded-lg shadow-lg">
            <form className="w-full flex flex-col gap-6 py-4">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput ${errMsg === "Username is required!" && "outline-designColor"}`}
                    type="text"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput ${errMsg === "Phone number is required!" && "outline-designColor"}`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${errMsg === "Please give your Email!" && "outline-designColor"}`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput ${errMsg === "Plese give your Subject!" && "outline-designColor"}`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${errMsg === "Message is required!" && "outline-designColor"}`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white transition duration-300 hover:border hover:border-designColor"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
