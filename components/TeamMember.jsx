import { teamMemberInfo } from "@/data/teamMemberInfo";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const TeamMember = () => {
  return (
    <section className="bg-gray-100 flex items-center justify-center gap-16 py-16 sm:py-20 md:py-24 lg:py-28">
      {teamMemberInfo.map((member, index) => (
        <div key={index} className="group relative flex flex-col items-center gap-6">
          <div className="cursor-pointer">
            <Image
              src={member.photo}
              alt={member.name}
              width={300}
              height={300}
              className="object-cover rounded-3xl pointer-events-none select-none"
            />
          </div>

          <div className="absolute bottom-24 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ul className="bg-white flex items-center justify-center gap-4 rounded-xl px-4 py-2">
              <li>
                <Link
                  href={member.phone}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-lg cursor-pointer"
                >
                  <FaPhone />
                </Link>
              </li>
              <li>
                <Link href={member.whatsapp} className="text-green-500 text-2xl cursor-pointer">
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link href={member.email} className="text-cyan-600 text-xl cursor-pointer">
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl">{member.name}</h3>
            <p className="text-gray-600 italic">{member.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamMember;
