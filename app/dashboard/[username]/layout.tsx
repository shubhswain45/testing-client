import FollowButton from "@/components/FollowButton";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";
import UserAvatar from "@/components/UserAvatar";
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

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const username = params.username;
  
    const profile = await getUserProfile(username);
  
    return {
        title: `${profile?.fullName} (@${profile?.username})`,
    };
  }

async function ProfileLayout({ children, params: { username } }: Props) {
  const profile = await getUserProfile(username);
  
  return (
    <>
      <ProfileHeader username={username} />
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-x-5 md:gap-x-10 px-4">
          <ProfileAvatar>
            <UserAvatar
              profileImageURL={""}
              className="w-20 h-20 md:w-36 md:h-36 cursor-pointer"
            />
          </ProfileAvatar>

          <div className="md:px-10 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3">
              <p className="font-semibold text-xl">username</p>
              {true ? (
                <>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="md:order-last"
                  >
                    <Settings />
                  </Button>
                  <Link
                    href={`/dashboard/edit-profile`}
                    className={buttonVariants({
                      className: "!font-bold",
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Edit profile
                  </Link>
                  <Button
                    variant={"secondary"}
                    className="font-bold"
                    size={"sm"}
                  >
                    View archive
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="md:order-last"
                  >
                    <MoreHorizontal />
                  </Button>
                  <FollowButton
                    isFollowing={false}
                    profileId={"iiii"}
                  />
                  <Button
                    variant={"secondary"}
                    className="font-bold"
                    size={"sm"}
                  >
                    Message
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-x-7">
              <p className="font-medium">
                <strong>4 posts</strong>
              </p>

              <Link
                href={`/dashboard/followers`}
                className="font-medium"
              >
                <strong>100</strong> followers
              </Link>

              <Link
                href={`/dashboard//following`}
                className="font-medium"
              >
                <strong>1000</strong> following
              </Link>
            </div>

            <div className="text-sm">
              <div className="font-bold">{profile?.fullName}</div>
              <p>{profile?.bio}</p>
            </div>
          </div>
        </div>

        <ProfileTabs />

        {children}
      </div>
    </>
  );
}

export default ProfileLayout;