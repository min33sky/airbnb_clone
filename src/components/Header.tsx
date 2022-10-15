import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker } from 'react-date-range';
import korean from 'date-fns/locale/ko';
import { useState } from 'react';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const resetInput = () => {
    setSearchInput('');
  };

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
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
          placeholder="Start your search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            locale={korean}
          />

          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(+e.target.value)}
              className="w-12 pl-2 text-lg text-red-400 outline-none "
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
