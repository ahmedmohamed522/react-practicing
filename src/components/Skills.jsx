import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Skills = () => {
    return (
        <>
            <h1>Skills page</h1>
            <div className="flex gap-4 h-[300px] p-8 group">
                <div className="flex-1 p-4 border ">
                    <img
                        src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="/"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 p-4 border">
                    <img
                        src="https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="/"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 p-4 border">
                    <img
                        src="https://images.pexels.com/photos/4080534/pexels-photo-4080534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="/"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 p-4 border">
                    <img
                        src="https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="/"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute left-4 p-2 opacity-50 transition-all duration-300 group-hover:opacity-100 border rounded-full border-slate-700 cursor-pointer top-[240px]">
                    <AiOutlineArrowLeft />
                </div>
                <div className="absolute right-4 p-2 opacity-50 transition-all duration-300 group-hover:opacity-100 border rounded-full border-slate-700 cursor-pointer top-[240px]">
                    <AiOutlineArrowRight />
                </div>
            </div>
        </>
    );
};

export default Skills;
