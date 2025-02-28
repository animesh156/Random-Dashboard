import { IoIosArrowDown } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

export default function UpcomingSchedule() {
    return (
         <div className="lg:w-[400px] md:w-[374px] w-80 mb-5 mt-14 lg:mt-16 rounded-2xl lg:h-[424px] md:h-[319px] md:mt-3 border text-black border-gray-200">
        
                    <div className="flex justify-between p-3">
                        <h2 className="font-medium lg:text-[18px] text-[16px] text-blue-950">Upcoming Schedule</h2>
        
                        <div className="border flex px-1.5 border-gray-200 justify-between gap-x-1 rounded-md items-center">
                            <p className="md:text-[12px] text-[10px] font-medium text-gray-700">Today, 13th Sep 2021</p>
                            <IoIosArrowDown />
                         </div>
                    </div>
        
                    <ul className="mt-2 px-2 overflow-y-hidden md:h-[218px] lg:h-[312px]">
                        <p className="text-xs mb-2">Priority</p>
                        <li className="bg-gray-50  border border-gray-200 flex items-center justify-between mb-2 p-3 rounded-md">
                            <div className="flex flex-col">
                                <h5 className="lg:text-[16px] text-[14px]">Review candidate applications</h5>
                                <p className="text-[10px]">Today - 11.30 AM</p>
                            </div>
                            <div className="flex gap-x-3 mr-3">
                               
                                <IoEllipsisHorizontalOutline size={20} />
                            </div>
                        </li>
                        <p className="text-xs mb-3 mt-2">Other</p>

                        <li className="bg-gray-50 border border-gray-200 flex items-center justify-between mb-2 p-3 rounded-md">
                            <div className="flex flex-col">
                                <h5 className="lg:text-[16px] text-[14px]">Interview with candidates</h5>
                                <p className="text-[10px]">Today - 10.30 AM</p>
                            </div>
                            <div className="flex gap-x-3 mr-3">
                                
                                <IoEllipsisHorizontalOutline size={20} />
                            </div>
                        </li>
                        <li className="bg-gray-50 mb-2 border border-gray-200 flex items-center justify-between p-3 rounded-md">
                            <div className="flex flex-col">
                                <h5 className="lg:text-[16px] text-[14px]">Short meeting with product designer <br></br> from IT Departement</h5>
                                <p className="text-[10px]">Today - 09.15 AM</p>
                            </div>
                            <div className="flex gap-x-3 mr-3">
                               
                                <IoEllipsisHorizontalOutline size={20} />
                            </div>
                        </li>

                        <li className="bg-gray-50 hidden border border-gray-200 mt-2 md:flex items-center justify-between p-2 rounded-md">
                            <div className="flex flex-col">
                                <h5 className="font-normal text-wrap">Short meeting with product designer <br></br> from IT Departement</h5>
                                <p className="text-xs">Today - 09.15 AM</p>
                            </div>
                            <div className="flex gap-x-3 mr-3">
                                <TiPin size={20} />
                                <IoEllipsisHorizontalOutline size={20} />
                            </div>
                        </li>
                        
                    </ul>
                    <div className="border-t border-gray-400 lg:w-[400px] md:w-[374px] p-3.5 flex flex-col items-center justify-center ">
                            <p className="text-center font-semibold text-[14px] text-red-500">Create a new Schedule</p>
                        </div>
                </div>
    )
}