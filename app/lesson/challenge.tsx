import { challengeOptions, challenges } from "@/db/schema";

type Props = {
  options: typeof challengeOptions.$inferSelect[];
  onSelect: (id: number) => void;
  status: "corret" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: typeof challenges.$inferSelect["type"];
};

export const Challenge = ({}: Props) => {
  return (
    <div>
      
    </div>
  )
}