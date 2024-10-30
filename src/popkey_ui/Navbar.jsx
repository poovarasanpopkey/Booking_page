import React, { Component } from 'react';
import Logo from "../image/popkeyofficial.png"

class Navbar extends Component {
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
      // <nav className="flex justify-center bg-gray-900 text-white p-4 md:justify-between">
      <nav className="flex justify-center       animate-color-change        text-white p-4 md:justify-between">

        <div className=" md:flex items-center ml-0">
          <img src={Logo} alt="Logo" className="h-30 w-96 mr-2" />
        </div>
        <div className={'hidden md:flex flex-row  items-center '}>
          <ul className={'hidden md:flex flex-row  items-center '}>
            <li className="mx-2 my-2 md:my-0 text-blue-900"><a href="/" className="hover:text-gray-900">Home</a></li>
            <li className="mx-2 my-2 md:my-0 text-blue-900"><a href="#about" className="hover:text-gray-900">About us</a></li>
            <li className="mx-2 my-2 md:my-0 text-blue-900"><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div id="menu" onClick={this.toggleMobileMenu} className="text-2xl cursor-pointer md:hidden">
          <i id='bar' className={this.state.mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
