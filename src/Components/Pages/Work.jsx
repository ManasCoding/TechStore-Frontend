import React, { useState } from "react";

const Work = () => {
  const [elements, setElements] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architecture",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1747088775~exp=1747103175~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=c626fd1fb0f118fd6861fd66c637a0be420f8e42b10d696979c365d6e028a646&r=dXMtd2VzdDE%3D"
    },
    {
      heading: "Ottografie",
      subheading: "Seamless Photographic Journey",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
      video:
        "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4"
    },
    {
      heading: "Amaterasu",
      subheading: "Frontier Health Innovation",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/be1179ab-5aaa-4f63-a9a7-f40c70ae895e/96953878?__token__=st=1747088843~exp=1747103243~acl=%2Fv3-1%2Fplayback%2Fbe1179ab-5aaa-4f63-a9a7-f40c70ae895e%2F96953878%2A~hmac=6caa7aeff0692611df2afb13b335bd0981e729bc7b75d659f7cf783ef036dbb2&r=dXMtZWFzdDE%3D"
    },
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1747088891~exp=1747103291~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=c8ade8b01f6d367d9d0c2bdf4f4401b27dcce94f56ec6a5c457dbf8cf8082c3f&r=dXMtY2VudHJhbDE%3D"
    },
  ]);
  return (
    <div className="w-full realative">
      <div className="max-w-screen-2xl mx-auto px-10 py-20 sm:px-28">
        <div className="featured flex gap-3">
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
          <h3 className="capitalize">featured projects</h3>
        </div>
        <h1 className="text-6xl my-5 sm:text-[13rem] sm:leading-none sm:tracking-tight">Work</h1>
        <p className="leading-2 text-md">
          highlights of cases that we passionately built with forward-thinking
          clients and frinends over
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-2 mt-10">
          {elements.map((element, index) => {
            return (
              <div className="elem w-full sm:w-[48%] mt-10">
                <div className="video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden">
                  <img
                    className="hidden sm:block h-full w-full object-cover"
                    src={element.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block aspect-video w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    src={element.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="">{element.heading}</h3>
                  <p className="opacity-40">{element.subheading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;












