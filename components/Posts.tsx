"use client";
import React from 'react';
import { useFetchFeedPosts } from '@/hooks/post';
import Post from '@/components/Post'; // Ensure correct path
import { PostsSkeleton } from './Skeletons'; // Ensure correct path

function Posts() {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useFetchFeedPosts({ take: 5, cursor: null });
 
  if (isLoading) {
    return <PostsSkeleton />;
  }

  if (!data?.pages || data.pages.length === 0 || !data.pages[0]?.posts) {
    return <div>No posts available</div>;
  }
  console.log(data);
  

  return (
    <>
      {data.pages
        .flatMap((page) => page?.posts) // Combine posts from all pages
        .map((post) => (
          <Post key={post?.id} post={post} />
        ))}

      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
}

export default Posts;
