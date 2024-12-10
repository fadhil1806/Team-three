import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-6">
                {/* Upper Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
                    <h2 className="text-2xl font-semibold mb-4 md:mb-0">
                        Team Tree
                    </h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="text-center pt-6">
                    <p className="text-sm">
                        &copy; 2024 Your Company. All rights reserved.
                    </p>
                    <p className="text-sm mt-2">
                        Designed with by <a href="#" className="hover:underline text-gray-400">Team Tree</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
