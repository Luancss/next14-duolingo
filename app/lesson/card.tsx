import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status: "correct" | "wrong" | "none";
  type: typeof challenges.$inferSelect["type"];
}

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type
}: Props) => {
  return (
    <div
      onClick={() => {}}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
        selected && "border-skye-300 bg-skye-100 hover:bg-skye-100",
        selected && status === "correct" 
          && "border-green-300 bg-green-100 hover:bg-green-100",
        selected && status === "wrong" 
          && "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "",
      )}
    >
      Card
    </div>
  )
}