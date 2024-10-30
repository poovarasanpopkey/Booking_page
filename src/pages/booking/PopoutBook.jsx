import React, { useEffect, useState } from "react";
import img1 from "../../image/locker.png";
import logo from "../../image/poplogo.png";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import { TestBot } from "../redirect/TestBot";
import "./BookingPage.css";
import { detectOS } from "../../utils/detectos";
import QrGenerator from "../qr/QrGenerator";

export const PopoutBook = () => {
  const navigate = useNavigate();
  const [retrieveBookToken, setRetrieveBookToken] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedIncrementalUnit, setSelectedIncrementalUnit] = useState("");
  const [amt, setAmt] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(img1);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LocationName, setLocationName] = useState(null);
  const [os, setOs] = useState("");
  const [gatway, setGatway] = useState("");
  const [qrLink, setQrLink] = useState(null);
  const [qrLoading, setQrLoading] = useState(false);
  const [isQrModalVisible, setIsQrModalVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [storeDetails, setStoreDetails] = useState({
    locker_type_id: "",
    booking_hrs: "",
  });

  const handleQrModalClose = () => {
    setIsQrModalVisible(false);
    setQrLoading(false);
  };

  const currentDomain = window.location.origin;
  const { Token } = useParams();


  useEffect(() => {
    const detectedOS = detectOS(); // Call the imported function
    setOs(detectedOS);
  }, []);

  useEffect(() => {
    if (os) {
      const fetchBookToken = async () => {
        try {
          setIsLoading(true);
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
            setRetrieveBookToken(response.data.data.available_type_all);
            setStatus(response.status);
            setLocationName(response.data.data.location_name);
            setGatway(response.data.data.gateway);
          } else {
            setError("Failed to fetch booking data.");
            navigate("/token-expired");
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Error fetching data.");
          navigate("/token-expired");
        } finally {
          setIsLoading(false);
        }
      };

      fetchBookToken();
    }
  }, [Token, os]);

  const checkboxFunc = () => {
    setCheckbox(!checkbox);
  };

  const transactionCallback = (response) => {
    if (response === "USER_CANCEL") {
      navigate("/paymentfailure");
    } else if (response === "CONCLUDED") {
      navigate("/conclued");
    } else if (response === "FAILURE") {
      alert("Transaction failed. Please try again.");
      navigate("/paymentfailure");
    }
  };

  const handleClick = async () => {
    if (checkbox) {
      setIsButtonDisabled(true);
      if (amt == 0) {
        navigate("/bookingsuccess");
      }
      if (
        selectedIncrementalUnit === storeDetails.booking_hrs &&
        getTypeIdByDesc(selectedType) === storeDetails.locker_type_id && gatway=="razorpay"
      ) {
        window.location.href = qrLink;
        setIsButtonDisabled(false)


      }else{
        try {
          const headers = {
            "Content-Type": "application/json",
          };
          const requestBody = {
            pin: "1111",
            locker_type_id: getTypeIdByDesc(selectedType),
            booking_hrs: selectedIncrementalUnit,
            book_token: Token,
            gateway: gatway,
          };
          setStoreDetails(requestBody);
          
          const response = await axios.post(
            `${currentDomain}/api/initialBook/`,
            requestBody,
            { headers }
          );
         
          
          if (gatway == "razorpay") {
            // alert("razorpay");
            const tokenUrl = response.data.data.payment_details.short_url;
            window.location.href = tokenUrl;
            setIsButtonDisabled(false)
            setQrLink(tokenUrl);
          } else {
            // alert("phone pay");
            const tokenUrl = response.data.data.payment_details.short_url;
            if (window?.PhonePeCheckout?.transact) {
              window.PhonePeCheckout.transact({
                tokenUrl,
                callback: transactionCallback,
                type: "IFRAME",
              });
            } else {
              console.error("PhonePeCheckout object is not available.");
            }
          }
        } catch (err) {
          console.error("Error initiating booking:", err);
        }

      }
      
    } else {
      alert("Accept the terms and conditions to proceed.");
    }
  };

  const handleQrClick = async () => {
    if (!checkbox) {
      alert("Accept the terms and conditions to proceed.");
      return;
    }

    if (isButtonDisabled) {
      alert("Unable to access. Button is disabled.");
      return;
    }

    setQrLoading(true);
    try {
      if (
        selectedIncrementalUnit === storeDetails.booking_hrs &&
        getTypeIdByDesc(selectedType) === storeDetails.locker_type_id
      ) {
        setQrLink(qrLink);
        setIsQrModalVisible(true);
      } else {
        const requestBody = {
          pin: "1111",
          locker_type_id: getTypeIdByDesc(selectedType),
          booking_hrs: selectedIncrementalUnit,
          book_token: Token,
          gateway: gatway,
        };

        setStoreDetails(requestBody);

        const headers = {
          "Content-Type": "application/json",
        };
        const response = await axios.post(
          `${currentDomain}/api/initialBook/`,
          requestBody,
          { headers }
        );

        const tokenUrl = response.data.data.payment_details.short_url;
        setQrLink(tokenUrl);
        setIsQrModalVisible(true);
      }
    } catch (err) {
      console.error("Error initiating booking:", err);
      alert("There was an error processing your booking. Please try again.");
    } finally {
      setQrLoading(false);
    }
  };

  const getTypeIdByDesc = (desc) => {
    const lockerType = retrieveBookToken.find(
      (type) => type.type_desc === desc
    );
    return lockerType ? lockerType.lkr_type_id : "";
  };

  const handleTypeChange = (event) => {
    const typeDesc = event.target.value;
    setSelectedType(typeDesc);

    const selectedTypeData = retrieveBookToken.find(
      (type) => type.type_desc === typeDesc
    );

    if (selectedTypeData && selectedTypeData.incremental_units.length > 0) {
      setSelectedIncrementalUnit(selectedTypeData.incremental_units[0].unit);
      setAmt(selectedTypeData.incremental_units[0].amount);
    }

    setSelectedImageUrl(selectedTypeData ? selectedTypeData.image_url : img1);
  };

  const handleIncrementalUnitChange = (event) => {
    setSelectedIncrementalUnit(event.target.value);
  };

  useEffect(() => {
    if (retrieveBookToken.length > 0) {
      const defaultType = retrieveBookToken.find(
        (type) => type.type_desc === "Small"
      );

      const initialType = defaultType
        ? defaultType.type_desc
        : retrieveBookToken[0].type_desc;

      setSelectedType(initialType);

      const selectedTypeData = retrieveBookToken.find(
        (type) => type.type_desc === initialType
      );

      if (selectedTypeData && selectedTypeData.incremental_units.length > 0) {
        setSelectedIncrementalUnit(selectedTypeData.incremental_units[0].unit);
        setAmt(selectedTypeData.incremental_units[0].amount);
      }

      setSelectedImageUrl(selectedTypeData ? selectedTypeData.image_url : img1);
    }
  }, [retrieveBookToken]);

  useEffect(() => {
    const selectedTypeData = retrieveBookToken.find(
      (type) => type.type_desc === selectedType
    );
    if (selectedTypeData) {
      const unit = selectedTypeData.incremental_units.find(
        (unit) => unit.unit === selectedIncrementalUnit
      );
      setAmt(unit ? unit.amount : "");
    }
  }, [selectedType, selectedIncrementalUnit, retrieveBookToken]);

  const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {status === 200 ? (
        <div className="flex flex-col items-center justify-center  p-1">
          <div className="container max-w-md bg-white shadow-lg rounded-3xl p-6 space-y-3 border border-gray-200">
            <div className="text-center">
              <img src={logo} alt="Logo" className="w-64 mx-auto " />
            </div>
            <div className="text-center">
              {selectedImageUrl && (
                <img
                  src={selectedImageUrl}
                  alt="Locker"
                  className="w-48 mx-auto mb-1 rounded-lg shadow-md border-2 border-indigo-200"
                />
              )}
            </div>
            <p className="text-xl font-bold text-gray-800 text-center">
              {LocationName}
            </p>

            <div className="flex flex-col space-y-5">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-700">
                  Locker Size:{" "}
                </label>
                <select
                  className="block w-44 bg-indigo-50 border  border-gray-300 rounded-lg py-1 px-4 transition duration-200 ease-in-out hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  {retrieveBookToken.map((d, i) => (
                    <option key={i} value={d.type_desc}>
                      {d.type_desc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-700">
                  {" "}
                  Duration:{" "}
                </label>
                <select
                  className="block w-44 bg-indigo-50 border border-gray-300 rounded-lg py-1 px-4 transition duration-200 ease-in-out hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedIncrementalUnit}
                  onChange={handleIncrementalUnitChange}
                >
                  {retrieveBookToken
                    .find((type) => type.type_desc === selectedType)
                    ?.incremental_units.map((unit) => (
                      <option key={unit.amount} value={unit.unit}>
                        {unit.unit}
                      </option>
                    ))}
                </select>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-700">
                  Total Amount:
                </label>
                <span className="text-xl font-bold text-indigo-800">
                  ₹ {amt}
                </span>
              </div>
              <hr />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                onChange={checkboxFunc}
                checked={checkbox}
                style={{ transform: "scale(1.8)", marginRight: "10px" }} // Increase size here
                className={`custom-checkbox ${checkbox ? "checked" : ""}`} // Add custom class
              />
              <label
                htmlFor="terms"
                className={`text-sm font-medium ${
                  checkbox ? "text-gray-800" : "text-red-500"
                }`}
              >
                I agree to the{" "}
                <a
                  href="https://popoutbox.in/terms_conditions"
                  className="text-indigo-600 hover:underline"
                >
                  Terms and Conditions
                </a>
                ,{" "}
                <a
                  href="https://popoutbox.in/privacy_policy"
                  className="text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </a>
                ,{" "}
                <a
                  href="https://popoutbox.in/prohibited-items_policy"
                  className="text-indigo-600 hover:underline"
                >
                  Prohibited Items Policy
                </a>
                , and{" "}
                <a
                  href="https://popoutbox.in/refund_policy"
                  className="text-indigo-600 hover:underline"
                >
                  Refund Policy
                </a>
              </label>
            </div>
            <div className="flex space-x-4">
              <button
                className={`flex-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg ${
                  checkbox
                    ? !qrLoading
                      ? isQrModalVisible
                        ? "text-black-600 bg-slate-400"
                        : "text-white bg-blue-600"
                      : "text-black-600 bg-slate-400"
                    : "text-black-600 bg-slate-400"
                }`}
                disabled={isButtonDisabled}
                onClick={handleClick}
              >
                {amt === 0 ? "BOOK NOW" : isButtonDisabled ? "Processing..." : "PAY NOW"}
              </button>

              {gatway === "razorpay" && amt !== 0 ? (
                <button
                  onClick={handleQrClick}
                  className={`flex-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg ${
                    checkbox
                      ? !qrLoading
                        ? isQrModalVisible
                          ? "text-black-600 bg-slate-400"
                          : isButtonDisabled
                          ? "text-black-600 bg-slate-400"
                          : "text-white bg-blue-600"
                        : "text-black-600 bg-blue-500"
                      : "text-black-600 bg-slate-400"
                  }`}
                >
                  {qrLoading ? "Processing..." : "QR Code"}
                </button>
              ) : null}

              {/* Render the QR generator modal */}
              {isQrModalVisible && qrLink && (
                <QrGenerator paymentLink={qrLink} onClose={handleQrModalClose} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <TestBot />
      )}
    </>
  );
};
