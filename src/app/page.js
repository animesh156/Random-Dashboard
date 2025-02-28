import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Temp from "@/components/Temp";

export default function Home() {
  return (
    <div className="grid grid-cols-12  min-h-screen">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block md:col-span-1 lg:col-span-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-12   md:col-span-11 lg:col-span-10 flex flex-col m-auto md:m-0 md:p-3.5">
        <Header />

        <div className="border-t border-gray-300 mt-2 md:mt-4 max-w-xl md:w-full ml-0 md:ml-11"></div>


        <h3 className="md:text-[24px] text-[20px] font-[500] ml-11 mt-5 mb-2 text-black">Dashboard</h3>

        <div className="flex-grow">
          <Temp />
        </div>
      </div>
    </div>
  );
}
