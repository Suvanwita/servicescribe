import {Link}  from "react-router-dom"
import { TbSunElectricity } from "react-icons/tb";
import { FaHammer } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

import { FaFan } from "react-icons/fa";
import { MdPestControl } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaPaintRoller } from "react-icons/fa6";
import styles from "./Booking.module.css"
import { BsFillCalendarEventFill } from "react-icons/bs";
import { PiPaintBrushFill } from "react-icons/pi";


function Booking() {
  return (
    <>
    <div className={styles.hlo} >
    <div class="flex justify-center items-center min-h-screen">
        <div class="bg-white w-3/4 rounded-lg shadow-lg">
            <div class="text-center py-8">
                <h1 class="text-2xl font-medium text-gray-700">What are you looking to schedule?</h1>
            </div>
            <div className="flex">
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex"><TbSunElectricity className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4"><Link to="./calender1">Electricians</Link></h2></div>
                
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex">    <HiMiniWrenchScrewdriver className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4"><Link to="./calender2">Plumber</Link></h2></div>
            
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex">  <FaHammer className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Carpenters</h2></div>
              
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex">
                <FaFan className="text-6xl text-gray-500 mb-4 "/>
                    <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">HVAC Technicians</h2>
                    </div>
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex"> <MdPestControl className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Pest Control Services</h2></div>
               
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex"><PiPottedPlantFill className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Gardeners</h2></div>
                
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex"> <FaPaintRoller className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Painters and Decorators</h2></div>
               
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex">  <BsFillCalendarEventFill className="text-6xl text-gray-500 mb-4 "/>
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Event planners and Coordinators</h2></div>
              
                </div>
                <div class="flex-1 bg-gray-200 p-8 text-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                  <div className="flex"><PiPaintBrushFill className="text-6xl text-gray-500 mb-4 " />
                  <h2 class="text-xl font-medium text-gray-700 mt-3 ml-4">Home Cleaning and Organization Services</h2></div>
                
                </div>
            </div>
        </div>
    </div>
</div>
</>
  );
}
export default Booking;
