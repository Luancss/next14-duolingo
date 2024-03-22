import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {imageSrc: string, title: string};
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="courses">
        <Button variant="ghost">
          <Image
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href="/shop">
      <Button variant="ghost" className="text-orange-500">
        <Image
           src="/points.svg"
           width={28}
           height={28}
           alt="Points"
           className="mr-2"
        />
        {points}
      </Button>
      </Link>
      <Link href="/shop">
      <Button variant="ghost" className="text-rose-500">
        <Image
           src="/heart.svg"
           width={22}
           height={22}
           alt="Hearts"
           className="mr-2"
        />
        {hasActiveSubscription 
          ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> 
          : hearts}
      </Button>
      </Link>
    </div>
  )
}