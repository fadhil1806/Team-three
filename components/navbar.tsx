'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ModeToggle from './toggle';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and desktop menu */}
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <div className="text-white text-lg font-bold tracking-wide">
                                    Team-Three
                                </div>
                            </Link>
                        </div>
                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-12">
                                <Link href="/" className="text-sm font-medium text-white hover:text-gray-300">
                                    Home
                                </Link>
                                <Link href="/#about" className="text-sm font-medium text-gray-300 hover:text-white">
                                    About
                                </Link>
                                <Link href="/form/create" className="text-sm font-medium text-gray-300 hover:text-white">
                                    Form
                                </Link>
                                <Link href="/#team" className="text-sm font-medium text-gray-300 hover:text-white">
                                    Team
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Theme toggle */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <ModeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <Link href="/" className="block text-base font-medium text-white hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/#about" className="block text-base font-medium text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="/form/create" className="block text-base font-medium text-gray-300 hover:text-white">
                        Form
                    </Link>
                    <Link href="/#team" className="block text-base font-medium text-gray-300 hover:text-white">
                        Team
                    </Link>
                </div>
            </div>
        </nav>
    );
}
