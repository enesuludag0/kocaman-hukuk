import React from "react";
import { FaLocationDot, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const Deneme = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto flex items-start gap-10 py-24">
      {/* CONTACT INFO */}
      <div className="w-full flex flex-col gap-8 py-4">
        <div className="flex items-center gap-5 ml-2">
          <Image
            src="/images/icon.png"
            alt="Kocaman Hukuk icon"
            width={22}
            height={10}
            draggable={false}
            className="pointer-events-none select-none"
          />
          {/* <div className="h-full flex gap-1">
            <hr className="h-full border-2 border-red-950" />
            <hr className="h-full border-2 border-red-950" />
          </div> */}
          <h1 className="text-3xl font-semibold text-red-950 uppercase">İletişim Bilgileri</h1>
        </div>
        <hr />
        <div className="flex items-center gap-5">
          <div className="size-14 rounded-full flex items-center justify-center bg-red-950 text-white">
            <FaLocationDot className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold uppercase">Adres</h3>
            <p className="text-lg">Kavaklıdere Mh. Büklüm Cd. No:23/5 Çankaya/Ankara</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-5">
          <div className="size-14 rounded-full flex items-center justify-center bg-red-950 text-white">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold uppercase">Telefon</h3>
            <p className="text-lg">+90 505 367 90 77</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-5">
          <div className="size-14 rounded-full flex items-center justify-center bg-red-950 text-white">
            <BsEnvelopeFill className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold uppercase">E-posta</h3>
            <p className="text-lg">kocamanhukuk@gmail.com</p>
          </div>
        </div>
        <div className="bg-red-950 text-white flex flex-col gap-6 mt-4 px-10 py-7">
          <h1 className="text-xl font-semibold uppercase">Çalışma Saatlerimiz</h1>
          <div className="flex flex-col gap-2 text-gray-300/70 font-medium">
            <div className="flex items-center">
              <span className="whitespace-nowrap">Pazartesi - Cuma</span>
              <span className="w-full border-b border-gray-300/50 mx-5 mt-1" />
              <span className="whitespace-nowrap">09:00 - 18:00</span>
            </div>
            <div className="flex items-center">
              <span className="whitespace-nowrap">Cumartesi - Pazar</span>
              <span className="w-full border-b border-gray-300/50 mx-5 mt-1" />
              <span className="whitespace-nowrap">Kapalı</span>
            </div>
          </div>
        </div>
        {/* <div className="colspan-1 flex flex-col items-center gap-4 text-3xl">
            <FaPhone className="text-4xl" />
            <h3 className="font-medium uppercase">Telefon</h3>
            <p className="text-xl text-center">0505 367 90 77</p>
          </div>
          <div className="colspan-1 flex flex-col items-center gap-4 text-3xl">
            <BsEnvelopeFill className="text-4xl" />
            <h3 className="font-medium uppercase">E-posta</h3>
            <p className="text-xl text-center">kocamanhukuk@gmail.com</p>
          </div> */}
      </div>

      {/* CONTACT FORM */}
      <div className="w-full bg-white p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-center font-semibold uppercase mb-6">
            Bizimle
            <em className="font-bold text-yellow-600"> İletişime </em>
            Ge
            <span className="relative inline-block">
              c<span className="absolute -bottom-1 left-2 w-3 border-b-4 border-black"></span>
            </span>
            in
          </h1>
          <form action="" className="m-0 p-0">
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col mb-6">
                {/* <label htmlFor="firstName">Ad</label> */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="Adınız"
                  required
                  className="bg-cream text-red-950 font-medium border-none outline-none rounded-none px-5 py-4"
                />
              </div>
              <div className="w-1/2 flex flex-col mb-6">
                {/* <label htmlFor="lastName">Soyad</label> */}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Soyadınız"
                  required
                  className="bg-cream text-red-950 font-medium border-none outline-none rounded-none px-5 py-4"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col mb-6">
                {/* <label htmlFor="email">E-posta adresi</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="E-Posta Adresiniz"
                  required
                  className="bg-cream text-red-950 font-medium border-none outline-none rounded-none px-5 py-4"
                />
              </div>
              <div className="w-1/2 flex flex-col mb-6">
                {/* <label htmlFor="phoneNumber">Telefon</label> */}
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Telefon Numaranız"
                  required
                  className="bg-cream text-red-950 font-medium border-none outline-none rounded-none px-5 py-4"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              {/* <label htmlFor="message">Mesaj</label> */}
              <textarea
                name="message"
                rows="5"
                placeholder="Mesajınız"
                required
                className="bg-cream text-red-950 font-medium border-none outline-none rounded-none px-5 py-4"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-red-950 text-white text-lg font-medium border-1 rounded-none shadow-sm uppercase tracking-widest mt-6 mb-0 px-8 py-3 hover:bg-white hover:border-black hover:text-black transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Deneme;
