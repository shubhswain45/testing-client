import FollowButton from "@/components/FollowButton";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";
import UserAvatar from "@/components/UserAvatar";
import UserOptions from "@/components/UserOptions";
import { Button, buttonVariants } from "@/components/ui/button";
import { getUserProfile } from "@/lib/data";
import { MoreHorizontal, Settings } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
  children: React.ReactNode;
};

// Shared function to fetch and return profile data along with metadata
async function getProfileWithMetadata(username: string) {
  const profile = await getUserProfile(username);
  if (!profile) {
    notFound();
  }

  console.log(profile);

  return {
    profile,
    metadata: {
      title: `${profile.fullName} (@${profile.username})`,
    },
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { metadata } = await getProfileWithMetadata(params.username);
  return metadata;
}

async function ProfileLayout({ children, params: { username } }: Props) {
  const { profile } = await getProfileWithMetadata(username);

  return (
    <>
      <ProfileHeader username={profile.username} />
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-x-5 md:gap-x-10 px-4">
          <ProfileAvatar>
            <UserAvatar
              profileImageURL={profile?.profileImageURL || ""}
              className="w-20 h-20 md:w-36 md:h-36 cursor-pointer"
            />
          </ProfileAvatar>

          <div className="md:px-10 space-y-4" style={{ marginLeft: "-10px" }}>
            <UserOptions profileUsername={profile.username} profileId={profile.id} followed={profile.followed} />

            <div className="flex items-center gap-x-7">
              <p className="font-medium">
                <strong>{profile?.totalPosts} posts</strong>
              </p>

              <Link
                href={`/dashboard/followers`}
                className="font-medium"
              >
                <strong>{profile?.totalFollowers}</strong> followers
              </Link>

              <Link
                href={`/dashboard/following`}
                className="font-medium"
              >
                <strong>{profile?.totalFollowings}</strong> following
              </Link>
            </div>

            <div className="text-sm">
              <div className="font-bold">{profile?.fullName}</div>
              <p>{profile?.bio}</p>
            </div>
          </div>
        </div>

        <ProfileTabs username={profile?.username} />

        {children}
      </div>
    </>
  );
}

export default ProfileLayout;
