import React from 'react';
import innovation from '../assets/innovation.svg';
import customization from '../assets/customization.svg';
import security from '../assets/security.svg';
import convenience from '../assets/convenience.svg';
import sustain from '../assets/sustain.png';

const Product1 = () => {
    return (
        <div className='product' id='product'>
            <div className="product-section text-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h3 className="text-3xl mb-8">Why Choose us</h3>
                <div className="product-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <img src={innovation} alt="innovation" className="w-16 h-16 mb-4 p-2" />
                        <h4 className="text-xl font-semibold mb-2 text-justify">Innovation</h4>
                        <p className="text-justify max-w-md px-4">We are committed to staying at the forefront of technology. Our lockers feature cutting-edge automation, touchless access, and user-friendly interfaces, ensuring that you have access to the latest advancements in the industry.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={security} alt="security" className="w-16 h-16 mb-4 p-2" />
                        <h4 className="text-xl font-semibold mb-2 text-justify">Security</h4>
                        <p className="text-justify max-w-md px-4">Your security is our top priority. Our lockers are built with robust materials and advanced locking mechanisms to protect your valuables and maintain your peace of mind.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={customization} alt="customization" className="w-16 h-16 mb-4 p-2" />
                        <h4 className="text-xl font-semibold mb-2 text-justify">Customization</h4>
                        <p className="text-justify max-w-md px-4">We understand that every client’s needs are unique. That’s why we offer customizable locker solutions to suit your specific requirements, whether you’re a hotel, a business, or an individual.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={convenience} alt="convenience" className="w-16 h-16 mb-4 p-2" />
                        <h4 className="text-xl font-semibold mb-2 text-justify">Convenience</h4>
                        <p className="text-justify max-w-md px-4">Say goodbye to lost keys and forgotten combinations. Our keyless entry systems make accessing your stored items as easy as a touch or a swipe.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={sustain} alt="sustainability" className="w-16 h-16 mb-4 p-2" />
                        <h4 className="text-xl font-semibold mb-2 text-justify">Sustainability</h4>
                        <p className="text-justify max-w-md px-4">We are dedicated to eco-friendly practices. Our lockers are designed with sustainability in mind, featuring energy-efficient components and materials that minimize our environmental footprint.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product1;
