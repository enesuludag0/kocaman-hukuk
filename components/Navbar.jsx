import Link from "next/link";
import { links } from "@/data/links";

const Navbar = () => {
  return (
    <nav className="relative">
      <ul className="flex space-x-8 font-bold text-xl uppercase">
        {links.map((link, i) => (
          <li key={i} className="relative group">
            {/* NAVBAR MENU */}
            <Link href={link.href} className="block group-hover:text-white p-4 transition-all duration-500">
              {link.label}
              <span className="absolute bottom-0 left-0 w-full border-b-[3px] scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500" />
            </Link>

            {/* DROPDOWN MENU */}
            {link.dropdown && (
              <ul className="absolute inset-x-0 bg-white shadow-main text-base opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                {link.dropdown.map((item, index) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block hover:text-black px-4 py-2">
                      {item.label}
                    </Link>
                    {index !== link.dropdown.length - 1 && <hr className="border-black" />}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>

    // <nav className="relative">
    //   <ul className="flex font-bold text-xl">
    //     {links.map((link) =>
    //       link.dropdown ? (
    //         <li key={link.label} className="relative group">
    //           <Link href={link.href} className="p-4 block group-hover:text-gray-300 transition-colors">
    //             {link.label}
    //           </Link>

    //           <ul className="absolute left-4 top-full bg-gray-800 shadow-md z-50 min-w-[200px] text-base opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
    //             {link.dropdown.map((item, index) => (
    //               <>
    //                 <li key={item.href}>
    //                   <Link href={item.href} className="block text-white px-4 py-2 hover:bg-white hover:text-gray-800">
    //                     {item.label}
    //                   </Link>
    //                 </li>
    //                 {index !== link.dropdown.length - 1 && <hr className="border-white" />}
    //               </>
    //             ))}
    //           </ul>
    //         </li>
    //       ) : (
    //         <li key={link.label}>
    //           <Link href={link.href} className="p-4 block hover:text-gray-300 transition-colors">
    //             {link.label}
    //           </Link>
    //         </li>
    //       )
    //     )}
    //   </ul>
    // </nav>

    // <nav className="">
    //   <ul className="flex space-x-8 font-bold text-xl">
    //     {links.map((link) => (
    //       <li key={link.label}>
    //         <Link href={link.href} className="hover:text-gray-300">
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
