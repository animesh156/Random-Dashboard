/* eslint-disable @next/next/no-img-element */
import { IoIosArrowRoundUp } from "react-icons/io";

const datas = [
  {
    title: "Total Employees",
    count: 216,
    men: 120,
    women: 96,
    increase: 2
  },

  {
    title: "Talent Request",
    count: 16,
    men: 6,
    women: 10,
    increase: 5
  },
]



export default function EmployeeCard() {
    return (

      <div className="flex flex-col md:flex-row gap-y-3 items-center gap-x-3">

     {datas.map((data,index) => (

<div className="md:w-[312px] w-80 bg-white mt-1 mb-2 md:h-[190px] rounded-xl flex  justify-between shadow-md p-5 border border-gray-200" key={index}>
       
<div className="flex flex-col">

<h3 className="text-black text-lg font-medium">{data.title}</h3>
<p className="text-5xl font-semibold text-gray-900 mt-1">{data.count}</p>
<div className="text-gray-500 text-xs mt-4">
  <p>{data.men} Men</p>
  <p>{data.women} Women</p>
</div>

</div>


<div className="flex flex-col justify-evenly  items-center mt-2">
 
  <div className="relative -mt-4">
    <p className="text-red-500 text-xs font-semibold absolute -top-4 left-11">
      +{data.increase}%
    </p>
    <IoIosArrowRoundUp className="absolute left-12 text-red-500" />
   <img src="./Vector 2.png" alt=""  />
   <img src="./Vector 3 (2).png" alt="" className="absolute -top-0"  />
  </div>

  <div className="bg-red-100 font-normal mt-2 rounded-sm text-gray-700 px-2.5 py-1 text-xs ">
    +{data.increase}% Past month
  </div>


</div>
</div>

     ))}



      </div>

      
      
    );
  }
  