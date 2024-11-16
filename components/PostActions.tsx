"use client"
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import BookmarkButton from "./BookmarkButton";
import { Button } from "@/components/ui/button";
import CommentModel from "./CommentModel";
import { useState } from "react";

type PostActionsProps = {
  className?: string;
  postId: string;
  totalLikes?: number | null;
  hasLiked?: boolean | null;
  bookmarked?: boolean | null;
};

function PostActions({ bookmarked, hasLiked, totalLikes, postId, className }: PostActionsProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("relative flex items-start w-full gap-x-2", className)}>
      <LikeButton hasLiked={hasLiked} totalLikes={totalLikes} postId={postId} />

      <Button variant={"ghost"} size={"icon"} className="h-9 w-9" onClick={() => setOpen(true)}>
        <MessageCircle className={"h-6 w-6"} />
      </Button>

      <ShareButton />
      <BookmarkButton bookmarked={bookmarked} postId={postId}/>
      {open && <CommentModel postId={postId} open={open} setOpen={setOpen} />}
    </div>
  );
}

export default PostActions;
