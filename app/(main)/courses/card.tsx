import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick: (id: number) => void;
}

const Card = ({
  id,
  title,
  imageSrc,
  isActive,
  onClick,
  disabled,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "cursor-events-none opacity-50",
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end">
        {isActive && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] w-4 h-4"/>
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}       
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="text-neutral-700 text-center font-bold mt-3">
        {title}
      </p>
    </div>
  )
}

export default Card