"use client";

import { Heart } from "lucide-react";  // Import Heart icon
import ActionIcon from "./ActionIcon";
import { useLikePost } from "@/hooks/post";

function LikeButton({ totalLikes, postId, hasLiked }: { totalLikes: number | undefined | null, postId: string, hasLiked: boolean | null | undefined }) {
  const { mutate: likePost, isPending } = useLikePost();

  return (
    <div className="flex flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();  // Prevent the default form submission
          likePost(postId);  // Call the likePost function
        }}
      >
        <input type="hidden" name="postId" value="post_id_placeholder" />
        <ActionIcon>
          {isPending ? (
            <div className="spinner" />
          ) : hasLiked ? (
            <Heart className="h-6 w-6 text-red-500 fill-red-500" />  // Filled heart when user has liked
          ) : (
            <Heart className="h-6 w-6 text-gray-500" />  // Unfilled heart when user hasn't liked
          )}
        </ActionIcon>
      </form>
      <p className="text-sm font-bold dark:text-white">{totalLikes} likes</p>
    </div>
  );
}

export default LikeButton;
