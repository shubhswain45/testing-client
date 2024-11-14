import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import type { Post } from "@/gql/graphql";
import UserAvatar from "./UserAvatar";
import PostActions from "./PostActions";
import { useCurrentUser } from "@/hooks/auth";
import PostOptions from "./PostOptions";

function Post({ post }: { post: Post }) {
  const { data, isLoading } = useCurrentUser();

  if(isLoading) return <h1>Loading....</h1>

  // Dummy post data
  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <UserAvatar profileImageURL={post.author?.profileImageURL} />
          <div className="text-sm">
            <p className="space-x-1">
              <span className="font-semibold">{post.author?.username}</span>
              <span
                className="font-medium text-neutral-500 dark:text-neutral-400 text-xs"
              >
                •
              </span>
              {/* <Timestamp createdAt={post.createdAt} /> */}
              1d ago
            </p>
          </div>
        </div>

        <PostOptions postId={post.id} isPostMine={post.author?.id == data?.getCurrentUser?.id} />
      </div>

      <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md cursor-pointer">
        <Image
          src={post.imgURL}
          alt="Post Image"
          fill
          className="sm:rounded-md object-cover"
        />
      </Card>

      <PostActions bookmarked={post.bookmarked} hasLiked={post.userHasLiked} totalLikes={post.totalLikeCount} postId={post.id} className="px-3 sm:px-0" />

      {post.content && (
        <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
          <Link href={`/dashboard/username`} className="font-bold">
            {post.author?.username}
          </Link>
          <p>{post.content}</p>
        </div>
      )}

      {/* <Comments postId={post.id} comments={post.comments} user={session.user} /> */}
    </div>
  );
}

export default Post;
