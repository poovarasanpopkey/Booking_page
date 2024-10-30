import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../image/popkeyofficial.png"
import { detectOS } from "../../utils/detectos";


export const ReleaseBook = () => {
  const [release, setRelease] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [os, setOs] = useState("");
  
  const currentDomain = window.location.origin;  // Extract the domain name


  const navigate = useNavigate();

  const params =useParams()
  const Token=params.Token

  useEffect(() => {
    const detectedOS = detectOS(); // Call the imported function
    setOs(detectedOS);
  }, []);


  useEffect(() => {
    if(os){
      const fetchReleaseData = async () => {
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
            setRelease(response.data.data);
          } else {
            navigate("/token-expired"); // Navigate to /redirect if status is not 200
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Failed to load data.");
          navigate("/token-expired"); // Navigate to /redirect if there's an error
        } finally {
          setLoading(false);
        }
      };
  
      fetchReleaseData();
    }
    
  }, [navigate,os]);



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


  const handleClick = () => {
    if (release && release.payment_details && release.payment_details.short_url) {
      const tokenUrl  = release.payment_details.short_url
      // window.location.href = release.payment_details.short_url;
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
    } else {
      console.error("Payment URL not found.");
      setError("Payment URL not found.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="text-center flex-col justify-center items-center mt-12">
      <img
        src={logo}
        alt="locker"
        style={{ height: "100px", width: "350px" }}
        className="inline"
      />
      <div className="pl-3 max-w-[calc(100%-10px)] md:max-w-[calc(28rem+10px)] mx-auto bg-white rounded-md mt-2">
        <p className="text-lg text-center font-semibold mb-4 text-indigo-800 mr-5">
          Balance Payment
        </p>
        <p className="text-md text-start ms-5 mt-1 md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Locker No:
          </span>{" "}
          {release?.locker_no}
        </p>
        <p className="text-md ms-5 mt-1 text-start md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Start Time:
          </span>{" "}
          {release?.start_time}
        </p>
        <p className="text-md ms-5 mt-1 text-start md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            End Time:
          </span>{" "}
          {release?.estimated_end_time}
        </p>
        <p className="text-md ms-5 mt-1 text-start md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Booked Duration:
          </span>{" "}
          {release?.booked_duration}
        </p>
        <p className="text-md ms-5 mt-1 text-start font-bold  md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Used Duration:
          </span>{" "}
          {release?.duration}
        </p>
        <p className="text-md text-start ms-5 mt-1 md:text-base">
          <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Advance Amount:
          </span>{" "}
          ₹ {release?.advance_amount}
        </p>
        <p className="text-md ms-5 mt-1 text-start font-bold md:text-base pb-5">
        <span className="p-3 font-medium uppercase tracking-wide text-sm font-semibold text-indigo-800">
            Balance Amount:
          </span>{" "}
          ₹ {release?.balance_amount}
        </p>
        <button
          type="submit"
          onClick={handleClick}
          className="w-44 rounded-lg my-3 text-center p-1 text-white bg-blue-600 mr-5"
        >
          Pay with UPI
        </button>
      </div>
    </div>
  );
};
