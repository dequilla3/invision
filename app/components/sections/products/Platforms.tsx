import Image from "next/image";

export default function Platforms() {
  return (
    <div>
      <div className="flex justify-center text-4xl pt-32 text-white font-semibold">
        <label className="border-b-4 border-sky-500 p-3">All tech in one Platform!</label>
      </div>

      <div className="flex justify-center mt-28">
        <div className="flex flex-wrap justify-center w-2/3 ">
          <div className="h-72 w-72 rounded-full bg-teal-800 ml-20 mb-32">
            <Image
              src="/device_expenses.webp"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="text-center text-white text-xl mt-5">Expenses</div>
          </div>

          <div className="h-72 w-72 rounded-full bg-teal-800 ml-20 mb-32">
            <Image
              src="/device_inventory.webp"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="text-center text-white text-xl mt-5">Inventory</div>
          </div>

          <div className="h-72 w-72 rounded-full bg-teal-800 ml-20 mb-32">
            <Image
              src="/device_iot.webp"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="text-center text-white text-xl mt-5">IoT</div>
          </div>

          <div className="h-72 w-72 rounded-full bg-teal-800 ml-20 mb-32">
            <Image
              src="/device_pos.webp"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="text-center text-white text-xl mt-5">
              Point of Sales
            </div>
          </div>

          <div className="h-72 w-72 rounded-full bg-teal-800 ml-20 mb-32">
            <Image
              src="/device_kiosk.webp"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="text-center text-white text-xl mt-5">Kiosk</div>
          </div>
        </div>
      </div>
    </div>
  );
}
