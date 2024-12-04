import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <motion.div
            className="flex items-center flex-col min-h-screen my-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex flex-col items-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-6 sm:px-10 py-10 w-full sm:w-11/12 gap-16 sm:gap-28"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-raleway text-center">
                    Contact Us
                </h1>
                <p className="tracking-tight font-montserrat text-lg sm:text-xl leading-8 text-center w-full sm:w-10/12 mt-4">
                    Get in touch with us for any inquiries or assistance.
                </p>
                <div className="flex flex-col items-start w-full mt-10">
                    <h2 className="text-5xl sm:text-6xl font-bold tracking-normal font-raleway shadow-lg text-center sm:text-left">
                        Contact Information
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0 mx-auto sm:mx-0" />
                    <ul className="list-disc ml-5 text-lg font-montserrat text-center sm:text-left">
                        <li className="my-2">
                            Email:{" "}
                            <a
                                href="mailto:manager.hotaff@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                manager.hotaff@gmail.com
                            </a>
                        </li>
                        <li className="my-2">
                            Email:{" "}
                            <a
                                href="mailto:Arsen.hotaff@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                Arsen.hotaff@gmail.com
                            </a>
                        </li>
                        <li className="my-2">
                            Skype:{" "}
                            <span className="text-blue-400 hover:underline">
                                live:.cid.881476c2ad53eec8
                            </span>
                        </li>
                        <li className="my-2">
                            Telegram:{" "}
                            <a
                                href="https://t.me/HotAff1"
                                className="text-blue-400 hover:underline"
                            >
                                @HotAff1
                            </a>
                        </li>
                        <li className="my-2">
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/arsenii-yushchak"
                                className="text-blue-400 hover:underline"
                            >
                                Arsenii Yushchak
                            </a>
                        </li>
                        <li className="my-2">
                            Phone number:{" "}
                            <span className="text-blue-400 hover:underline">
                                +48793301875
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-5xl sm:text-6xl font-bold tracking-normal font-raleway shadow-lg mt-10 text-center">
                        We're Here to Help!
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0 mx-auto sm:mx-0" />
                    <p className="text-xl sm:text-3xl font-raleway font-bold tracking-tight text-center mb-6">
                        Reach out to us anytime, and we'll get back to you as
                        soon as possible!
                    </p>
                    <button className="text-lg sm:text-xl py-2 px-8 sm:px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                        <a href="https://t.me/HotAff1">Send a Message</a>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactPage;
