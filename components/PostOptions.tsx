"use client";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useDeletePost } from "@/hooks/post";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  postId: string;
  isPostMine: boolean;
  className?: string;
};

function PostOptions({ postId, isPostMine, className }: Props) {
  const { mutate: deletePost, isPending } = useDeletePost();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MoreHorizontal
          className={cn("h-5 w-5 cursor-pointer dark:text-neutral-400", className)}
        />
      </DialogTrigger>
      <DialogContent className="dialogContent">
        <DialogTitle></DialogTitle>
        {isPostMine && (
          <div className="postOption">
            <button
              type="button"
              onClick={() => deletePost(postId)}
              disabled={isPending}
              className="text-red-500 font-bold disabled:cursor-not-allowed w-full p-3"
            >
              {isPending ? "Deleting..." : "Delete post"}
            </button>
          </div>
        )}

        {isPostMine && (
          <Link
            scroll={false}
            href={`/dashboard/p/${postId}/edit`}
            className="postOption p-3"
          >
            Edit
          </Link>
        )}

        <div className="postOption border-0">
          <button type="button" className="w-full p-3">
            Hide like count
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PostOptions;
