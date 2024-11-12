import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import ActionIcon from "./ActionIcon";
import BookmarkButton from "./BookmarkButton";

type Props = {
  className?: string;
  postId: string
  totalLikes: number | undefined | null
  hasLiked: boolean | null | undefined
};

function PostActions({ hasLiked, totalLikes, postId, className }: Props) {
  return (
    <div className={cn("relative flex items-start w-full gap-x-2", className)}>
      <LikeButton hasLiked={hasLiked} totalLikes={totalLikes} postId={postId} />
      <Link href={`/dashboard/p/`}>
        <ActionIcon>
          <MessageCircle className={"h-6 w-6"} />
        </ActionIcon>
      </Link>
      <ShareButton />
      <BookmarkButton />
    </div>
  );
}

export default PostActions;