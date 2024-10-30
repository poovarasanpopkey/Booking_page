import React from 'react';
import heroImg from '../../assets/popout.png';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Navbar';
import About from '../main/About';
import Services from '../main/Services';
import Blog from '../main/Blog';
import Product from '../main/Product';
import Footer from '../Footer';
import Pricing from './Pricing';

const Home = () => {
    return (
        <div className="home" id='home'>
            <Navbar />
            <section className="hero-section py-12  px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="home-content flex flex-col lg:flex-row items-center lg:justify-center text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h3 className="text-4xl text-gray-900 mb-4">WELCOME TO POPKEY PRIVATE LIMITED</h3>
                        <p className="text-lg text-gray-700 mb-6">Experience the future of storage with our innovative automated smart lockers, providing a seamless, no-contact solution for all your storage needs</p>
                        <div className='button flex justify-center lg:justify-center'>
                            <a href="https://wa.me/917400500200" className="book-now-button bg-green-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-green-600">
                                <FaWhatsapp className="whatsapp-icon mr-2" />
                                <span className="text-justify">BOOK NOW</span>
                            </a>
                        </div>
                    </div>
                    <div className='hero-img mt-8 lg:mt-0 lg:ml-8 lg:w-1/6 flex justify-center'>
                        <img src={heroImg} alt="Popout" className="w-2/3 sm:w-1/2 md:w-3/5 lg:w-full h-auto" />
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Blog />
            <Product />
            <Pricing />
            <Footer />
        </div>
    );
}

export default Home;
