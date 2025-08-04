import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";

export const contactLinks = [
  {
    icon: <FaLocationDot />,
    title: "Adres",
    label: "Kavaklıdere Mh. Büklüm Cd. No:23/5 Çankaya/Ankara",
    href: "https://maps.app.goo.gl/HB9CEXCiYq65uLBUA"
  },
  {
    icon: <FaPhoneAlt />,
    title: "Telefon",
    label: "+90 505 367 90 77",
    href: "tel:+905053679077"
  },
  { icon: <BsEnvelopeFill />, title: "E-posta", label: "kocamanhukuk@gmail.com", href: "mailto:kocamanhukuk@gmail.com" }
];
