"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { DialogClose, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { useCommentPost, useDeleteCommentPost, useFetchComments } from "@/hooks/post";
import UserAvatar from "./UserAvatar";
import { Loader, MoreHorizontal } from "lucide-react";

type CommentModelProps = {
  postId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

function CommentModel({ postId, open, setOpen }: CommentModelProps) {
  const { mutate: commentPost, isPending, isSuccess } = useCommentPost();
  const { mutate: deleteCommentPost, isPending: isDeletingComment } = useDeleteCommentPost();
  const { data: comments, isLoading } = useFetchComments(postId);

  const [newComment, setNewComment] = useState<string>("");
  const [randomEmojis, setRandomEmojis] = useState<string[]>([]);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  const generateRandomEmojis = () => {
    const emojis = [
      "😊", "👍", "❤️", "😂", "😭", "🥰", "😎", "😢", "😍", "😄",
      "💯", "🙌", "👏", "🔥", "💥", "✨", "🤩", "🥳", "😜", "😇"
    ];
    return emojis.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  console.log(selectedEmoji);
  
  useEffect(() => {
    setRandomEmojis(generateRandomEmojis());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setNewComment("");
    }
  }, [isSuccess]);

  const handleAddComment = () => {
    commentPost({ postId, content: newComment });
  };

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
    setNewComment((prev) => prev + emoji);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-128 max-w-full p-6 rounded-lg shadow-lg flex flex-col items-center">
        <DialogTitle />
        <h2 className="text-lg font-semibold mb-4">Comments</h2>

        {isLoading ? (
          <div className="flex justify-center items-center w-full h-40">
            <Loader className="animate-spin mx-auto" size={40} />
          </div>
        ) : (
          <div className="comment-list space-y-5 w-full max-h-80 overflow-y-auto">
            {comments?.map((comment) => (
              <div key={comment?.id} className="comment-item flex items-start space-x-3">
                <UserAvatar profileImageURL={comment?.author?.profileImageURL} />
                <div className="comment-content flex flex-col space-y-1 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">{comment?.author?.username}</span>
                      <span className="text-xs">1d</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <MoreHorizontal className="h-5 w-5 cursor-pointer dark:text-neutral-400" />
                      </DialogTrigger>
                      <DialogContent className="dialogContent">
                        <DialogTitle></DialogTitle>
                        <div className="postOption">
                          <button className="text-red-500 font-bold w-full p-3" onClick={() => deleteCommentPost({commentId: comment?.id || "", postId})}>
                          {isDeletingComment ? "Deleting..." : "Delete"}
                          </button>
                        </div>

                        <DialogClose className="postOption border-0 w-full p-3">
                          Cancel
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-sm">{comment?.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="emoji-row flex justify-center space-x-8">
          {randomEmojis.map((emoji, index) => (
            <span
              key={index}
              role="img"
              aria-label={emoji}
              className="text-2xl cursor-pointer"
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="add-comment mt-0 flex items-center space-x-3 w-full justify-center">
          <div className="avatar w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm">
            Y
          </div>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-96 p-2 text-sm border-b-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-500"
          />

          <Button
            onClick={handleAddComment}
            disabled={!newComment.trim() || isPending}
            className="px-4 py-2 bg-blue-500 text-white rounded-full disabled:bg-gray-400 text-sm"
          >
            {isPending ? <Loader className="animate-spin mx-auto" size={30} /> : "Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommentModel;
