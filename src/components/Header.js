/* eslint-disable @next/next/no-img-element */
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";


export default function Header() {
    return (
        <div className="flex items-center justify-between">

  <div>

  <label className="input bg-slate-100 mt-5 text-black">

<input type="search" required placeholder="Search" className="w-64" />

<CiSearch size={20} />
</label>


  </div>


  <div className="mr-6 mt-3">

    <ul className="flex items-center gap-x-4 text-gray-400">


      <li>

        <IoNotificationsOutline size={16} />

      </li>


      <li>

        <RiMessage2Fill size={16} />

      </li>


        <li className="avatar">
        
    <div className="w-8 rounded-4xl">
      <img src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GXmWp3LcnLQHMk6agVqLOmrg0-3I9FLRAEPJN8901J9GWggooyUL4J4qz6ghR0jIGJISIFunnW3DPkCQnvnDb5fbTe1W29-jNgKTnlQsB73q5wM8Pd5MH4BQ1L1uwObK3vZdGm7Kl0nofNawLzK21CirWTqbj3sIDvJSQwsD9B2~5RrFpGHGe6ujSXJWYgqWdkCAVWc~zeMwYvMUN0DsW4s76~jXg4l0Zg-lTYcpm1zu8wMmpnaB~-cJKeCal8Q5bnzLyAOHlJHvkzvHOx~b624XTNyj4PQeLcIgL8Boe-nzm3H5rXOGwBkfpoRRjoNXwioiHUpJ9LPeRLdMeEHsBQ__" alt="avatar_img" />
    </div>
 
        </li>

        <li className="flex -ml-2 gap-x-1 items-center">
            <p className="text-sm text-black">Admirra John</p>
            <FaAngleDown />

        </li>


        
    </ul>

  </div>





        </div>
       
    )
}