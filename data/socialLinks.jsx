import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, key: "facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, key: "instagram" },
  { href: "https://x.com", icon: <FaXTwitter />, key: "twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, key: "youtube" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, key: "linkedin" }
];

export const colorMap = {
  facebook: "group-hover:text-[#0866FF]",
  instagram: "group-hover:text-[#F403AF]",
  twitter: "group-hover:text-[#000]",
  //   twitter: "group-hover:text-[#1C96E8]",
  youtube: "group-hover:text-[#FF0033]",
  linkedin: "group-hover:text-[#0A66C2]"
};
