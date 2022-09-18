import React from "react";

const Home = () => {
    return (
        <div className="w-full h-screen relative">
            <img
                src="https://images.pexels.com/photos/936800/pexels-photo-936800.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1"
                alt="/"
                className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-screen left-0 top-0 flex justify-center bg-black/60">
                <div className="text-white absolute top-[150px] text-center ">
                    <h1
                        className="text-5xl  font-bold mb-4
                    "
                    >
                        Welcome Home
                    </h1>
                    <p className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
