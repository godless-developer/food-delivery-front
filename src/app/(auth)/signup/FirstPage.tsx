import { ChevronLeft } from "lucide-react";

export default function FirstPage() {
  return (
    <div className="bg-white w-[416px] h-[308px] p-1 flex flex-col gap-4">
      <button className="flex justify-center items-center rounded-md bg-[#f5f5f7] w-[44px] h-11 border-[1px] border-[#d4d4d6]">
        <ChevronLeft />
      </button>
      <div className="flex flex-col gap-2 items-start justify-center">
        <p className="text-[24px] font-semibold normal">Create your account</p>
        <p className="text-[16px] font-normal normal text-[#71717a]">
          Sign up to explore your favorite dishes
        </p>
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email address"
        className="border-[1px] border-[#d4d4d6] rounded-md h-9 w-full px-2 py-5"
      />
      <button className="bg-[#d4d4d6] rounded-md h-9 w-full flex justify-center items-center">
        Let's Go
      </button>
      <div className="flex gap-3 justify-center items-center">
        <p className="text-[16px] font-normal normal text-[#71717a]">
          Already have an account?
        </p>
        <p className="text-[16px] text-[#2563EB] font-normal normal">Log in</p>
      </div>
    </div>
  );
}
