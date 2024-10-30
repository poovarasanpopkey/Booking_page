import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import logo from "../../../image/popkeyofficial.png";



const TokenExpired = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate(); // For programmatic navigation to the homepage


  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer); 
          whatsapp()
          return 0; 
        }
        return prev - 1; 
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);


  function whatsapp() {
    window.location.href = 'https://wa.me/917400500200';
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 text-center">
        <img src={logo} alt="Logo" className="w-72 mx-auto mb-4" />

        {/* Expired token icon */}
        <div className="flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Token Expired!
        </h1>
        <p className="text-gray-500 mb-6">
          Please wait a moment. You will be automatically redirected to WhatsApp in {" "}
          <span className="text-red-500 font-semibold">{seconds}</span> seconds.
        </p>

        <button
          className="bg-orange-600 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full mb-4"
          onClick={whatsapp}
        >
          Go to Whatsapp
        </button>
      </div>
    </div>
  );
};

export default TokenExpired;
