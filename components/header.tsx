// components/Header.js

import React from 'react';

const Header = () => {
    return (
        <div className="relative bg-white min-h-screen flex flex-col items-center justify-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-white opacity-50"></div>

            {/* Header content */}
            <div className="relative text-center text-gray-800 px-6 max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                    Online Assignment Collection
                </h1>

                {/* Description */}
                <p className="text-xl mb-6 text-gray-500">
                    Welcome to the Ti Bazma High School online assignment collection website
                </p>

                {/* Action buttons */}
                <div className="flex justify-center gap-4 mb-6">
                    <button className="bg-transparent text-gray-600 border-2 border-gray-600 px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
