import Cover from "@/components/Cover";
import { FaLocationDot, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import Deneme from "@/components/Deneme";

const Iletisim = () => {
  return (
    <>
      <Cover />
      <Deneme />

      {/* CONTACT INFO */}
      {/* <section className="w-full bg-yellow-600 py-12">
        <div className="container h-full grid grid-cols-3 gap-24 px-24">
          <div className="colspan-1 flex flex-col items-center gap-4 text-3xl">
            <FaLocationDot className="text-4xl" />
            <h3 className="font-medium uppercase">Adres</h3>
            <p className="text-xl text-center">Kavaklıdere Mh. Büklüm Cd. No:23/5 Çankaya/Ankara</p>
          </div>
          <div className="colspan-1 flex flex-col items-center gap-4 text-3xl">
            <FaPhone className="text-4xl" />
            <h3 className="font-medium uppercase">Telefon</h3>
            <p className="text-xl text-center">0505 367 90 77</p>
          </div>
          <div className="colspan-1 flex flex-col items-center gap-4 text-3xl">
            <BsEnvelopeFill className="text-4xl" />
            <h3 className="font-medium uppercase">E-posta</h3>
            <p className="text-xl text-center">kocamanhukuk@gmail.com</p>
          </div>
        </div>
      </section> */}

      {/* SOCIAL MEDIA */}
      {/* <section className="container flex justify-center gap-24 py-4 mt-12">
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                className="block border border-black text-black text-xl p-4 hover:bg-black hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </section> */}

      {/* CONTACT FORM */}
      {/* <section className="bg-white py-24">
        <div className="container flex flex-col gap-8 px-36">
          <h1 className="text-5xl text-center font-semibold uppercase pb-6">
            Bizimle
            <em className="font-bold text-yellow-600"> İletişime </em>
            Ge
            <span className="relative inline-block">
              c<span className="absolute -bottom-1 left-2 w-3 border-b-4 border-black"></span>
            </span>
            in
          </h1>
          <form action="">
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Adınız"
                  required
                  className="border-none outline-none rounded-none ring-1 ring-gray-300 focus:ring-black mt-1 py-2 px-3"
                />
              </div>
              <div className="w-1/2 flex flex-col mb-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Soyadınız"
                  required
                  className="border-none outline-none rounded-none ring-1 ring-gray-300 focus:ring-black mt-1 py-2 px-3"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-Posta Adresiniz"
                  required
                  className="border-none outline-none rounded-none ring-1 ring-gray-300 focus:ring-black mt-1 py-2 px-3"
                />
              </div>
              <div className="w-1/2 flex flex-col mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Telefon Numaranız"
                  required
                  className="border-none outline-none rounded-none ring-1 ring-gray-300 focus:ring-black mt-1 py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <textarea
                name="message"
                rows="5"
                placeholder="Mesajınız"
                required
                className="border-none outline-none rounded-none ring-1 ring-gray-300 focus:ring-black mt-1 py-2 px-3"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-black text-white border-1 rounded-none shadow-sm uppercase tracking-wider -ml-[0.5px] px-7 py-2 hover:bg-white hover:border-black hover:text-black transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </section> */}

      {/* GOOGLE MAP */}
      <section className="w-full h-[550px] shadow-2xl overflow-hidden mt-8 mb-24">
        <iframe
          className="size-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3668099741976!2d32.857161875851624!3d39.910806771525486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f299746f695%3A0x4db688100fb543e3!2sAv.%20Levent%20KOCAMAN%20-%20Kocaman%20Hukuk%20%26%20Dan%C4%B1%C5%9Fmanl%C4%B1k!5e0!3m2!1str!2str!4v1753472535053!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Iletisim;
