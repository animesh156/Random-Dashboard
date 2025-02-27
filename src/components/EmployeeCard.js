
const datas = [
  {
    title: "Total Employees",
    count: 116,
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

      <>


<div className="w-64 bg-white rounded-xl flex shadow-md p-5 border border-gray-200">
       
       <div className="flex flex-col">

       <h3 className="text-gray-600 text-sm font-normal">Total Employees</h3>
       <p className="text-4xl font-semibold text-gray-900 mt-1">216</p>
       <div className="text-gray-500 text-sm mt-2">
         <p>120 Men</p>
         <p>96 Women</p>
       </div>

       </div>
     
 
       <div className="flex flex-col justify-between items-center mt-4">
        
         <div className="relative">
           <p className="text-red-500 text-xs font-semibold absolute -top-4 left-6">
             +2%
           </p>
           <svg
             className="w-20 h-10 text-red-400"
             fill="none"
             viewBox="0 0 50 24"
             stroke="currentColor"
             strokeWidth="2"
           >
             <path d="M2 20 C10 5, 20 15, 30 10 S50 5, 48 10" />
           </svg>
         </div>

         <div className="bg-red-100 font-medium text-gray-700 px-3 py-1 text-sm rounded-lg">
           +2% Past month
         </div>


       </div>
     </div>


      </>

      
      
    );
  }
  