import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-[290px] h-[260px] px-4 py-2 rounded-[20px] flex flex-col justify-center items-center gap-6 border-dashed border-[1px] border-[#ef4444] cursor-pointer">
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#ef4444]">
            +
          </div>
          <p>Add new Dish to Appetizers </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[460px] h-[592px] p-6 flex flex-col justify-between ml-[300px] fixed">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-bold">Add new Dish to Appetizers</p>
          <p className="w-9 h-9 bg-[#f4f4f5] flex justify-center items-center rounded-full">
            x
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col w-1/2 gap-1">
            <label htmlFor="Food name" className="text-[14px] font-semibold">
              Food name
            </label>
            <input
              type="text"
              placeholder="Type food name"
              className="border-[2px] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-1">
            <label htmlFor="Food name" className="text-[14px] font-semibold">
              Food price
            </label>
            <input
              type="text"
              placeholder="Enter price..."
              className="border-[2px] p-2 rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-[14px]">
            Ingredients
          </label>
          <div className="h-[90px] rounded-xl overflow-hidden p-3 border-[2px]">
            <input
              type="text"
              placeholder="List ingredients..."
              className="outline-none"
            />
          </div>
        </div>
        <div>
          <div className="mt-1 flex gap-1">
            <label
              htmlFor="file-input"
              className="text-[14px] font-semibold ml-2 flex flex-col"
            >
              Food image
            </label>
          </div>
          <div className=" flex flex-col  mt-1 mb-5">
            <label
              htmlFor="file-input"
              className="bg-gray-100 rounded-xl w-full h-[150px] flex flex-col justify-center items-center cursor-pointer border-[1px] border-gray"
            >
              <input hidden type="file" id="file-input" />

              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                      fill="#202124"
                    />
                  </svg>
                </div>
                <span>Choose a file or drag & drop it here</span>
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white py-2 px-5 rounded-lg">
            Add Dish
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
