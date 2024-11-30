import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

export function LinkButton({ href, title, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`p-4 rounded-2xl shadow-sm shadow-slate-700 bg-slate-700 ${className}`}
    >
      {title}
    </Link>
  );
}

export function pressButton() {
  return <></>;
}
