import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../image/popkeyofficial.png"
import { detectOS } from "../../utils/detectos";


export const PopoutExtend = () => {
  const params =useParams()
  const Token=params.Token
  const currentDomain = window.location.origin;  // Extract the domain name

  

  const [extend, setExtend] = useState(null);
  const [extendValue, setExtendValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [os, setOs] = useState("");
  const [gatway, setGatway] = useState("phonepeV1");



  const navigate = useNavigate(); 
  
  useEffect(() => {
    const detectedOS = detectOS(); // Call the imported function
    setOs(detectedOS);
  }, []);

  useEffect(() => {
    if(os){
      const fetchExtensionData = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
          };
          const requestBody = {
            book_token: Token,
            device: os,
  
          };
          const response = await axios.post(
            `${currentDomain}/api/retrieveToken/`,
            requestBody,
            { headers }
          );
  
          if (response.status === 200) {
            setExtend(response.data.data);
            setLoading(false);
          } else {
            navigate("/token-expired"); 
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Failed to load data.");
          setLoading(false);
          navigate("/token-expired"); 
        }
      };
  
      fetchExtensionData();
    }
    
  }, [navigate,os]);

  useEffect(() => {
    if (extend && extend.extension_duration.length > 0) {
      const defaultDuration = extend.extension_duration[0];
      setSelectedUnit(defaultDuration.unit);
      setSelectedAmount(defaultDuration.amount);
      setExtendValue(defaultDuration.duration);
    }
  }, [extend]);

  const handleChange = (value) => {
    setExtendValue(value);
    const selected = extend.extension_duration.find(
      (item) => item.duration === value
    );
    if (selected) {
      setSelectedUnit(selected.unit);
      setSelectedAmount(selected.amount);
    }
  };
  const transactionCallback = (response) => {
    if (response === "USER_CANCEL") {
      navigate("/paymentfailure");
      // Add custom UI logic for user cancelation
    } else if (response === "CONCLUDED") {
      //api call for back end
      // Add custom UI logic for transaction completion
      navigate("/conclued");
    } else if (response === "FAILURE") {
      // Handle transaction failure
      alert("Transaction failed. Please try again.");
      navigate("/paymentfailure");
    }
  };
  const handleClick = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const requestBody = {
        extend_duration: extendValue,
        book_id: extend.book_id,
        gateway: gatway,

      };
      const response = await axios.post(
        `${currentDomain}/api/extend/`,
        requestBody,
        { headers }
      );
      const tokenUrl = response.data.data.payment_info.short_url;

      // window.location.href = paymentUrl;
      if (
        window &&
        window.PhonePeCheckout &&
        window.PhonePeCheckout.transact
      ) {
        window.PhonePeCheckout.transact({
          tokenUrl,
          callback: transactionCallback,
          type: "IFRAME", 
        });
      } else {
        console.error("PhonePeCheckout object is not available.");
      }
    } catch (err) {
      console.error("Payment processing failed:", err);
      setError("Failed to process payment.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="text-center tracking-wide flex-col  justify-center items-center mt-24 shadow-xl  max-w-md mx-auto bg-gray-100 rounded-xl overflow-hidden md:max-w-2xl">
      <div>
        <img
          src={logo}
          alt="locker"
          className="inline w-96"
        />
      </div>
      <div >
      <span className="p-1 font-medium uppercase tracking-wide text-sm text-indigo-800 font-semibold ">
        Extension Duration :
      </span>
      <select
        value={extendValue}
        onChange={(e) => handleChange(e.target.value)}
        className="w-44 text-center rounded-md border border-sky-400 hover:border-sky-600"
      >
        {extend &&
          extend.extension_duration.map((item, index) => (
            <option key={index} value={item.duration}>
              {item.duration}
            </option>
          ))}
      </select>

      </div>
      
      <div className="p-6">
        <div className="p-1 max-w-[calc(100%-10px)] md:max-w-[calc(28rem+10px)] mx-auto bg-white rounded-md mt-3">
          <p className="text-lg text-center font-semibold mb-4 ">
            Extension Summary
          </p>
          <p className="text-md text-start ms-5 mt-1 md:text-base">
            <span className="p-2 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
              Booked Time:
            </span>{" "}
            {extend.booked_time}
          </p>
          <p className="text-md ms-5 mt-1 text-start md:text-base">
            <span className="p-2 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
              Previous Duration:
            </span>
            {extend.booked_duration}
          </p>
          <p className="text-md ms-5 mt-1 font-bold text-start md:text-base">
            <span className="p-2 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
              Extension Duration:
            </span>{" "}
            {selectedUnit}
          </p>
          <p className="text-md ms-5 mt-1 text-start md:text-base">
            <span className="p-2 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
              New End Time:
            </span>{" "}
            {extendValue}
          </p>
          <p className="text-md ms-5 mt-1 text-start font-bold md:text-base">
            <span className="p-2 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
              Amount Due:
            </span>{" ₹"}
            {selectedAmount}
          </p>
        </div>
        <br />
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className="w-44 rounded-lg my-3 text-center p-1 text-white bg-blue-600 mb-6"
      >
        Pay with UPI
      </button>
    </div>
  );
};
