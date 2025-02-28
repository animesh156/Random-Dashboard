/* eslint-disable @next/next/no-img-element */
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TiUserAdd } from "react-icons/ti";

export default function Sidebar() {
       
    return (
        <nav className="lg:w-[242px] md:w-[90px] h-[900px] bg-gray-50">

            <h1 className="lg:text-[36px] md:text-[20px] font-[600] text-black p-3 text-center">WeHR</h1>

           
            <ul className="flex flex-col lg:p-8 md:p-4 text-gray-600 gap-y-9 items-start">
            <p className="lg:text-[12px] md:text-[10px] ">MAIN MENU</p>
                <li className="text-red-500 md:ml-3 lg:ml-0 text-md flex items-center gap-x-5">
                    <MdDashboard  size={24}/>
                   <p className="md:hidden lg:block">Dashboard</p> 
                </li>

                <li className="flex text-md md:ml-3 lg:ml-0 items-center gap-x-5">
                    <img src="./recruitement.svg" alt="" className="w-[22px] ml-1"/>
                 <p className="md:hidden lg:block">Recruitment</p>  
                </li>
                <li className="text-md md:ml-3 lg:ml-0 flex items-center gap-x-5">
                    <img src="./calendar.svg" alt="" className="w-[24px]"/>
                  <p className="md:hidden lg:block">Schedule</p> 
                </li>
                <li className="flex text-md md:ml-3 lg:ml-0 items-center gap-x-5">
                <img src="./employee.svg" alt="" className="w-[22px]"/>
                 <p className="md:hidden lg:block">Employee</p>  
                </li>

                <li className="flex text-md md:ml-3 lg:ml-0 items-center gap-x-5">
                    <img src="./department.svg" alt="" className="w-[26px] " />
                    <p className="md:hidden lg:block">Department</p>  
                </li>

                <div className="mt-4">
                   
                   <p className="text-xs mb-3">OTHER</p>

                   <li className="flex text-md md:ml-3 lg:ml-0 mb-7 mt-5 items-center gap-x-5">
                    <BiSupport size={24} className="text-gray-400" />
                    <p className="md:hidden lg:block">Support</p>  
                </li>

                <li className="flex text-md md:ml-3 lg:ml-0 items-center gap-x-5">
                    <IoIosSettings size={24} className="text-gray-400" />
                    <p className="md:hidden lg:block">Settings</p>  
                </li>


                </div>
            </ul>
        </nav>
    )
}