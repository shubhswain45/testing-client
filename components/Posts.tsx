import Post from "@/components/Post"; // Ensure Post is imported if it's a separate component
import { fetchFeedPosts } from "@/data/fetchFeedPosts";

async function Posts() {
  const posts = await fetchFeedPosts();

  if (!posts) {
    return null; // Or render a fallback UI if no posts are found
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
