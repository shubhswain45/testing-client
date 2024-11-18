import PostsGrid from "@/components/PostsGrid";
import { getUserPosts } from "@/lib/data";
import type { Post } from "@/gql/graphql";

// The params object is passed as an argument to the ProfilePage component.
async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  // Fetch the posts for the given user
  const username = (await params).username
  const posts = await getUserPosts(username);

  // Filter out null values
  const filteredPosts = posts?.filter((post): post is Post => post !== null);

  // Render the PostsGrid with the filtered posts
  return <PostsGrid posts={filteredPosts} />;
}

export default ProfilePage;
