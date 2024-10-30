import React, { Component } from 'react';
import Logo from '../assets/logo.png';

class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false // Set initial state to false
        };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        this.setState(prevState => ({
            mobileMenuOpen: !prevState.mobileMenuOpen
        }));
    }

    render() {
        return (
            <nav className="bg-gray-900 text-white p-8 flex items-center justify-center  md:justify-between   ">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 mr-2" />
                </div>

                <ul className={`flex flex-col md:flex-row md:items-center absolute md:static bg-gray-900 w-full md:w-auto transition-transform transform ${this.state.mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
                    <li className="mx-2 my-2 md:my-0"><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li className="mx-2 my-2 md:my-0"><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li className="mx-2 my-2 md:my-0"><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>

                <div id="menu" onClick={this.toggleMobileMenu} className="text-2xl cursor-pointer md:hidden">
                    <i id='bar' className={this.state.mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        );
    }
}

export default Navbar1;
