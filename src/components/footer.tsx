import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-row items-center justify-between px-10 py-6 bg-neutral-950 text-zinc-50">
            <p className="text-sm font-montserrat tracking-tight">
                &copy; {new Date().getFullYear()} HotAff. All rights reserved.
            </p>
            <div className="flex flex-row items-center gap-6">
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-150 text-4xl"
                >
                    <IoLogoLinkedin />
                </a>
                <a
                    href="https://t.me/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-150 text-4xl"
                >
                    <FaTelegram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
