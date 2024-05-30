"use client";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="ghost"
      onClick={() => {
        navigator.clipboard.writeText("chakkun1121");
        setCopied(true);
        toast("コピーしました");
      }}
    >
      {copied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
}
