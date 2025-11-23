import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Navbar() {
    const [navLinks, setNavLinks] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:3000/navLinks')
        .then(response => {
            setNavLinks(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the nav links!', error);
        });
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
            <Link to="/" className="flex items-center gap-3">
            <img
                src="/assets/logo_cartaAI.jpg"
                alt="Logo Brand"
                className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-primary dark:text-white text-2xl font-bold tracking-tight">
                cartaAI
            </h2>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <Link
                key={link.to}
                className={`${
                    location.pathname === link.to
                    ? "text-blue-600 dark:text-indigo-400"
                    : "text-secondary dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400"
                } text-sm font-medium transition-colors`}
                to={link.to}
                >
                {link.text}
                </Link>
            ))}
            </div>

            {/* Auth buttons for Desktop */}
            <div className="hidden items-center gap-3 md:flex">
            {/* Dark Mode Toggle */}
            <button
                // onClick={}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {/* <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">
                {darkMode ? "light_mode" : "dark_mode"}
                </span> */}
            </button>

            {/* User profile(auth) */}
            {/* {userProfile?.subscription_status === "premium" && (
                <Link
                to="/premium-generator"
                className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all duration-300 transform hover:scale-105"
                >
                Premium Generator
                </Link>
            )}
            {session ? (
                <Link
                to="/profile"
                className="bg-linear-to-r from-indigo-500 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 rounded-lg px-4 py-2 text-sm font-bold"
                >
                Profil
                </Link>
            ) : (
                <>
                <Link
                    to="/login"
                    className="bg-linear-to-r from-indigo-500 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 rounded-lg px-4 py-2 text-sm font-bold shadow-none hover:shadow-none"
                >
                    Masuk
                </Link>
                <Link
                    to="/register"
                    className="bg-linear-to-r from-indigo-500 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 rounded-lg px-4 py-2 text-sm font-bold shadow-none hover:shadow-none"
                >
                    Daftar
                </Link>
                </>
            )} */}
            </div>
        </nav>
        </header>
    );
}

export default Navbar;
