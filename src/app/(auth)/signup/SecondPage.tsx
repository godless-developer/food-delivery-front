import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SecondPage() {
  return (
    <div className="bg-white w-[416px] h-[395px] p-1 flex flex-col gap-4">
      <button className="flex justify-center items-center rounded-md bg-[#f5f5f7] w-[44px] h-11 border-[1px] border-[#d4d4d6]">
        <ChevronLeft />
      </button>
      <div className="flex flex-col gap-2 items-start justify-center">
        <p className="text-[24px] font-semibold normal">Create your account</p>
        <p className="text-[16px] font-normal normal text-[#71717a]">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="border-[1px] border-[#d4d4d6] rounded-md h-9 w-full px-2 py-5"
      />
      <input
        type="password"
        name="confirm"
        id="confirm"
        placeholder="Confirm"
        className="border-[1px] border-[#d4d4d6] rounded-md h-9 w-full px-2 py-5"
      />
      <div className="flex gap-3 justify-start items-center">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p className="text-[15px] font-normal normal text-[#71717a]">
          Show password
        </p>
      </div>
      <Link href="/login">
        <button className="bg-[#d4d4d6] rounded-md h-9 w-full flex justify-center items-center">
          Let's Go
        </button>
      </Link>
      <div className="flex gap-3 justify-center items-center">
        <Link href={"/login"}>
          <p className="text-[16px] font-normal normal text-[#71717a]">
            Already have an account?
          </p>
        </Link>
        <Link href={"/login"}>
          <p className="text-[16px] text-[#2563EB] font-normal normal">
            Log in
          </p>
        </Link>
      </div>
    </div>
  );
}
