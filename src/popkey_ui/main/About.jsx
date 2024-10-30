import React from 'react';
import logoImg from '../../assets/locker.png';

const About = () => {
    return (
        <div className="about" id='about'>
            <section className="about-section  py-12 px-4 sm:px-6 lg:px-8" >
                <div className="about-content flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                    <div className="logo-img mt-8 lg:mt-0 lg:ml-8 lg:w-1/4 flex justify-center">
                        <img src={logoImg} alt="logo" className="w-2/3 sm:w-1/2 md:w-3/5 lg:w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h3 className="text-4xl text-gray-900 mb-4">ABOUT POPKEY PRIVATE LIMITED</h3>
                        <p className="text-lg text-gray-700 mb-6 text-justify">POPKEY PRIVATE LIMITED Automated Storage Keyless Lockers is a self-service that allows you to book lockers 24/7. Our facility provides storage for your bags, backpacks, and other personal items.</p>
                        <p className="text-lg text-gray-700 mb-6 text-justify">We envision a future where traditional lock and key systems are replaced by seamless, automated storage solutions that enhance security, convenience, and efficiency.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
