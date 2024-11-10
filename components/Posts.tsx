"use client";
import Post from "@/components/Post"; // Ensure Post is imported if it's a separate component
import { useFetchFeedPosts } from "@/hooks/post";
<<<<<<< HEAD
import { PostsSkeleton } from "./Skeletons";
=======
import { PostSkeleton, PostsSkeleton } from "./Skeletons";
>>>>>>> fe73bdfd4a6fd3382383b5988cc4bee1a8426972

function Posts() {
  const { data: posts, isLoading } = useFetchFeedPosts();

  if (isLoading) {
<<<<<<< HEAD
    return <PostsSkeleton />;
=======
    // Render three skeleton loaders
    return (
     <PostsSkeleton/>
    );
>>>>>>> fe73bdfd4a6fd3382383b5988cc4bee1a8426972
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
