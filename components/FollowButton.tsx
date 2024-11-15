"use client"
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function FollowButton({
  profileId,
  isFollowing,
  className,
  buttonClassName,
}: {
  profileId: string;
  isFollowing?: boolean;
  className?: string;
  buttonClassName?: string;
}) {
  return (
    <form action={() => {}} className={className}>
      <input type="hidden" value={profileId} name="id" />
      <button
        className={buttonVariants({
          variant: isFollowing ? "secondary" : "default",
          className: cn("!font-bold w-full", buttonClassName),
          size: "sm",
        })}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </form>
  );
}

export default FollowButton;