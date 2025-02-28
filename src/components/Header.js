/* eslint-disable @next/next/no-img-element */
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex p-3 md:ml-6 justify-between">
      {/* Left Section */}
      <div className="flex md:ml-2  gap-x-2 items-center">
        <div className="md:hidden">
          <IoIosMenu size={22} className="text-black" />
        </div>
        <div className="md:border  md:border-gray-200 rounded-md text-gray-400 flex items-center bg-white md:bg-gray-100 py-1 px-2">
          <input type="search" required placeholder="Search" className="md:w-64 hidden md:block" />
          <CiSearch size={22} className="text-black" />
        </div>
      </div>

      {/* Right Section */}
      <div className="">
        <ul className="flex items-center gap-x-4 text-gray-400">
          <li>
            <IoNotificationsOutline size={22} />
          </li>
          <li>
            <RiMessage2Fill size={22} />
          </li>
          <li className="avatar">
            <div className="w-8 rounded-4xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GXmWp3LcnLQHMk6agVqLOmrg0-3I9FLRAEPJN8901J9GWggooyUL4J4qz6ghR0jIGJISIFunnW3DPkCQnvnDb5fbTe1W29-jNgKTnlQsB73q5wM8Pd5MH4BQ1L1uwObK3vZdGm7Kl0nofNawLzK21CirWTqbj3sIDvJSQwsD9B2~5RrFpGHGe6ujSXJWYgqWdkCAVWc~zeMwYvMUN0DsW4s76~jXg4l0Zg-lTYcpm1zu8wMmpnaB~-cJKeCal8Q5bnzLyAOHlJHvkzvHOx~b624XTNyj4PQeLcIgL8Boe-nzm3H5rXOGwBkfpoRRjoNXwioiHUpJ9LPeRLdMeEHsBQ__"
                alt="avatar_img"
              />
            </div>
          </li>
          <li className="flex gap-x-1 items-center">
            <p className="text-sm text-black hidden md:block">Admirra John</p>
            <FaAngleDown />
          </li>
        </ul>
      </div>
    </div>
  );
}
