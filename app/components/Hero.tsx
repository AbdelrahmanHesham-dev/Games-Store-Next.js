import React from "react";
import SwiperCards from "./SwiperCards";
import "swiper/css";
import Image from "next/image";
import CardInfo from "./CardInfo";

const Hero = () => {
  return (
    <div className=" h-full mt-8">
      <SwiperCards
        className=" h-[30rem]"
        paginationImages
        items={[
          {
            card: (
              <div className=" flex items-start justify-start w-full h-full relative">
                <video
                  className=" absolute w-full h-full object-cover rounded-2xl  inset-0"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source type="video/mp4" src="/spidervideo.mp4" />
                </video>{" "}
                <CardInfo
                  btnClasses=" text-white bg-red-500 hover:bg-red-400"
                  desc="Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise, out October 20 for PS5."
                  title="BE GREATER TOGETHER"
                  image="/news1title.webp"
                />
              </div>
            ),
            src: "/poster.webp",
          },
          {
            card: (
              <div className=" w-full h-full relative">
                <video
                  className=" absolute w-full h-full object-cover object-top rounded-2xl  inset-0"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source
                    type="video/mp4"
                    src="/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4"
                  />
                </video>
                <CardInfo
                  btnClasses="  text-white bg-orange-500 hover:bg-orange-400"
                  desc="Last chance to pre-order and get access to additional premium content. Call of Duty®: Black Ops 6 launches on October 25th"
                  title="The truth lies"
                  image="/call-of-duty-black-ops-6-logo-01-en-21may24.webp"
                />
              </div>
            ),
            src: "/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp",
          },
          {
            card: (
              <div className=" w-full h-full relative">
                <Image
                  src="/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp"
                  alt="Dragon Ball Sparking Zero Hero desktop 01 03oct24"
                  className=" w-full h-full object-cover object-top rounded-2xl  inset-0"
                  fill
                />
                <CardInfo
                  btnClasses=" text-gray-900"
                  desc="A legendary series has returned. Reach new levels of power in Dragon Ball: Sparking! Zero, out now on PS5"
                  title="Shake the earth. Break the universe !"
                  image="/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp"
                />
              </div>
            ),
            src: "/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp",
          },
          {
            card: (
              <div className=" flex items-start justify-start w-full h-full relative">
                <video
                  className=" absolute w-full h-full object-cover rounded-2xl  inset-0"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source
                    type="video/mp4"
                    src="/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4"
                  />
                </video>{" "}
                <CardInfo
                  btnClasses=" text-white z-20 bg-red-500 hover:bg-red-400"
                  desc="As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of sinister political machinations."
                  title="Freedom Always Comes At A Price…"
                  image="/iconcyber.webp"
                />
              </div>
            ),
            src: "/cyb.webp",
          },
        ]}
      />
    </div>
  );
};

export default Hero;
