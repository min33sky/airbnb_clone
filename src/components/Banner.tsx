import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/assets/Banner.webp"
        layout="fill"
        objectFit="cover"
        alt="Banner Image"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
        <p className="text-sm font-semibold sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition hover:shadow-xl active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}
