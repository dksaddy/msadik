"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export default function EasyMethodMenu({ logLine }) {
  const easyOptions = [
    { name: "Phone", url: "tel:+1234567890", icon: <FaPhone /> },
    { name: "Mail", url: "mailto:msadik3086@gmail.com", icon: <FaEnvelope /> },
    { name: "WhatsApp", url: "https://wa.me/1234567890", icon: <FaWhatsapp /> },
    { name: "Messenger", url: "https://m.me/yourusername", icon: <FaFacebookMessenger /> },
  ];

  const handleClick = (opt) => {
    if (logLine) logLine(`You clicked: ${opt.name}`);
    window.open(opt.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {easyOptions.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(opt)}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {opt.icon} {opt.name}
        </button>
      ))}
    </div>
  );
}
