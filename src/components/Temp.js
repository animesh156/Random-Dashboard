import EmployeeCard from "./EmployeeCard";

export default function Temp() {
    return (
        <div className="gird grid-cols-10">

            <div className="col-span-5 ">

                <div className="flex gap-x-2 mb-4">

                <div className="bg-red-100 text-black w-40 p-3 rounded-md">
                    <h1 className="text-sm font-medium">Available Position</h1>
                    <p className="text-2xl mb-1">24</p>
                    <p className="text-red-500 text-xs">4 Urgently needed</p>
                </div>

                <div className="bg-green-100 text-black w-40 p-3 rounded-md">
                    <h1 className="text-sm font-medium">Job Open</h1>
                    <p className="text-2xl mb-1">24</p>
                    <p className="text-blue-800 text-xs">4 Actively hiring</p>
                </div>

                <div className="bg-red-100 text-black w-40 p-3 rounded-md">
                    <h1 className="text-sm font-medium">New Employees</h1>
                    <p className="text-2xl mb-1">24</p>
                    <p className="text-red-500 text-xs">4 Department</p>
                </div>


                </div>


                <EmployeeCard />

                

                
            </div>


          



            <div className="col-span-5">

          </div>

        </div>
    )
}