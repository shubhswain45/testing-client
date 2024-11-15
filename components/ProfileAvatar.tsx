"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function ProfileAvatar({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="dialogContent">
                <DialogHeader>
                    <DialogTitle className="mx-auto font-medium text-xl py-5">
                        Change Profile Photo
                    </DialogTitle>
                </DialogHeader>

                <button className="text-red-500 border-b border-zinc-300 dark:border-neutral-700 font-bold w-full text-sm p-3">
                    Remove Current Photo
                </button>

                <input type="submit" hidden />

                <DialogClose className="postOption border-0 w-full p-3">
                    Cancel
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default ProfileAvatar;
