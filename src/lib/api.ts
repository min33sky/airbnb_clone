import axios from 'axios';

export interface ExploreNearby {
  img: string;
  location: string;
  distance: string;
}

export async function getNearbyLocation() {
  const { data } = await axios.get<ExploreNearby[]>(
    'https://www.jsonkeeper.com/b/4G1G',
  );
  return data;
}
