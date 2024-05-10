"use server";

import db from "@/db/drizzle";
import { getUserProgress } from "@/db/queries";
import { challenges } from "@/db/schema";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export const upsertChallengeProgress = async (challengeId: number) => {
  const {userId} = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();
  
  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  const challenge =  await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId)
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  const lessonId = challenge.lessonId;
}