import React from 'react';

function Banner() {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <div className="absolute top-[87%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
                <p className="mb-2 text-sm leading-7 text-black rounded-full text-bold sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="px-4 py-2 text-lg text-white transition duration-150 border rounded-full shadow-md cursor-pointer border-logo-blue active:border-logo-yellow border-4px bg-logo-blue hover:shadow-black active:scale-90">
                    Surprise Me!
                </button>
            </div>
            <video autoPlay muted loop className="absolute top-0 left-0 z-0 object-cover w-full h-full">
                <source src="/videos/DVbanner.mp4" type="video/mp4" />
                <source src="/videos/DVbanner.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b-from-50"></div>

        </div>
    );
}

export default Banner;
