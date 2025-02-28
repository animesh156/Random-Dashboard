import Announcement from "./Annoucement";
import EmployeeCard from "./EmployeeCard";
import RecentActivity from "./RecentActivity";
import UpcomingSchedule from "./UpcomingSchedule";

export default function Temp() {
    return (
        <div className="flex px-9 gap-x-5 flex-col lg:flex-row items-center ">
    
            {/* left part */}

            <div className="flex flex-col items-center" >

                <div className="flex p-2 flex-col justify-center gap-y-3 items-center md:flex-row gap-x-4 mb-7">

                <div className="text-blue-950 h-[136px] w-80 md:w-[200px] p-3 rounded-lg"
                style={{backgroundColor: "rgba(255, 239, 231, 1)"}}
                >
                    <h1 className="text-lg px-2 font-medium">Available Position</h1>
                    <p className="text-4xl font-medium mb-3 px-1.5 mt-1">24</p>
                    <p className="text-red-500 text-base px-2">4 Urgently needed</p>
                </div>

                <div className="bg-green-100 text-blue-950 h-[136px] md:w-[200px] w-80 p-3 rounded-lg">
                    <h1 className="text-lg px-2 font-medium">Job Open</h1>
                    <p className="text-4xl px-1.5 mt-1 font-medium mb-1.5">10</p>
                    <p className="text-blue-800 text-base p-2">4 Actively hiring</p>
                </div>

                <div className=" md:h-[136px] md:w-[200px] w-80 p-3 text-blue-950 rounded-lg"
                 style={{backgroundColor: "rgba(255, 239, 231, 1)"}}
                >
                    <h1 className="text-lg px-2 font-medium">New Employees</h1>
                    <p className="text-4xl font-medium px-1.5 mt-1 mb-3">24</p>
                    <p className="text-red-500 text-base px-2">4 Department</p>
                </div>


                </div>


                <EmployeeCard />


                <Announcement />



                
            </div>

          
          {/* right part */}
          
            <div className="flex flex-col items-center md:flex-row lg:flex-col md:gap-x-3 md:mb-3" >

                <RecentActivity />

                <UpcomingSchedule />

          </div>

        </div>
    )
}