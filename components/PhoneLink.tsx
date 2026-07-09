"use client";

import { useState } from "react";
import { contact } from "@/content/portfolio";
import { PhoneIcon } from "@/components/Icons";

// The phone number is stored base64-encoded and only decoded when a visitor
// clicks to reveal it — it never appears in the page HTML, and even in the
// rendered UI it stays masked until deliberately requested.
export default function PhoneLink({ className = "" }: { className?: string }) {
  const [phone, setPhone] = useState<string | null>(null);

  if (phone) {
    return (
      <a href={`tel:${phone.replace(/ /g, "")}`} className={className}>
        <PhoneIcon />
        {phone}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPhone(atob(contact.phoneEncoded))}
      className={`${className} cursor-pointer`}
      aria-label="Reveal phone number"
    >
      <PhoneIcon />
      +94 ·· ··· ···· <span className="font-normal text-slate-400">(click to reveal)</span>
    </button>
  );
}
