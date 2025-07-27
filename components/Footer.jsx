import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import { links } from "@/data/links";
import { FaAngleRight } from "react-icons/fa6";
import { contactLinks } from "@/data/contactLinks";
import { footerLinks } from "@/data/footerLinks";

const Footer = () => {
  const link = links.find((link) => link.href === "/calisma-alanlarimiz");

  return (
    <footer className="bg-gray-400 min-h-80 pt-12">
      <div className="max-w-[1300px] mx-auto grid grid-cols-4 gap-8">
        {/* LOGO AND SOCIAL LINKS */}
        <div className="flex flex-col items-center gap-8 px-8">
          <Image
            src="/images/logo.png"
            alt="Kocaman Hukuk Logo"
            width={200}
            height={50}
            draggable="false"
            className="pointer-events-none select-none"
          />
          {/* <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, accusamus.</p> */}
          <ul className="flex gap-3">
            {socialLinks.map((link, index) => (
              <li key={index} className="relative group border border-black">
                <Link
                  href={link.href}
                  className="relative block z-10 p-3 text-black group-hover:rotate-y-[360deg] transition-transform duration-500 ease-in-out"
                >
                  {link.icon}
                </Link>
                <span className="absolute inset-0 z-0 origin-center scale-0 group-hover:scale-90 group-hover:bg-white transition-transform duration-500"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold uppercase">Hızlı Bağlantılar</h3>
            <hr className="w-[50px] h-[2.5px] bg-black border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="flex items-center gap-1">
                  <FaAngleRight className="pt-[3px]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* WORK AREAS LINKS */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold uppercase">Çalışma Alanlarımız</h3>
            <hr className="w-[50px] h-[2.5px] bg-black border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {link.dropdown.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="flex items-center gap-1">
                  <FaAngleRight className="pt-[3px]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT LINKS */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold uppercase">Çalışma Alanlarımız</h3>
            <hr className="w-[50px] h-[2.5px] bg-black border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} target="_blank" className="flex gap-2">
                  <span className="text-sm pt-[7px]">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-12 bg-black text-white mt-12">
        <div className="max-w-[1300px] mx-auto size-full flex items-center justify-between text-sm">
          <span>Copyright &copy; 2025 Kocaman Hukuk | Tüm Hakları Saklıdır.</span>
          <span>Enes Uludağ tarafından yapılmıştır.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//  {footerLinks.map((item, index) => (
//           <div key={index} className="flex flex-col gap-3">
//             <div className="flex flex-col gap-1">
//               <h3 className="text-xl font-semibold uppercase">{item.title}</h3>
//               <hr className="w-[50px] h-[2.5px] bg-black border-none" />
//             </div>

//             <ul className="flex flex-col gap-1">
//               {/* Eğer linkler varsa */}
//               {item.links &&
//                 item.links.map((linkItem, i) => (
//                   <li key={i}>
//                     <Link href={linkItem.href} className="flex items-center gap-1">
//                       <FaAngleRight className="text-sm pt-[3px]" />
//                       {linkItem.label}
//                     </Link>
//                   </li>
//                 ))}

//               {/* Eğer iletişim bilgileri varsa */}
//               {item.contacts &&
//                 item.contacts.map((contact, i) => (
//                   <li key={i}>
//                     <Link href={contact.url} target="_blank" className="flex gap-2">
//                       <span className="text-sm pt-[7px]">{contact.icon}</span>
//                       {contact.label}
//                     </Link>
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         ))}
