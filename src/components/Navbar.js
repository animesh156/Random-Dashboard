import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";

export default function Navbar() {
       
    return (
        <nav className="w-48 h-screen bg-gray-50">

            <h1 className="text-2xl font-semibold  p-3 text-center">WeHR</h1>

           
            <ul className="flex flex-col p-8 text-gray-600 gap-y-4 items-start">
            <p className="text-xs ">MAIN MENU</p>
                <li className="text-red-500 text-md flex items-center gap-x-2">
                    <MdDashboard />
                    Dashboard
                </li>

                <li className="flex text-md items-center gap-x-2">
                    <AiOutlineSchedule />
                   Recruitment
                </li>
                <li className="text-md flex items-center gap-x-2">
                    <AiOutlineSchedule />
                   Schedule
                </li>
                <li className="flex text-m items-center gap-x-2">
                    <AiOutlineSchedule />
                    Employee
                </li>

                <li className="flex text-md items-center gap-x-2">
                    <AiOutlineSchedule />
                    Department
                </li>

                <div className="mt-14">
                   
                   <p className="text-xs mb-4">OTHER</p>

                   <li className="flex text-md items-center gap-x-2">
                    <BiSupport />
                    Support
                </li>

                <li className="flex text-md items-center gap-x-2">
                    <IoIosSettings />
                    Settings
                </li>


                </div>
            </ul>
        </nav>
    )
}