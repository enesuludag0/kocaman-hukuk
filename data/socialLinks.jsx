import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, key: "facebook", textColor: "text-[#3B5998]", bgColor: "bg-[#3B5998]" },
  {
    href: "https://instagram.com",
    icon: <FaInstagram />,
    key: "instagram",
    textColor: "text-[#BA1D7E]",
    bgColor: "bg-[#BA1D7E]"
  },
  { href: "https://x.com", icon: <FaXTwitter />, key: "twitter", textColor: "text-[#000]", bgColor: "bg-[#000]" },
  { href: "https://youtube.com", icon: <FaYoutube />, key: "youtube", textColor: "text-[#FF0033]", bgColor: "bg-[#FF0033]" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, key: "linkedin", textColor: "text-[#0077B5]", bgColor: "bg-[#0077B5]" }
];

export const colorMap = {
  facebook: "hover:!text-[#3B5998]",
  instagram: "hover:!text-[#BA1D7E]",
  twitter: "hover:!text-[#fff]",
  //   twitter: "group-hover:text-[#1C96E8]",
  youtube: "hover:!text-[#FF0033]",
  linkedin: "hover:!text-[#0077B5]"
};
