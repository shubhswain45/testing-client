import PostsGrid from "@/components/PostsGrid";
import { getUserPosts } from "@/lib/data";
import type { Post } from "@/gql/graphql";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

async function ProfilePage({ params }: ProfilePageProps) {
  const posts = await getUserPosts(params.username);

  // Filter out null values
  const filteredPosts = posts?.filter((post): post is Post => post !== null);

  return <PostsGrid posts={filteredPosts} />;
}

export default ProfilePage;
