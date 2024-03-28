"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId: typeof userProgress.$inferSelect.activeCourseId;  
};

export const List = ({courses, activeCourseId}: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          active={course.id === activeCourseId}
          onClick={() => {}}
          disabled={false}
        />
      ))}
    </div>
  );
};
