import { TAGLINE } from "@/app/constants/apptext";
import { GoDiscussionClosed } from "react-icons/go";
import { FaUsersCog } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div>
      <div className="flex shadow-md bg-teal-900">
        <div className="3xl:pt-36 3xl:pl-64 3xl:pr-36 3xl:pb-28 pt-28 pl-44 pr-14 pb-12 w-1/2">
          <div className=" lg:text-5xl 3xl:text-6xl font-bold text-neutral-200">
            InVision IBS
          </div>
          <br />
          <div className="text-lg text-neutral-200">{TAGLINE}</div>
          <br />
          <button className="flex bg-gradient-to-r from-green-700 to-sky-600 hover:from-green-600 hover:to-sky-500 text-white font-bold py-4 px-12 rounded">
            <GoDiscussionClosed className="mr-3" size={28} />
            Let&apos;s Discuss
          </button>
        </div>
        <div className="relative">
          <div className="absolute">
            <div className="cube flex 3xl:mt-24 mt-12 transform-cube">
              <div>
                <div className="border border-neutral-500 h-72 w-64 mr-5 mb-5 first:bg-green-700 shadow-xl">
                  <div className="mt-12">
                    <div className="text-white text-5xl text-center">ESS</div>
                    <div className="text-center text-white text-sm">
                      Employee Self-Service
                    </div>
                    <div className="text-white text-center flex justify-center">
                      <FaUsersCog size={80} />
                    </div>
                  </div>
                </div>
                <div className="border border-neutral-500 h-72 w-64 mr-5 mb-5 bg-sky-600 shadow-xl">
                  <div className="mt-12">
                    <div className="text-white text-5xl text-center">FMS</div>
                    <div className="text-center text-white text-sm">
                      Financial Management System
                    </div>
                    <div className="text-white text-center flex justify-center">
                      <FaMoneyBillTrendUp size={80} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-neutral-500 h-72 w-64 mb-5 bg-sky-600 shadow-2xl">
                  <div className="mt-12">
                    <div className="text-white text-5xl text-center">SCM</div>
                    <div className="text-center text-white text-sm">
                      Supply Chain Management
                    </div>
                    <div className="text-white text-center flex justify-center">
                      <MdOutlineInventory2 size={80} />
                    </div>
                  </div>
                </div>
                <div className="border border-neutral-500 h-72 w-64 mb-5 bg-green-700 shadow-2xl">
                  <div className="mt-12">
                    <div className="text-white text-5xl text-center">HRMS</div>
                    <div className="text-center text-white text-sm">
                      Human Resource Management System
                    </div>
                    <div className="text-white text-center flex justify-center">
                      <RiShieldUserLine size={80} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
