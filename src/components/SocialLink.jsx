import React from "react";
const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="text-2xl text-fg-muted transition-colors hover:text-fg"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
export default SocialLink;
