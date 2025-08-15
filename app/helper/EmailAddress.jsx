"use client"
import { useState } from "react";

export default function EmailCopy({ hero }) {
  const [copied, setCopied] = useState(false);

  const email = "msadik3086@gmail.com";

  const styleFooter = "text-blue-600 hover:underline text-sm flex items-center justify-center md:justify-start space-x-2 cursor-pointer";
  const styleHero = "text-blue-600 text-xs md:text-sm space-x-2 cursor-pointer";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Hide after 2s
    });
  };

  return (
    <div
      onClick={handleCopy}
      className={hero ? styleHero : styleFooter}
    >
      {
        !hero &&
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      }
      <span>{email}</span>
      {copied && <span className="text-blue-600 text-xs font-bold">Copied!</span>}
    </div>
  );
}
