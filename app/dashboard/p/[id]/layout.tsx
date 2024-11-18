import Header from "@/components/Header";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;























/**
 * 
 * 
 * // src/api/posts.ts
const getFeedPosts = async (args: { cursor?: string; take?: number }, userId: string) => {
  const { cursor, take = 10 } = args;

  // Fetch posts by users whom the current user follows
  const posts = await prismaClient.post.findMany({
    take, // Number of posts to fetch
    skip: cursor ? 1 : 0, // Skip the cursor post if it exists
    cursor: cursor ? { id: cursor } : undefined, // Start fetching after the cursor
    where: {
      author: {
        followers: {
          some: {
            followerId: userId, // Match users followed by the current user
          },
        },
      },
    },
    orderBy: { createdAt: "desc" }, // Order by most recent posts
    include: {
      _count: {
        select: { likes: true }, // Count likes
      },
      likes: {
        where: { userId }, // Check if the user has liked the post
        select: { userId: true },
      },
      bookmarks: {
        where: { userId }, // Check if the user has bookmarked the post
        select: { userId: true },
      },
      author: {
        select: { id: true, username: true, profileImageURL: true }, // Include author's details
      },
    },
  });

  // Map the posts to include totalLikeCount, userHasLiked, and bookmarked status
  return posts.map((post) => ({
    ...post,
    totalLikeCount: post._count.likes,
    userHasLiked: post.likes.length > 0,
    bookmarked: post.bookmarks.length > 0,
  }));
};


 
// frontend

 * import React, { useState, useEffect } from "react";

const PaginatedPosts = () => {
  const [posts, setPosts] = useState<any[]>([]); // List of posts
  const [cursor, setCursor] = useState<string | null>(null); // Cursor for pagination
  const [loading, setLoading] = useState(false); // Loading state
  const [hasMore, setHasMore] = useState(true); // Whether more posts are available

  // Function to fetch paginated posts
  const fetchPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/posts?cursor=${cursor || ""}&take=5`
      );
      const data = await response.json();

      if (data.posts.length > 0) {
        setPosts((prev) => [...prev, ...data.posts]); // Append new posts
        setCursor(data.posts[data.posts.length - 1].id); // Update cursor
      } else {
        setHasMore(false); // No more posts available
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Paginated Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{new Date(post.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!loading && hasMore && (
        <button
          onClick={fetchPosts}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
      {!hasMore && <p>No more posts to load</p>}
    </div>
  );
};

export default PaginatedPosts;

 */