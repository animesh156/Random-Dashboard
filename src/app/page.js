import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Temp from "@/components/Temp";

export default function Home() {
  return (
   <div className="grid grid-cols-12">
    <div className="col-span-2">
    <Navbar />
    </div>

    <div className="col-span-10 ">
   <Header />
   <div className="divider divide-neutral"></div>

   <h2 className="text-black text-lg">Dashboard</h2>

   <Temp />

    </div>
  
   </div>
  );
}
