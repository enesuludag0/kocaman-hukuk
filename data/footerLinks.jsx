import { FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { links } from "./links";

export const footerLinks = [
  {
    title: "Hızlı Bağlantılar",
    icons: <FaAngleRight />,
    links: [
      { label: "Anasayfa", href: "/" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Çalışma Alanlarımız", href: "/calisma-alanlarimiz" },
      { label: "İletişim", href: "/iletisim" }
    ]
  },
  {
    title: "Çalışma Alanlarımız",
    icons: <FaAngleRight />,
    links: links
      .find((link) => link.label === "Çalışma Alanlarımız")
      ?.dropdown.map((item) => ({
        label: item.label,
        href: item.href
      }))
  },
  {
    title: "Bize Ulaşın",
    contacts: [
      {
        icon: <FaLocationDot />,
        label: "Kavaklıdere Mh. Büklüm Cd. No:23/5 Çankaya/Ankara",
        url: "https://maps.app.goo.gl/HB9CEXCiYq65uLBUA"
      },
      { icon: <FaPhoneAlt />, label: "+90 505 367 90 77", url: "tel:+905053679077" },
      { icon: <BsEnvelopeFill />, label: "kocamanhukuk@gmail.com", url: "mailto:kocamanhukuk@gmail.com" }
    ]
  }
];
