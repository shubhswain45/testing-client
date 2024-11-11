"use client";

import ActionIcon from "@/components/ActionIcon";
import { Send } from "lucide-react";

function ShareButton() {
  return (
    <ActionIcon>
      <Send className="h-6 w-6" />
    </ActionIcon>
  );
}

export default ShareButton;
