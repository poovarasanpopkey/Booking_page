import React from 'react';
// import UserIcon from '../../assets/UserIcon.png';
// import PageIcon from '../../assets/PageIcon.png';
// import ClockIcon from '../../assets/ClockIcon.png';
// import SecurityIcon from '../../assets/Securityicon.png';

import UserIcon from '../assets/UserIcon.png';
import PageIcon from '../assets/PageIcon.png';
import ClockIcon from '../assets/ClockIcon.png';
import SecurityIcon from '../assets/Securityicon.png'

const Services1 = () => {
    return (
        <section className="services-section" id='services'>
            <div className="service-content text-center py-12 px-4 sm:px-6 lg:px-8">
                <h3 className="mb-8">Features of POPOUTBOX</h3>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="lg:w-1/1 p-6 shadow-lg rounded-lg text-center flex flex-col items-center w-60">
                        <img src={UserIcon} alt="Self service icon" className="w-2/3 h-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
                        <h6 className="text-justify">Self service</h6>
                    </div>
                    <div className="p-6 shadow-lg rounded-lg text-center flex flex-col items-center w-60">
                        <img src={PageIcon} alt="Easy to access icon" className="w-2/3 h-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
                        <h6 className="text-justify">Easy to access</h6>
                    </div>
                    <div className="p-6 shadow-lg rounded-lg text-center flex flex-col items-center w-60">
                        <img src={ClockIcon} alt="24/7 access icon" className="w-2/3 h-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
                        <h6 className="text-justify">24/7 access</h6>
                    </div>
                    <div className="p-6 shadow-lg rounded-lg text-center flex flex-col items-center w-60">
                        <img src={SecurityIcon} alt="Completely secure icon" className="w-2/3 h-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
                        <h6 className="text-justify">Completely secure</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services1;
