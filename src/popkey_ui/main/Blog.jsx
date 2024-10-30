import React from 'react';
import locker from '../../assets/scan.png.jpeg';
import number from '../../assets/mesaage.png';
import pin from '../../assets/amount.png';
import payment from '../../assets/pay.png';
import booking from '../../assets/booking.png';
import phonescreen from '../../assets/phonescreen.png'; // Add the phone screen image

const Blog = () => {
    return (
        <div className='blog_section' id='blog'>
            <div className="blog-content text-center py-12 px-4 sm:px-6 lg:px-8">
                <h3 className="mb-8 text-center w-full">HOW IT WORKS</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="p-4 shadow-md rounded-md text-center flex flex-col items-center w-48">
                        <h6 className="mb-2 text-justify">STEP 1</h6>
                        <div className="phone-screen" style={{ backgroundImage: `url(${phonescreen})` }}>
                            <img src={locker} alt="icon" className="locker-image" />
                        </div>
                    </div>
                    <div className="p-4 shadow-md rounded-md text-center flex flex-col items-center w-48">
                        <h6 className="mb-2 text-justify">STEP 2</h6>
                        <div className="phone-screen" style={{ backgroundImage: `url(${phonescreen})` }}>
                            <img src={number} alt="icon" className="locker-image" />
                        </div>
                    </div>
                    <div className="p-4 shadow-md rounded-md text-center flex flex-col items-center w-48">
                        <h6 className="mb-2 text-justify">STEP 3</h6>
                        <div className="phone-screen" style={{ backgroundImage: `url(${phonescreen})` }}>
                            <img src={pin} alt="icon" className="locker-image" />
                        </div>
                    </div>
                    <div className="p-4 shadow-md rounded-md text-center flex flex-col items-center w-48">
                        <h6 className="mb-2 text-justify">STEP 4</h6>
                        <div className="phone-screen" style={{ backgroundImage: `url(${phonescreen})` }}>
                            <img src={payment} alt="icon" className="locker-image" />
                        </div>
                    </div>
                    <div className="p-4 shadow-md rounded-md text-center flex flex-col items-center w-48">
                        <h6 className="mb-2 text-justify">STEP 5</h6>
                        <div className="phone-screen" style={{ backgroundImage: `url(${phonescreen})` }}>
                            <img src={booking} alt="icon" className="locker-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
