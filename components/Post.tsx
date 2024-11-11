import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import type { Post } from "@/gql/graphql";
import UserAvatar from "./UserAvatar";
import PostActions from "./PostActions";

function Post({ post }: { post: Post }) {
  // Dummy post data
  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <UserAvatar user={post.author} />
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

        {/* <PostOptions post={post} userId={userId} /> */}
      </div>

      <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md">
        <Image
          src={post.imgURL}
          alt="Post Image"
          fill
          className="sm:rounded-md object-cover"
        />
      </Card>

      <PostActions hasLiked={post.hasLiked} totalLikes={post._count?.likes} postId={post.id} className="px-3 sm:px-0" />

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
