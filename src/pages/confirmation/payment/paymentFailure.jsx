import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../../../image/popkeyofficial.png";


const PaymentFailure = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
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
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 text-center">
        <img src={logo} alt="Logo" className="w-72 mx-auto mb-4" />

        {/* Animated Cross Circle Icon */}
        <div className="flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-red-500 mx-auto mb-4"
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

        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed!</h1>
        <p className="text-gray-500 mb-6">
          Oops! Something went wrong with your payment. Please try again or contact support if the issue persists.
        </p>

        <p className="text-gray-500 mb-6">
          Redirecting in {countdown} seconds...
        </p>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full mb-4"
          onClick={whatsapp}
        >
          Return to Whatsapp
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;
