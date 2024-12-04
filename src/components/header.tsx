import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="flex items-center justify-between px-10 py-4">
            <Link to={"/"}>
                <span className="font-montserrat text-4xl text-white font-bold tracking-tight shadow-md">
                    <span className="text-blue-500">Hot</span>Aff
                </span>
            </Link>
            <button
                onClick={toggleMenu}
                className="sm:hidden text-white text-3xl"
            >
                ☰
            </button>
            <div
                className={`fixed inset-0 bg-black bg-opacity-70 z-50 transition-all duration-300 ${
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu}
            >
                <nav
                    className={`flex flex-col items-center justify-center h-full text-white text-xl space-y-6 transition-all duration-300 transform ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()} // Чтобы клик по меню не закрывал его
                >
                    <Link to={"/"} onClick={closeMenu}>
                        <span className="hover:text-blue-500">Home</span>
                    </Link>
                    <Link to={"/about"} onClick={closeMenu}>
                        <span className="hover:text-blue-500">About Us</span>
                    </Link>
                    <Link to={"/advertisers"} onClick={closeMenu}>
                        <span className="hover:text-blue-500">Advertisers</span>
                    </Link>
                    <Link to={"/publishers"} onClick={closeMenu}>
                        <span className="hover:text-blue-500">Publishers</span>
                    </Link>
                    <Link to="/contact" onClick={closeMenu}>
                        <button className="bg-blue-500 py-2 px-10 text-white rounded-md transition-all duration-150 hover:bg-blue-600">
                            Contact Us
                        </button>
                    </Link>
                </nav>
            </div>
            <nav className="sm:flex hidden">
                <ul className="flex flex-row items-center justify-between gap-8">
                    <Link to={"/"}>
                        <li className="text-base text-zinc-50 font-montserrat tracking-tight hover:text-blue-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            Home
                        </li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="text-base text-zinc-50 font-montserrat tracking-tight hover:text-blue-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            About Us
                        </li>
                    </Link>
                    <Link to={"/advertisers"}>
                        <li className="text-base text-zinc-50 font-montserrat tracking-tight hover:text-blue-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            Advertisers
                        </li>
                    </Link>
                    <Link to={"/publishers"}>
                        <li className="text-base text-zinc-50 font-montserrat tracking-tight hover:text-blue-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            Publishers
                        </li>
                    </Link>
                    <Link to="/contact">
                        <button className="text-base py-2 px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                            Contact Us
                        </button>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
