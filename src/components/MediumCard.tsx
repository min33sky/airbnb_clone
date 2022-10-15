import { LiveAnywhere } from '@/lib/api';
import Image from 'next/image';
import React from 'react';

interface Props extends LiveAnywhere {}

export default function MediumCard({ img, title }: Props) {
  return (
    <article className="transform cursor-pointer snap-center transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" alt="img" />
      </div>
      <h1 className="mt-3 text-2xl">{title}</h1>
    </article>
  );
}
