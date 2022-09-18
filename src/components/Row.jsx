import React from "react";

const Row = ({ src, alt, text }) => {
    return (
        <div className="basis-[200px] flex-shrink-0 relative">
            <img src={src} alt={alt} />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-black/50 flex flex-col items-center justify-center text-gray-300 text-center p-4  transition-all cursor-pointer select-none">
                <h3 className="text-sm mb-2 font-bold">{alt}</h3>
                <p className="text-xs">{text}</p>
            </div>
        </div>
    );
};

export default Row;
