import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: boolean;
};

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
}: Props) => {
  return (
    <footer>
      
    </footer>
  )
}