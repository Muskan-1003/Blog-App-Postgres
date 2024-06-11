import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#96B6C5] text-black py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start mb-8">
                    {/* Brand Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-bold">Pen&Pixel</h2>
                        <p className="text-clack mt-2">
                            Your go-to platform for insightful blogs across various topics.
                        </p>
                    </div>
                    
                    
                    
                    {/* Contact Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-md font-semibold mb-2">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>Email: <a href="mailto:info@penandpixel.com" className="hover:text-gray-400">info@penandpixel.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+123 456 7890</a></li>
                            <li>Address: 123 Blog Street, Writing City, 45678</li>
                        </ul>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
                    {/* Social Media Section */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook /></a>
                        <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
                        <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
                        <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedin /></a>
                    </div>
                    
                    <div className="text-center w-full md:w-auto mt-4 md:mt-0">
                        <p>&copy; {new Date().getFullYear()} Pen and Pixel. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
