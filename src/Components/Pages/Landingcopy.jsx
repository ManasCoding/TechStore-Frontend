import React from "react";

const Landing = () => {
  return (
    <div className="realative w-full h-[150vh] sm:h-[280vh]">
      <div className="picture w-full h-full">
        <img className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90):format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="absolute top-0 text max-w-screen-2xl mx-auto px-10 sm:px-28 h-full text-white">
        <div className="mt-60">
          <p>gumansingh.web.dev@gmail.com</p>
          <p>+91 8249973481</p>
        </div>
        <div className="para mt-12 sm:mt-[10rem]">
            <p className="text-md sm:text-3xl">Global digital design studio partnering</p>
            <p className="text-md sm:text-3xl">with brands and businesses that create</p>
            <p className="text-md sm:text-3xl">exceptional experiences where people</p>
            <p className="text-md sm:text-3xl">love, work, and unwind</p>
        </div>
        <div className="headings mt-5 sm:mt-10">
            <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter leading-none font-normal">Tech</h1>
            <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter leading-none font-normal">Store</h1>
            <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter leading-none font-normal">Experience</h1>
        </div>
        <div className="sm:w-1/3 para2 mt-5 sm:mt-20">
            <p className="sm:text-xl">We help experience-driven companies thrive by making their audience
                feel the refined intricacies of their brand and product in the digital space.
                unforgettable journeys start with a click.
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default Landing;
