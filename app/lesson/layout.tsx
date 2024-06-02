import React from "react";

type Props = {
  children: React.ReactNode;
};

function LessonLayout({children}: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  );
}

export default LessonLayout;