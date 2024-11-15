import PostsGrid from "@/components/PostsGrid";
import { getUserPosts } from "@/lib/data";
import type { Post } from "@/gql/graphql";

async function ProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  const posts = await getUserPosts(username);

  // Filter out null values
  const filteredPosts = posts?.filter((post): post is Post => post !== null);

  return <PostsGrid posts={filteredPosts} />;
}

export default ProfilePage;
