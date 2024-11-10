"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { useCurrentUser } from "@/hooks/auth";
import Image from "next/image";

function ProfileLink() {
    const { data, isLoading } = useCurrentUser();
    const pathname = usePathname();

    const href = `/dashboard/${data?.getCurrentUser?.username}`;
    const isActive = pathname === href;

    return (
        <>
            <Link
                href={href}
                className={buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    className: cn("navLink", { "hidden md:flex": false }),
                    size: "lg",
                })}
            >
                {isLoading ? (
                    <div
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#e0e0e0", // Light gray color for skeleton
                            animation: "pulse 1.5s infinite", // Add a pulse animation
                        }}
                    />
                ) : (
                    <Image
                        src={
                            data?.getCurrentUser?.profileImageURL ||
                            "https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=3yECqrWF0dkAX-1fQPX&edm=ALlQn9MBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfC4YI9GjTczPKHhpu6gUJwwPYXUTESZ1WNE1OrYzfSCZQ&oe=656D360F&_nc_sid=e7f676"
                        }
                        width={35}
                        height={35}
                        alt={`${data?.getCurrentUser?.username}'s profile picture`}
                        className="rounded-full object-cover"
                    />
                )}
                <p
                    className={`${cn("hidden lg:block", {
                        "font-extrabold": isActive,
                    })}`}
                >
                    Profile
                </p>
            </Link>
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        background-color: #e0e0e0;
                    }
                    50% {
                        background-color: #d0d0d0; // Darker gray for animation
                    }
                    100% {
                        background-color: #e0e0e0;
                    }
                }
            `}</style>
        </>
    );
}

export default ProfileLink;
