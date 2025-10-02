"use client"
import { useState } from "react";
import { GoCopy } from "react-icons/go";
import { FaCheckDouble } from "react-icons/fa6";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);

  const email = "msadik3086@gmail.com";

  const styleHero = "text-yellow-600 text-sm space-x-2 cursor-pointer flex p-1 font-medium";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Hide after 2s
    });
  };

  return (
    <div
      onClick={handleCopy}
      className={styleHero}
    >
      <span>{email}</span>
      {copied ? 
      <FaCheckDouble className="mt-1"/> 
      : 
      <GoCopy className="mt-1"/>}
    </div>
  );
}
