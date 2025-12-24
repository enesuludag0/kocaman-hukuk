import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, key: "facebook", textColor: "text-[#3B5998]" },
  { href: "https://instagram.com", icon: <FaInstagram />, key: "instagram", textColor: "text-[#BA1D7E]" },
  { href: "https://x.com", icon: <FaXTwitter />, key: "twitter", textColor: "text-[#000]" },
  { href: "https://youtube.com", icon: <FaYoutube />, key: "youtube", textColor: "text-[#FF0033]" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, key: "linkedin", textColor: "text-[#0077B5]" }
];

export const colorMap = {
  facebook: "bg-[#3B5998]",
  instagram: "bg-[#BA1D7E]",
  twitter: "bg-[#000]",
  //   twitter: "bg-[#1C96E8]",
  youtube: "bg-[#FF0033]",
  linkedin: "bg-[#0077B5]"
};
