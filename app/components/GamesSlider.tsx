import React from "react";
import SwiperCards from "./SwiperCards";
import Link from "next/link";
import Image from "next/image";

const GamesSlider = ({
  games = [],
  slidesPerView,
  big,
}: {
  games?: Game[];
  title: string;
  slidesPerView?: number;
  big?: boolean;
  screenBig?: boolean;
}) => {
  return (
    <div>
      <div className=" flex flex-col gap-6 mt-14">
        <div className=" w-full justify-between flex items-center">
          <Link className=" text-rose-300 font-semibold" href="/category">
            {" "}
            Browse All Games
          </Link>
        </div>
        <SwiperCards
          className=" h-full"
          slidesPerView={slidesPerView || 3}
          items={games.map((game: Game) => {
            return {
              card: big ? (
                <div className=" flex  overflow-hidden items-center bg-main rounded-2xl">
                  <div className=" flex w-[60%] px-6  flex-col items-start ">
                    <h1 className=" text-xl border-b-2 border-neutral-100 w-full pb-3 font-semibold text-white">
                      {game.name}
                    </h1>
                    <p className=" text-sm line-clamp-4 text-gray-100 pt-3">
                      {game.description_raw}
                    </p>
                  </div>
                  <div className=" w-[40%]   h-64 relative">
                    <Image
                      className=" group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover"
                      fill
                      src={game.background_image || "/bg2.jpg"}
                      alt={game.name}
                    />
                  </div>
                </div>
              ) : (
                <div className=" relative cursor-pointer group">
                  <div
                    className="  after:absolute after:inset-0 
                 after:w-0 group-hover:after:w-full after:h-full after:bg-rose-500/60 after:rounded-2xl after:duration-200  w-full h-96 rounded-2xl overflow-hidden relative "
                  >
                    <Image
                      className=" group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover"
                      fill
                      src={game.background_image || "/bg2.jpg"}
                      alt={game.name}
                    />
                  </div>
                  <Link
                    href={`/game/${game.id}`}
                    className=" text-base line-clamp-1 mt-2 text-white font-semibold "
                  >
                    {game.name}
                  </Link>
                  <div className=" absolute top-2 left-4"></div>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default GamesSlider;
