import axios from 'axios';

export interface ExploreNearby {
  img: string;
  location: string;
  distance: string;
}

export interface LiveAnywhere {
  img: string;
  title: string;
}

export interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export async function getNearbyLocation() {
  const { data } = await axios.get<ExploreNearby[]>(
    'https://www.jsonkeeper.com/b/4G1G',
  );
  return data;
}

export async function getCardsData() {
  const { data } = await axios.get<LiveAnywhere[]>(
    'https://www.jsonkeeper.com/b/VHHT',
  );
  return data;
}

export async function getSearchResult() {
  const { data } = await axios.get<SearchResult[]>(
    'https://www.jsonkeeper.com/b/5NPS',
  );
  return data;
}
