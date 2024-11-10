"use client";
import Post from "@/components/Post"; // Ensure Post is imported if it's a separate component
import { fetchFeedPosts } from "@/data/fetchFeedPosts";
import { useFetchFeedPosts } from "@/hooks/post";
import { PostSkeleton } from "./Skeletons";

function Posts() {
  const { data: posts, isLoading } = useFetchFeedPosts();

  if (isLoading) {
    return <PostSkeleton />;
  }

  // Ensure posts is not null or undefined before proceeding
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>; // or return null to display nothing
  }

  return (
    <>
      {posts
        .filter((post): post is Post => post !== null) // Type guard to ensure `post` is not null
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </>
  );
}

export default Posts;
