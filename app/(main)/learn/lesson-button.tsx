"use client"

import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import {CircularProgressbarWithChildren} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
}

export const LessonButton= ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let identationLevel;

  if (cycleIndex <= 2) {
    identationLevel = cycleIndex
  } else if (cycleIndex < 4) {
    identationLevel = 4 - cycleIndex;
  }  else if (cycleIndex < 6) {
    identationLevel = 4 - cycleIndex;
  } else {
    identationLevel = cycleIndex - 8;
  }

  const rightPosition = identationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <div>
      {id}
    </div>
  )
}
