/* eslint-disable @next/next/no-img-element */
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  const randomImg = `https://picsum.photos/200?random=${Math.random()}`;

  return (
    <div className="flex md:p-3 px-3 py-2.5 md:ml-6 w-auto justify-between">
      {/* Left Section */}
      <div className="flex md:ml-2  gap-x-2 items-center">
        <div className="md:hidden">
          <IoIosMenu size={22} className="text-gray-400" />
        </div>
        <div className="md:border  md:border-gray-200 rounded-md text-gray-400 flex items-center bg-white md:bg-gray-100 py-1.5 px-2">
          <input
            type="search"
            required
            placeholder="Search"
            className="md:w-64 hidden md:block"
          />
          <CiSearch size={22} className="text-gray-400" />
        </div>
      </div>

      {/* Right Section */}
      <div className="p-1.5 md:p-0">
        <ul className="flex items-center lg:gap-x-4 gap-x-3 text-gray-400">
          <li>
            <img src="./round-notifications.svg" alt="notificiation_svg" />
          </li>
          <li>
            <img src="./chat-dot.svg" alt="chat-dot_svg" className="w-7" />
          </li>
          <li className="avatar ">
            <div className="w-8 rounded-4xl">
              <Image
                src={randomImg}
                alt="avatar_img"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
          </li>
          <li className="flex md:gap-x-1 justify-center mr-1.5 md:mr-0  items-center">
            <p className="text-sm text-black -mr-1 hidden md:block">
              Admirra John
            </p>
            <FaAngleDown />
          </li>
        </ul>
      </div>
    </div>
  );
}
