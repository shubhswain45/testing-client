"use client";
import React, { useState, useEffect } from "react";
import _Post from "@/components/Post"; // Ensure correct path
import { PostsSkeleton } from "./Skeletons"; // Ensure correct path
import { useGetFeedPosts } from "@/hooks/post"; // Ensure correct hook import
import { Post } from "@/gql/graphql";
import { useCurrentUser } from "@/hooks/auth";
import { useRouter } from "next/navigation";

const Posts = () => {
  const { data: user, isLoading: isFetchingCurrentUser } = useCurrentUser();
  const router = useRouter();

  const [cursor, setCursor] = useState<string | undefined | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, isLoading, isError } = useGetFeedPosts({
    take: 5,
    cursor,
  });

  // Check if loading user data or posts data
  const isLoadingData = isFetchingCurrentUser || isLoading;

  // Single useEffect to handle both user redirection and post loading
  useEffect(() => {
    if (isLoadingData) return; // Do nothing if still loading

    if (!user?.getCurrentUser) {
      // Redirect if user is not logged in
      router.replace("/");
      return; // Prevent further execution once redirected
    }

    if (data?.posts) {
      // Filter valid posts and append to existing posts
      const validPosts = data.posts.filter(
        (post): post is Post => post !== null && post !== undefined
      );
      setPosts((prevPosts) => [...prevPosts, ...validPosts]);
    }
  }, [data, isLoadingData, user, router]);

  // Loading skeleton while posts are loading
  if (isFetchingCurrentUser || !user?.getCurrentUser) {
    // Show a loading spinner or any skeleton you prefer while fetching user data
    return (
      <div className="flex justify-center items-center mt-40">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isLoading && posts.length === 0) {
    return <PostsSkeleton />; // Show post skeleton while posts are loading
  }

  // Error state
  if (isError) {
    return <div className="error">Failed to load posts.</div>;
  }

  // No posts available state
  if (!posts.length) {
    return <div>No posts available</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <_Post key={post.id} post={post} />
      ))}
      {/* Load more button */}
      {data?.hasMore && (
        <button
          className="button"
          onClick={() => setCursor(data.nextCursor)} // Update cursor to load more posts
        >
          Load More
        </button>
      )}
    </>
  );
};

export default Posts;
