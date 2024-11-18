"use client";
import { useCurrentUser } from '@/hooks/auth';
import React from 'react';
import { Button, buttonVariants } from './ui/button';
import { Loader, MoreHorizontal, Settings } from 'lucide-react';
import Link from 'next/link';
import { useFollowUser } from '@/hooks/user';
import { cn } from '@/lib/utils';

function UserOptions({
    profileUsername,
    profileId,
    followed
}: {
    profileUsername: string;
    profileId: string;
    followed: boolean;
}) {
    const { data, isLoading } = useCurrentUser();
    const { mutate: followUser, isPending } = useFollowUser();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3">
            <p className="font-semibold text-lg">{profileUsername}</p>

            {isLoading ? (
                <>
                    <Button size="icon" variant="ghost" className="md:order-last">
                        {/* <Settings /> */}
                    </Button>
                    <div
                        className={buttonVariants({
                            className: "!font-bold",
                            variant: "secondary",
                            size: "sm",
                        })}
                    >
                        {/* Loader if needed */}
                    </div>
                    <Button variant="secondary" className="font-bold" size="sm">
                        {/* Loader if needed */}
                    </Button>
                </>
            ) : data?.getCurrentUser?.username === profileUsername ? (
                <>
                    <Button size="icon" variant="ghost" className="md:order-last">
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
                    <Button variant="secondary" className="font-bold" size="sm">
                        View archive
                    </Button>
                </>
            ) : (
                <>
                    <Button size="icon" variant="ghost" className="md:order-last">
                        <MoreHorizontal />
                    </Button>

                    <button
                        className={buttonVariants({
                            variant: followed ? "secondary" : "default",
                            className: cn("!font-bold w-full"),
                            size: "sm",
                        })}
                        onClick={() => followUser(profileId)}
                        disabled={isPending} // Disable the button while mutation is pending
                    >
                        {isPending ? (
                            <Loader className="animate-spin mx-auto" size={20} />
                        ) : followed ? (
                            "Unfollow"
                        ) : (
                            "Follow"
                        )}
                    </button>

                    <Button variant="secondary" className="font-bold" size="sm">
                        Message
                    </Button>
                </>
            )}
        </div>
    );
}

export default UserOptions;
