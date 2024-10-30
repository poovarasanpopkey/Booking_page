import React, { useState, useEffect } from "react";
import axios from "axios";
import PopkeyIcon from "../../image/poplogo.png";
import { useParams } from "react-router-dom";

const PopoutInvoice = () => {
  const params = useParams("");
  const Token = params.Token;
  const currentDomain = window.location.origin;  // Extract the domain name


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${currentDomain}/api/retriveInvoice/${Token}/`;

        const response = await axios.get(url);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response) {
          if (error.response.status >= 500) {
            setError(
              "Server is currently unavailable. Please try again later."
            );
          } else if (error.response.status === 404) {
            setError(
              "Invoice not found. Please check the Token and try again."
            );
          } else if (error.response.status === 401) {
            setError("Unauthorized access. Please log in and try again.");
          } else {
            setError(`page not found `);
          }
        } else if (error.request) {
          setError(
            "Unable to connect to the server. Please check your network connection."
          );
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [Token]);
  if (loading)
    return (
      <div className="fixed inset-0 bg-orange-300 flex items-center justify-center">
        <div className="p-6 border rounded-lg bg-red-200 border-red-300 text-red-700 text-sm shadow-md w-96 h-32 max-w-full">
          <strong className="block font-semibold text-red-800 text-xl">
            Loading...
          </strong>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="fixed inset-0 bg-white-400 flex items-center justify-center">
        <div className="p-6 border mb-80   shadow-lg w-96 h-auto max-w-full flex flex-col items-center  text-center">
          <p className="text-2xl">{error}</p>
        </div>
      </div>
    );
  return (
    <div className="max-w-4xl mx-auto bg-white p-3 rounded-xl shadow-lg outline outline-2 outline-gray-300 sm:p-6 sm:text-sm xs:p-4 xs:text-xs">
      <img
        src={PopkeyIcon}
        alt="Popkey Logo"
        className="mx-auto w-60 h-25 mb-6 sm:w-56 sm:h-30 xs:w-32 xs:h-24"
      />
      <h1 className="text-2xl font-bold text-center mb-5 sm:text-xl xs:text-lg">
        INVOICE
      </h1>
      <div className="mb-5">
        <p className="text-m sm:text-base xs:text-xs">POPKEY Private Limited</p>
        <p className="text-s sm:text-base xs:text-xs">
          <strong>CONTACT NO.: </strong>(+91) {data.phone_number}
        </p>
        <p className="text-l font-semibold mt-4 sm:text-lg xs:text-sm">
          BILL TO:
        </p>
      </div>
      <div className="flex flex-wrap  mb-5 gap-4 sm:gap-4 xs:gap-2">
        <div className="flex-1 px-1 sm:px-1 xs:px-1">
          <p className="text-sm xs:text-xs mb-1">
            <strong>LOCKER NO.: </strong>
            {data.locker_no}
          </p>
          <p className="text-sm xs:text-xs mb-1">
            <strong>INVOICE ID:</strong> {data.invoice_id}
          </p>
          <p className="text-sm xs:text-xs mb-1">
            <strong>PHONE NUMBER: </strong>
            {data.phone_number}
          </p>
          <p className="text-sm xs:text-xs mb-1">
            <strong>INVOICE TIME: </strong>
            {data.invoice_dt}
          </p>
        </div>
        <div className="flex-1 px-1 sm:px-1 xs:px-1">
          <p className="text-sm xs:text-xs mb-1">
            <strong>LOCATION:</strong> {data.location}
          </p>
          <p className="text-sm xs:text-xs mb-1">
            <strong>START TIME:</strong> {data.booking_start_dt}
          </p>
          <p className="text-sm xs:text-xs mb-1">
            <strong>END TIME:</strong> {data.booking_end_dt}
          </p>
        </div>
      </div>
      <div className="mt-6 ">
        <table className="w-full border-separate border-spacing-0 border border-gray-900">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="border border-gray-900 px-4 py-2 text-left text-xs sm:text-sm">
                Description
              </th>
              <th className="border border-gray-900 px-4 py-2 text-left text-xs sm:text-sm">
                Others
              </th>
              <th className="border border-gray-900 px-4 py-2 text-left text-xs sm:text-sm">
                Duration
              </th>
              <th className="border border-gray-900 px-4 py-2 text-left text-xs sm:text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                Locker Rent
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                -
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                {data.duration}
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                {data.base_amount}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs"></td>
              <td className="border border-gray-900 px-4 py-2 font-bold text-xs xs:text-xs">
                CGST 9%
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                -
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                {data.cgst_amount}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs"></td>
              <td className="border border-gray-900 px-4 py-2 font-bold text-xs xs:text-xs">
                SGST 9%
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                -
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs">
                {data.sgst_amount}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs"></td>
              <td className="border border-gray-900 px-4 py-2 font-bold text-sm xs:text-xs">
                TOTAL AMOUNT
              </td>
              <td className="border border-gray-900 px-4 py-2 text-sm xs:text-xs"></td>
              <td className="border border-gray-900 px-4 py-2 font-bold text-sm xs:text-xs">
                {data.total_amount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center text-gray-600 text-sm xs:text-xs">
        <p>THANK YOU FOR YOUR TRUST!</p>
        <p>
          ***This is a computer-generated invoice, no signature required.***
        </p>
      </div>
    </div>
  );
};
export default PopoutInvoice;
