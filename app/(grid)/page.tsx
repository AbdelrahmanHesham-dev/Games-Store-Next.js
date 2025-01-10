import { getGamesByIds, searchGames } from "../api/api";
import GamesSlider from "../components/GamesSlider";
import Hero from "../components/Hero";

export default async function Home() {
  const data = await searchGames("", 2, [], 9);
  const ps5 = await searchGames(
    "",
    1,
    [
      { filterName: "platforms", option: "187" },
      {
        filterName: "ordering",
        option: "-metacritic",
      },
    ],
    10
  );
  const pc = await searchGames(
    "",
    1,
    [{ filterName: "platforms", option: "4" }],
    10
  );
  const { results } = data.data;

  const customGames = await getGamesByIds([
    "799265",
    "58550",
    "2462",
    "494384",
    "452642",
    "452634",
  ]);

  return (
    <section className="  ">
      <Hero />
      <GamesSlider title="Top Games for PS5" games={ps5.data.results} />
      <GamesSlider title="Top Games" games={results} />
      <GamesSlider
        screenBig
        big
        slidesPerView={1}
        title="PLAYSTATION EXCLUSIVES"
        games={customGames.map((game) => game.data)}
      />
      <GamesSlider
        slidesPerView={3}
        title="Top PC Games"
        games={pc.data.results}
      />
    </section>
  );
}
