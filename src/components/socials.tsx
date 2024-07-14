import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/gomesdevelop",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/cleber-gomes/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/clebergomes/",
  },
];

interface SocialsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  iconClassName?: string;
}

const Socials: React.FC<SocialsProps> = ({ className, iconClassName }) => {
  return (
    <div className={className}>
      {socials.map(({ icon, href }) => (
        <Link key={href} href={href} className={iconClassName}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
