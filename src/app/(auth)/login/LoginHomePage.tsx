import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LoginHomePage() {
  return (
    <div className="bg-white w-[416px] h-[395px] p-3 flex flex-col gap-4 rounded-lg">
      <button className="flex justify-center items-center rounded-md bg-[#f5f5f7] w-[44px] h-11 border-[1px] border-[#d4d4d6]">
        <ChevronLeft />
      </button>
      <div className="flex flex-col gap-2 items-start justify-center">
        <p className="text-[24px] font-semibold normal">Log in</p>
        <p className="text-[16px] font-normal normal text-[#71717a]">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email address"
        className="border-[1px] border-[#d4d4d6] rounded-md h-9 w-full px-2 py-5"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="border-[1px] border-[#d4d4d6] rounded-md h-9 w-full px-2 py-5"
      />
      <p>Forgot password ?</p>
      <Link href="./home">
        <button className="bg-[#d4d4d6] rounded-md h-9 w-full flex justify-center items-center">
          Let's Go
        </button>
      </Link>
      <div className="flex gap-3 justify-center items-center">
        <Link href={"/signup"}>
          <p className="text-[16px] font-normal normal text-[#71717a]">
            Don't have an account?
          </p>
        </Link>
        <Link href={"/signup"}>
          <p className="text-[16px] text-[#2563EB] font-normal normal">
            Sign up
          </p>
        </Link>
      </div>
    </div>
  );
}
