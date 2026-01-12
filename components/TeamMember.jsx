import { socialLinks } from "@/data/socialLinks";
import { teamMemberInfo } from "@/data/teamMemberInfo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GlareHover from "./ui/GlareHover";

const TeamMember = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-16 gap-y-14 sm:gap-y-16 md:gap-y-18 lg:gap-y-20">
          {teamMemberInfo.map((member, index) => (
            <div key={index} className="relative group flex flex-col items-center justify-center gap-4">
              {/* RESİM */}
              <div className="bg-[#19083D] p-4">
                <GlareHover
                  width="100%"
                  height="100%"
                  borderRadius="0px"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={1000}
                  playOnce={false}
                  className="border-0"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/resim7.png"
                    alt={member.name}
                    width={800}
                    height={800}
                    className="object-cover border-6 border-gray-100 p-8 pointer-events-none select-none"
                  />
                </GlareHover>
                {/* HOVER İLETİŞİM */}
                {/* <div
                    className={`absolute inset-x-0 bottom-6 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      activeIndex === index ? "opacity-100" : ""
                    }`}
                  >
                    <ul className="flex items-center justify-center gap-4 bg-white rounded-md px-4 py-2">
                      <li>
                        <a href={member.phone} className="text-red-600 text-xl hover:brightness-75">
                          <FaPhone />
                        </a>
                      </li>
                      <li>
                        <a href={member.whatsapp} className="text-green-500 text-[27px] hover:brightness-75">
                          <FaWhatsapp />
                        </a>
                      </li>
                      <li>
                        <a href={member.email} className="text-cyan-600 text-[23px] hover:brightness-75">
                          <FaEnvelope />
                        </a>
                      </li>
                    </ul>
                  </div> */}
              </div>

              {/* İSİM & POZİSYON */}
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-base sm:text-lg md:text-xl">{member.name}</h3>
                <p className="text-neutral-600 text-sm sm:text-base">{member.position}</p>
              </div>

              {/* SOCIAL MEDIA */}
              <ul className="flex items-center justify-center gap-3">
                {socialLinks
                  .filter((_, index) => index !== socialLinks.length - 2)
                  .map((link) => (
                    <li>
                      <GlareHover
                        width="100%"
                        height="100%"
                        borderRadius="0px"
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                        className="border-0"
                        style={{ position: "relative" }}
                      >
                        <Link href={link.href} target="_blank" className={`block text-white p-2 ${link.bgColor}`}>
                          {link.icon}
                        </Link>
                      </GlareHover>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
