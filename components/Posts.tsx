"use client";
import React, { useState, useEffect } from "react";
import _Post from "@/components/Post"; // Ensure correct path
import { PostsSkeleton } from "./Skeletons"; // Ensure correct path
import { useGetFeedPosts } from "@/hooks/post"; // Make sure this is the correct hook import
import { Post } from "@/gql/graphql";

const Posts = () => {
  const [cursor, setCursor] = useState<string | undefined | null>(null);
  const [posts, setPosts] = useState<Post[]>([]); // State to store accumulated posts
  const { data, isLoading, isError } = useGetFeedPosts({
    take: 10, // Fetch 10 posts at a time
    cursor, // Pass cursor to paginate
  });

  // Effect to append new posts to existing posts
  useEffect(() => {
    if (data?.posts && Array.isArray(data.posts)) {
      const validPosts = data.posts.filter(
        (post): post is Post => post !== null && post !== undefined
      );
      setPosts((prevPosts) => [...prevPosts, ...validPosts]);
    }
  }, [data]);

  // Loading skeleton
  if (isLoading && posts.length === 0) {
    return <PostsSkeleton />;
  }

  // Error state
  if (isError) {
    return <div className="error">Failed to load posts.</div>;
  }

  // No posts available
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
