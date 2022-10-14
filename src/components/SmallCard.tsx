import { ExploreNearby } from '@/lib/api';
import Image from 'next/image';

interface Props extends ExploreNearby {}

export default function SmallCard({ img, location, distance }: Props) {
  return (
    <article className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image src={img} alt="image" layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </article>
  );
}
