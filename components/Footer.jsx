import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import { links } from "@/data/links";
import { FaAngleRight } from "react-icons/fa6";
import { contactLinks } from "@/data/contactLinks";

const Footer = () => {
  const workAreasLink = links.find((link) => link.href === "/calisma-alanlarimiz");

  return (
    <footer className="bg-[#1C0942] text-[#777] py-12 overflow-hidden">
      {/* FOOTER MAIN */}
      <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 font-medium">
        {/* LOGO AND SOCIAL LINKS */}
        <div className="max-lg:col-span-full flex flex-col items-center gap-8">
          <Image
            src="/images/logo.png"
            alt="Kocaman Hukuk Logo"
            width={200}
            height={50}
            draggable="false"
            className="pointer-events-none select-none"
          />

          <ul className="flex items-center gap-4 lg:mt-3">
            {socialLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.href}
                  className="relative block z-10 text-yellow-600 group-hover:text-red-950 group-hover:rotate-y-[360deg] transition-all duration-500 ease-in-out"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3 px-10 max-lg:px-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg md:text-xl text-[#cdcdcd] font-semibold uppercase">Hızlı Bağlantılar</h3>
            <hr className="w-12 h-[2.5px] bg-[#cdcdcd] border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={index} className="group w-fit">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm md:text-base group-hover:text-white transition-all duration-300"
                >
                  <FaAngleRight className="pt-[3px]" />
                  <span className="group-hover:underline decoration-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* WORK AREAS LINKS */}
        <div className="flex flex-col gap-3 px-2 max-lg:px-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg md:text-xl text-[#cdcdcd] font-semibold uppercase">Çalışma Alanlarımız</h3>
            <hr className="w-12 h-[2.5px] bg-[#cdcdcd] border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {workAreasLink.dropdown.map((link, index) => (
              <li key={index} className="group w-fit">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm md:text-base group-hover:text-white transition-all duration-300"
                >
                  <FaAngleRight className="pt-[3px]" />
                  <span className="group-hover:underline decoration-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT LINKS */}
        <div className="col-span-full sm:col-span-1 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg md:text-xl text-[#cdcdcd] font-semibold uppercase">Bize Ulaşın</h3>
            <hr className="w-12 h-[2.5px] bg-[#cdcdcd] border-none" />
          </div>
          <ul className="flex flex-col gap-1">
            {contactLinks.map((link, index) => (
              <li key={index} className="group w-fit">
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex gap-2.5 text-sm md:text-base group-hover:text-white transition-all duration-300"
                >
                  <span className="pt-1">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
