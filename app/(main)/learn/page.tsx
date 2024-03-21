import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const page = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>My sticky sidebar</StickyWrapper>
      <FeedWrapper>
        <div className="h-[200px] w-full bg-blue-500"/>
      </FeedWrapper>
    </div>
  );
};

export default page;
