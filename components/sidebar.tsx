import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-items";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props = {}) => {
  return (
    <div
      className={cn(
        "flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </h1>
      </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem/>
      </div>
    </div>
  );
};
