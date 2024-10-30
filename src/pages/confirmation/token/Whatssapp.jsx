import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../image/popkeyofficial.png";


const WhatsApp = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Start countdown from 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Clear interval when countdown reaches 0
          whatsapp()
          return 0; // Set countdown to 0
        }
        return prev - 1; // Decrement countdown
      });
    }, 1000); // Update countdown every second

    // Cleanup the interval if the component unmounts
    return () => clearInterval(timer);
  }, [navigate]);


  function whatsapp() {
    window.location.href = 'https://wa.me/917400500200';
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <img src={logo} alt="Logo" className="w-72 mx-auto mb-4" />

        <div className="text-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-green-500 mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"
            />
          </svg> */}
          {/* <h1 className="text-3xl font-semibold mb-2 text-gray-800">
            Booking Successful!
          </h1> */}
          {/* <p className="text-gray-600 mb-4">
            Your payment has been processed successfully.
          </p> */}
          <p className="mt-4 text-md text-gray-600 mb-4">
            Redirecting to whatsapp in {countdown} seconds...
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
            onClick={whatsapp}
          >
            Go to Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
