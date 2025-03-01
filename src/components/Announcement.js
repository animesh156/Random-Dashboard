import { IoIosArrowDown } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

export default function Announcement() {
  return (
    <div className="md:w-[640px] w-[350px] ml-2 md:ml-0 mb-4 md:h-[334px] mt-5 rounded-2xl border-t-2 border-l-2 border text-black border-gray-200">
      <div className="flex justify-between p-2">
        <h2
          className="font-medium lg:[text-18px] md:text-[14px] text-[16px]  mt-1"
          style={{ color: "rgba(22, 30, 84, 1)" }}
        >
          Announcement
        </h2>

        <div className="border border-gray-200 flex p-1.5 justify-between gap-x-1 rounded-md items-center ">
          <p className="text-xs">Today, 13 Sep 2021</p>
          <IoIosArrowDown />
        </div>
      </div>

      <ul className="mt-2 md:h-[224px] overflow-y-hidden px-2 ">
        <li
          className="flex border border-gray-200 items-center justify-between mb-2 p-3 rounded-md"
          style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
        >
          <div className="flex flex-col">
            <h5 className="lg:text-[16px] md:text-[15px] text-[14px] text-xs font-[400]">
              Outing schedule for every department
            </h5>
            <p className="text-[10px]">5 Minutes ago</p>
          </div>
          <div className="flex gap-x-3 mr-3">
            <TiPin size={20} />
            <IoEllipsisHorizontalOutline size={20} />
          </div>
        </li>

        <li
          className="flex border border-gray-200 items-center justify-between mb-2 p-3 rounded-md"
          style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
        >
          <div className="flex flex-col">
            <h5 className="lg:text-[16px] md:text-[15px] text-[14px] text-xs font-[400]">
              Meeting HR Department
            </h5>
            <p className="text-[10px]">Yesterday, 12:30 PM</p>
          </div>
          <div className="flex gap-x-3 mr-3">
            <TiPin size={20} />
            <IoEllipsisHorizontalOutline size={20} />
          </div>
        </li>

        <li
          className="flex border border-gray-200 items-center justify-between p-3 rounded-md"
          style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
        >
          <div className="flex flex-col">
            <h5 className="lg:text-[16px] md:text-[15px] text-[14px] text-xs font-[400]">
              IT Department need two more talents for UX/UI <br></br> Designer
              position
            </h5>
            <p className="text-[10px]">Yesterday, 09:15 AM</p>
          </div>
          <div className="flex gap-x-3 mr-3">
            <TiPin size={20} />
            <IoEllipsisHorizontalOutline size={20} />
          </div>
        </li>
      </ul>

      <div className="border-t border-gray-200 md:w-[640px] p-1.5">
        <p className="text-center font-semibold text-sm pt-2.5 text-red-500">
          See All Announcements
        </p>
      </div>
    </div>
  );
}
