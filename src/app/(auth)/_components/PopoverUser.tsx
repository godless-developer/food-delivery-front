"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export function PopoverUser() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-center p-2 bg-[#EF4444] rounded-full">
          <User />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-[2px] mr-4 w-full h-[104px] flex flex-col gap-[6px] py-4 items-center">
        <p className="text-[20px] font-semibold text-[#09090B]">{userEmail}</p>
        <Link href={"./login"} className="bg-[#f4f4f5]  rounded-full py-2 px-4">
          Sign out
        </Link>
      </PopoverContent>
    </Popover>
  );
}
