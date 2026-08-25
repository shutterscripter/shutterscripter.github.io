import React from "react";
const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface/25 text-lg text-surface/70 transition-colors hover:bg-surface hover:text-fg"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
export default SocialLink;
