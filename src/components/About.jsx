import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import requests from "../requests/requests";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Row from "./Row";

const base = `https://image.tmdb.org/t/p/w500`;
const About = () => {
    // Hooks
    const [movies, setMovies] = useState([]);
    const moviesContainerRef = useRef();

    // Requests
    useEffect(() => {
        axios.get(requests.reqTrending).then((res) => setMovies(res.data.results));
    }, []);
    console.log(movies);

    // Scroll Handlers
    const rightScroll = () => {
        moviesContainerRef.current.scrollLeft += 500;
        console.log();
    };
    const leftScroll = () => {
        moviesContainerRef.current.scrollLeft -= 500;
    };
    // Text Functions
    const textTrancate = (text, num) => {
        if (text.length > num) {
            return text.slice(0, num) + "...";
        } else {
            return text;
        }
    };
    // Jsx
    return (
        <div className="p-4 relative group">
            <div
                onClick={leftScroll}
                className="absolute top-[60px] left-0 text-gray-600 cursor-pointer z-10 opacity-50 group-hover:opacity-100"
            >
                <BsFillArrowLeftCircleFill size={24} />
            </div>
            <div
                onClick={rightScroll}
                className="absolute top-[60px] right-0 text-gray-600 cursor-pointer z-10 opacity-50 group-hover:opacity-100"
            >
                <BsFillArrowRightCircleFill size={24} />
            </div>

            <div
                ref={moviesContainerRef}
                className=" flex gap-4 overflow-x-auto scrollbar-hide  scroll-smooth"
            >
                {movies.map((movie) => (
                    <Row
                        key={movie.id}
                        src={`${base}${movie?.backdrop_path}`}
                        alt={movie?.title || movie?.name}
                        text={textTrancate(movie.overview, 50)}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
