import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "../image/newpopkeylogo.png"



const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <footer className="animate-color-change  p-8" style={{ marginTop: '25px' }}>
            {/* Logo Image and Contact Information */}
            <div className="flex flex-col items-center md:flex-row md:items-start mb-6 text-center md:text-left">
                <img src={Logo} alt="POPKEY Logo" className="w-30 h-52 md:mr-4" /> {/* Set width to 50px */}
                <div className="mb-8 mt-6 md:mt-0">
                    <h2 className="text-3xl font-bold" id='contact'>Contact Information</h2>
                    <div className="mt-4">
                        <p className="text-xl">POPKEY PRIVATE LIMITED</p>
                        <p className="flex justify-center md:justify-start items-center mt-4"><FaMapMarkerAlt className="mr-2 text-2xl" /> Address: 43, Appadurai 1st St, Vasantha nagar, Chinna Chembarambakkam, Ayanavaram, Chennai, Tamil Nadu 600023</p>
                        <p className="flex justify-center md:justify-start items-center mt-4"><FaPhone className="mr-2" /> Phone: (+91)-7400 500 200</p>
                        <p className="flex justify-center md:justify-start items-center mt-4"><FaEnvelope className="mr-2" /> Email: contact@popkey.in</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="footer-content text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter a Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black"
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black"
                    />
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Text Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black"
                    ></textarea>
                    <div className="text-center">
                        <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">Submit</button>
                    </div>
                </form>
            </div>

            {/* Footer Links */}
            <div className="footer-links flex flex-col md:flex-row justify-center text-center space-y-4 md:space-y-0 mt-4">
                <a href="/privacy-policy" className="flex items-center justify-center hover:text-yellow-500">
                    <i className="fas fa-shield-alt mr-2"></i> <span className="pl-2">Privacy Policy</span>
                </a>
                <a href="/terms-conditions" className="flex items-center justify-center hover:text-yellow-500">
                    <i className="fas fa-list-alt mr-2"></i> <span className="pl-2">Terms & Conditions</span>
                </a>
                <a href="/prohibited-items-policy" className="flex items-center justify-center hover:text-yellow-500">
                    <i className="fas fa-list-alt mr-2"></i> <span className="pl-2">Prohibited Items Policy</span>
                </a>
                <a href="/refund-policy" className="flex items-center justify-center hover:text-yellow-500">
                    <i className="fas fa-undo-alt mr-2"></i> <span className="pl-2">Refund Policy</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
