"use client";
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home'); // Track active menu

    const menuItems = [
        { name: 'Home', href: '#', key: 'home' },
        { name: 'About', href: '#about', key: 'about' },
        { name: 'Services', href: '#', key: 'services' },
        { name: 'Pricing', href: '#', key: 'pricing' },
        { name: 'Contact', href: '#', key: 'contact' },
    ];

    return (
        <nav className="backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-all">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative">
                <a href="https://github.com/dksaddy" className="flex items-center gap-3">
                    <img src="./busy.gif" className="h-10 w-10 rounded-full border-2 border-blue-500 shadow" alt="Mohiuddin Mohammad Sadik_Software Engineer" />
                    <span className="text-2xl font-bold tracking-tight text-gray-800 hover:text-blue-600 transition-colors">Mohiuddin Sadik</span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
                <div
                    className={`
                        ${menuOpen ? 'block' : 'hidden'}
                        w-full
                        md:block md:w-auto
                        absolute left-0 top-[64px] md:static
                        bg-white md:bg-transparent
                        shadow-lg md:shadow-none
                        transition-all duration-300
                        z-50
                    `}
                >
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center bg-white/90 md:bg-transparent rounded-lg md:rounded-none shadow md:shadow-none p-4 md:p-0 border md:border-0 border-gray-100">
                        {menuItems.map(item => (
                            <li key={item.key}>
                                <a
                                    href={item.href}
                                    className={`relative block w-full py-3 px-4 rounded-lg text-lg font-medium text-gray-700 transition-all
                                        ${active === item.key
                                            ? 'italic text-blue-600 after:w-[80%]'
                                            : 'hover:text-blue-600'}
                                        after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-[3px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300
                                        ${active === item.key ? 'after:w-[80%]' : 'after:w-0'}
                                        hover:after:w-[80%] md:hover:bg-transparent md:hover:text-blue-600
                                    `}
                                    onClick={() => {
                                        setActive(item.key);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}
            </div>
        </nav>
    );
}