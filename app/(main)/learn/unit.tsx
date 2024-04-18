import { lessons, units } from "@/db/schema";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect;
  } | undefined;
  activeLessonpercentage: number;
};

export const Unit = ({}: Props) => {
  return (
    <div>
      
    </div>
  )
}