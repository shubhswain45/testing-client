"use client";
import React from 'react';
import { useFetchFeedPosts } from '@/hooks/post';
import Post from '@/components/Post'; // Ensure correct path
import { PostsSkeleton } from './Skeletons'; // Ensure correct path

function Posts() {
  const { data, isLoading } = useFetchFeedPosts({
    take: 10, // Example: fetch 10 posts at a time (you can adjust this value)
    cursor: null, // No cursor needed, fetch all posts at once
  });

  if (isLoading) {
    return <PostsSkeleton />;
  }

  if (!data?.posts || data.posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <>
      {data.posts.map((post) => (
        <Post key={post?.id} post={post} />
      ))}
    </>
  );
}

export default Posts;
