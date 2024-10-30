import React from 'react';
import { Modal } from 'antd'; // Ant Design for modal
import QRCode from 'react-qr-code';
import PropTypes from 'prop-types';
import logo from "../../image/popkeyofficial.png"; // Your company logo

function QrGenerator({ paymentLink, onClose }) {
  return (
    <Modal
      title={null} // Remove default title
      open={true} // Always open when this component is rendered
      onCancel={onClose} // Call the onClose function to close the modal
      footer={null} // Custom footer instead of default one
      className="text-center font-serif" // Center content in the modal, use a more professional font
      Style={{ overflow: 'hidden', padding: 0 }} // Prevent scrolling
    >
      {/* Modal content */}
      <div className="text-center overflow-hidden"> {/* Prevent content overflow */}
        {/* Your logo at the top */}
        <img 
          src={logo} 
          alt="popkey Logo" 
          className="mx-auto mb-1 w-48" // Centered and set width for the logo
        />
        <h2 className="mb-2 font-semibold text-lg font-sans">Scan & Pay</h2> {/* Bold text and larger font */}

        <div className="flex justify-center items-center mb-1">
          {/* Center the QR code */}
          {paymentLink ? (
            <QRCode value={paymentLink} size={220} />
          ) : (
            <p className="font-semibold font-sans">No QR code available</p> 
          )}
        </div>

        {/* Payment method icons */}
        <div className="flex justify-center gap-4 mb-6">
          {/* GPay Icon */}
          <img 
            src="https://img.icons8.com/color/48/google-pay.png" 
            alt="GPay Icon" 
            className="w-8 h-8" // Adjust GPay icon size
          />
          {/* Paytm Icon */}
          <img 
            src="https://img.icons8.com/color/48/paytm.png" 
            alt="Paytm Icon" 
            className="w-10 h-8" // Adjust Paytm icon size
          />
          {/* PhonePe Icon */}
          <img 
            src="https://img.icons8.com/color/48/phone-pe.png" 
            alt="PhonePe Icon" 
            className="w-8 h-8" // Adjust PhonePe icon size
          />
          
        </div>

        {/* Footer with Razorpay online payment symbol and text */}
        <div className="text-center">
          <p className="font-semibold text-sm mb-1">Powered by</p>
          <img 
            src="https://cdn.razorpay.com/logo.svg" 
            alt="Razorpay Online Payment" 
            className="mx-auto mb-1 w-24" // Adjust Razorpay logo size
          />
          <p className="antialiased font-sans font-semibold">POPKEY PRIVATE LIMITED</p> {/* Bold footer text */}
        </div>
      </div>
    </Modal>
  );
}

// Prop types for the component
QrGenerator.propTypes = {
  paymentLink: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired, // Expecting a function to close the modal
};

export default QrGenerator;
