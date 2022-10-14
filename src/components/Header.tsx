import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/assets/Airbnb_Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Logo"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="pl-5 flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="h-8 hidden md:inline-flex text-white bg-red-400  rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 text-gray-400 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
