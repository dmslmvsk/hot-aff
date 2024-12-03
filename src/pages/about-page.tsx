import { motion } from "framer-motion";
import {
    IoHeartSharp,
    IoPeopleSharp,
    IoTimeSharp,
    IoShieldCheckmarkSharp,
    IoFlashOutline,
} from "react-icons/io5";

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center flex-col min-h-screen my-20"
        >
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-10 pt-10 pb-10 w-11/12 gap-28"
            >
                <div className="flex flex-col items-center gap-16">
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <h1 className="text-7xl font-bold tracking-tight font-raleway w-2/3">
                                Loyalty
                                <br />
                                <span className="text-blue-500">fuels</span>
                                <IoFlashOutline className="inline-block w-16" />
                                <br />
                                success
                            </h1>
                        </div>
                        <div className="w-1/2">
                            <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                                <span className=" text-3xl font-bold">
                                    <span className="text-blue-500">Hot</span>
                                    Aff
                                </span>{" "}
                                is a young and ambitious company that is
                                reshaping the digital advertising landscape.
                                Guided by loyalty and innovation, we are
                                dedicated to achieving success for advertisers
                                and publishers alike through cutting-edge
                                solutions and seamless collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full gap-8">
                        <div className="w-1/3">
                            <img
                                src="/images/people.jpg"
                                className="rounded-md shadow-lg w-full"
                            />
                        </div>
                        <div className="w-1/3">
                            <img
                                src="/images/office.jpg"
                                className="rounded-md shadow-lg w-full"
                            />
                        </div>
                        <div className="w-1/3">
                            <img
                                src="/images/table.jpg"
                                className="rounded-md shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg">
                        Our Story
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="flex flex-col gap-16 mt-16">
                        <div className="flex flex-row justify-between items-start">
                            <p className="tracking-tight font-montserrat text-lg leading-8 w-7/12">
                                At HotAff, we are driven by a mission to
                                revolutionize digital performance marketing.
                                Starting as a focused affiliate network, we aim
                                to expand into a comprehensive ecosystem
                                offering lead generation, tracking tools, and
                                contextual advertising services. By embracing
                                innovation, we connect advertisers and
                                publishers with profitable opportunities.
                            </p>

                            <img
                                src="/images/teamwork.jpg"
                                className="rounded-md shadow-lg w-96"
                            />
                        </div>
                        <div className="flex flex-row justify-between items-start">
                            <p className="tracking-tight font-montserrat text-lg leading-8 w-7/12">
                                The digital age demands creativity and
                                adaptability. We strive to stay ahead of these
                                trends by fostering collaboration and delivering
                                exceptional results. Whether it’s through
                                engaging campaigns or cutting-edge technology,
                                HotAff is dedicated to shaping the future of
                                advertising.
                            </p>

                            <img
                                src="/images/laptop.jpg"
                                className="rounded-md shadow-lg w-96 "
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center">
                    <div className="text-start w-full">
                        <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg">
                            Our Core Values
                        </h2>
                        <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8">
                        <div className="flex flex-col items-center text-center gap-4">
                            <IoHeartSharp className="text-blue-500 text-6xl" />
                            <h3 className="text-xl font-bold font-raleway">
                                Loyalty
                            </h3>
                            <p className="text-sm font-montserrat leading-6">
                                Building trust and long-lasting relationships
                                with all partners.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <IoTimeSharp className="text-blue-500 text-6xl" />
                            <h3 className="text-xl font-bold font-raleway">
                                Timely Payments
                            </h3>
                            <p className="text-sm font-montserrat leading-6">
                                Ensuring prompt and transparent transactions
                                with our clients.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <IoShieldCheckmarkSharp className="text-blue-500 text-6xl" />
                            <h3 className="text-xl font-bold font-raleway">
                                Dependability
                            </h3>
                            <p className="text-sm font-montserrat leading-6">
                                Providing reliable support to maximize campaign
                                performance.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <IoPeopleSharp className="text-blue-500 text-6xl" />
                            <h3 className="text-xl font-bold font-raleway">
                                Collaboration
                            </h3>
                            <p className="text-sm font-montserrat leading-6">
                                Working closely with advertisers and publishers
                                to achieve mutual success.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutPage;
