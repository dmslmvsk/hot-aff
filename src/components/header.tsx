import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between px-10 py-4">
            <Link to={"/"}>
                <span className="font-montserrat text-4xl text-white font-bold tracking-tight shadow-md">
                    <span className="text-blue-500">Hot</span>Aff
                </span>
            </Link>

            <nav>
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
