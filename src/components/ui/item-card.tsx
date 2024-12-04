import React, { ReactNode } from "react";

type ItemCardProps = {
    icon: ReactNode;
    title: string;
    text: string;
};

const ItemCard: React.FC<ItemCardProps> = ({ icon, title, text }) => {
    return (
        <a href="https://hotaff.affise.com/">
            <div className="w-full sm:w-1/2 lg:w-2/3 border border-zinc-800 shadow-md shadow-blue-600 rounded-lg px-6 py-12 bg-gradient-to-r from-neutral-900 to-zinc-800 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-700 duration-200 ease-in-out">
                <div className="flex flex-row items-center mb-4">
                    <div className="text-blue-500 text-5xl mr-4 transition-transform transform hover:scale-110 duration-200">
                        {icon}
                    </div>
                    <h3 className="text-zinc-50 font-bold text-xl font-raleway tracking-tight">
                        {title}
                    </h3>
                </div>
                <p className="text-zinc-300 font-montserrat text-base leading-6 tracking-tight">
                    {text}
                </p>
            </div>
        </a>
    );
};

export default ItemCard;
