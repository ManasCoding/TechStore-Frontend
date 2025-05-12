import React from "react";

const PlayReel = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
       <div className="w-40 sm:w-96 overflow-hidden aspect-video bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <video muted loop autoPlay className="w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://a.storyblok.com/f/133769/x/3879cd8d95/preview.mp4"></video>
       </div> 
      <div className="overlay absolute w-full h-full text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-28 sm:gap-80">
            <div className="text-5xl sm:text-8xl">Play</div>
            <div className="text-5xl sm:text-8xl">Reel</div>
        </h1>
        <p className="text-center px-10 text-xs">Our work is best experienced in motion. don't forget to put on your headphones.</p>
      </div>
    </div>
  );
};

export default PlayReel;
