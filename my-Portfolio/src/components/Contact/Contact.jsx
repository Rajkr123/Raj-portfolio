import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Mail Me UI */}
      <div className="mt-4 w-full max-w-lg bg-[#0d081f] p-10 rounded-2xl shadow-[0_10px_30px_rgba(130,69,236,0.15)] border border-gray-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
        <div className="w-20 h-20 bg-purple-900/40 rounded-full flex items-center justify-center mb-6">
          <FaEnvelope className="text-4xl text-purple-500" />
        </div>

        <h3 className="text-3xl font-bold text-white mb-2">
          Mail Me <span className="ml-1">📬</span>
        </h3>

        <p className="text-gray-400 mb-8 max-w-sm">
          Want to discuss a project, a job opportunity, or just say hi? My inbox is always open!
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajkr8235@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 py-4 px-10 text-white font-bold text-lg rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaEnvelope /> Drop Me An Email
        </a>

        <div className="mt-6 pt-6 border-t border-gray-800 w-full">
          <p className="text-gray-500 text-sm">
            Or direct email at: <br />
            <span className="text-purple-400 font-mono text-base tracking-wider block mt-2 select-all">rajkr8235@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
