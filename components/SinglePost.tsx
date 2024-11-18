import { getPostById } from "@/lib/data";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import { Card } from "./ui/card";
import PostActions from "./PostActions";
import Link from "next/link";
import PostComments from "./PostComments";
import CommentForm from "./commentForm";
import { Comment } from "@/gql/graphql";

interface SinglePostProps {
  id: string;
}

async function SinglePost({ id }: SinglePostProps) {
  const post = await getPostById(id);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-gray-400 text-sm">Post not found.</p>
      </div>
    );
  }




  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20 bg-[#141414] py-4 px-4 rounded-md">
        <div className="flex flex-col space-y-2.5">
          <div className="flex items-center justify-between px-3 sm:px-0">
            <div className="flex space-x-3 items-center">
              <UserAvatar profileImageURL={post.author?.profileImageURL} />
              <div className="text-sm">
                <p className="space-x-1">
                  <span className="font-semibold">{post.author?.username}</span>
                  <span className="font-medium text-neutral-500 dark:text-neutral-400 text-xs">
                    •
                  </span>
                  1d ago
                </p>
              </div>
            </div>
          </div>

          {/* Card with Box Shadow */}
          <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src={post.imgURL}
              alt="Post Image"
              fill
              className="sm:rounded-md object-cover"
            />
          </Card>

          {/* Post Actions */}
          <PostActions
            bookmarked={post.bookmarked}
            hasLiked={post.userHasLiked}
            totalLikes={post.totalLikeCount}
            postId={post.id}
            className="px-3 sm:px-0"
          />

          {/* Post Content */}
          {post.content && (
            <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
              <Link href={`/dashboard/username`} className="font-bold">
                {post.author?.username}
              </Link>
              <p>{post.content}</p>
            </div>
          )}

          {/* Separator between comments and post */}
          <hr className="my-4 border-neutral-500" />

          {/* Show Total Comments */}
          <div className="mt-4 text-sm text-neutral-500">
            <span className="font-semibold">View All ({post.totalCommentCount}) Comments</span>
          </div>

          {/* Scrollable Comments Section */}
          <div
            className="mt-4 space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-neutral-500"
            style={{ maxHeight: "300px" }} // Adjust height as needed
          >
            <PostComments comments={post?.comments?.filter((comment): comment is Comment => comment !== null)} />

          </div>

          {/* Input Box for Adding Comment */}
          <CommentForm />
        </div>
      </div>
    </main>
  );
}

export default SinglePost;
