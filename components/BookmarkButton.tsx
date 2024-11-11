"use client";

import ActionIcon from "@/components/ActionIcon";
import { Bookmark } from "lucide-react";

function BookmarkButton() {
  return (
    <form className="ml-auto">
      <input type="hidden" name="postId" value="post_id_placeholder" />
      <ActionIcon>
        <Bookmark className="h-6 w-6 fill-black dark:fill-white" />
      </ActionIcon>
    </form>
  );
}

export default BookmarkButton;
