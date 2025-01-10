import { APIURL, KEY } from "@/app/constants";
const fetchFn = (url: string, cache?: number) =>
  fetch(url, { next: { revalidate: cache || 3600 } }).then((res) => res.json());
export const searchGames = async function (
  query?: string,
  page = 1,
  filters?: { filterName: string; option: string }[],
  page_size = 20,
  cache: number = 0
) {
  const data = await fetchFn(
    `${APIURL}games?search=${query}&page_size=${page_size}&page=${page}&${filters
      ?.map((filter: any) => `${filter.filterName}=${filter.option}&`)
      .join("")}&key=${KEY}`,
    cache
  );
  const count = data.count;

  return { data, count };
};
export const getGame = async function (id: string) {
  try {
    const data = await fetchFn(`${APIURL}games/${id}?key=${KEY}`); //details
    const screenshots = await fetchFn(
      `${APIURL}games/${id}/screenshots?&key=${KEY}`
    ); //screenshots
    const similar = await fetchFn(
      `${APIURL}games/${id}/game-series?key=${KEY}`
    ); //simimlar
    return { data, screenshots, similar };
  } catch (err) {
    throw err;
  }
};
export const getGameFromgenres = async function (genre = "51") {
  const data = await fetchFn(
    `${APIURL}games?genres=${genre}&page_size=15&key=${KEY}`
  );
  return data;
};
export const gamebyplatforms = async function (
  id: string,
  page = 1,
  page_size = 20
) {
  const data = await fetchFn(
    `${APIURL}games?platforms=${id}&page_size=${
      page_size || 40
    }&page=${page}&key=${KEY}`
  );
  return data;
};
export const getGamesByIds = async function (ids: string[]) {
  const data = await Promise.all(ids.map((id) => getGame(id)));
  return data;
};
