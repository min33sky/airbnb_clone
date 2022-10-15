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
