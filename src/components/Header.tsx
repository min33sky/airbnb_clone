import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="/assets/Airbnb_Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Logo"
        />
      </div>

      <div className="flex items-center rounded-full border-2 py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400  p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-400">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
