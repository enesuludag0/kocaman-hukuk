import Meta from "@/components/Meta";
import Image from "next/image";
import { contactLinks } from "@/data/contactLinks";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const Iletisim = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Mesajınız başarıyla gönderildi!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Meta
        title="İletişim | Kocaman Hukuk & Danışmanlık"
        href="/iletisim"
        description="Kocaman Hukuk Bürosu ile ihtiyaçlarınıza yönelik hızlı ve kapsamlı hukuki destek için iletişime geçin. Hukuki sorularınızı bize iletin, profesyonel danışmanlık randevusu alın. Bizlere telefon, e-posta, whatsapp ve ofis adresimiz üzerinden kolayca ulaşabilirsiniz."
        keywords="iletişim, avukatla görüşme, Ankara avukat, Ankara hukuk bürosu, hukuk danışmanlığı, telefon, e-posta, ofis adresi, whatsapp iletişim, whatsapp danışmanlık"
      />

      {/* CONTACT */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start gap-16 sm:gap-20 md:gap-24 lg:gap-12 px-4 sm:px-8">
          {/* CONTACT INFO */}
          <div className="size-full lg:w-1/2 flex flex-col gap-5 sm:gap-7 md:gap-7">
            <div className="flex items-center gap-4 sm:gap-5 ml-2">
              <Image
                src="/images/courthouse-black.png"
                alt="Adalet Sarayı Icon"
                width={25}
                height={25}
                className="size-6 sm:size-7 lg:size-8 object-cover pointer-events-none select-none"
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase mt-1">İletişim Bilgileri</h1>
            </div>
            <hr />

            {/* ADDRESS, PHONE, EMAIL */}
            {contactLinks.map((info, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="size-10 sm:size-12 md:size-14 flex items-center justify-center bg-gray shrink-0 rounded-full">
                    <span className="text-lg sm:text-xl md:text-2xl">{info.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase">{info.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg">{info.label}</p>
                  </div>
                </div>
                {index < contactLinks.length - 1 && <hr />}
              </React.Fragment>
            ))}

            {/* WORKING HOURS */}
            <div className="bg-gray flex flex-col gap-4 sm:gap-6 mt-3 lg:mt-2 px-6 sm:px-8 py-5 sm:py-6">
              <h1 className="text-base sm:text-lg font-semibold uppercase">Çalışma Saatlerimiz</h1>
              <div className="flex flex-col gap-2 text-sm sm:text-base font-medium">
                <div className="flex items-center">
                  <span className="whitespace-nowrap">Pazartesi - Cuma</span>
                  <span className="flex-grow border-b border-black mx-3 sm:mx-5 mt-1" />
                  <span className="whitespace-nowrap">09:00 - 18:00</span>
                </div>
                <div className="flex items-center">
                  <span className="whitespace-nowrap">Cumartesi - Pazar</span>
                  <span className="flex-grow border-b border-black mx-3 sm:mx-5 mt-1" />
                  <span className="whitespace-nowrap">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="size-full lg:w-1/2 bg-white px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col gap-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold uppercase leading-snug">
                Bizimle
                <em className="font-bold text-yellow-600"> İletişime </em>
                Geçin
              </h1>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 sm:gap-6 text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Adınız"
                    required
                    className="w-full sm:w-1/2 bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-full outline-none font-medium px-5 py-3"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Soyadınız"
                    required
                    className="w-full sm:w-1/2 bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-full outline-none font-medium px-5 py-3"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Posta Adresiniz"
                    required
                    className="w-full sm:w-1/2 bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-full outline-none font-medium px-5 py-3"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Telefon Numaranız"
                    maxLength={11}
                    required
                    className="w-full sm:w-1/2 bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-full outline-none font-medium px-5 py-3"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Mesajınızın Konusu"
                  required
                  className="bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-full outline-none font-medium px-5 py-3"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Mesajınız"
                  required
                  className="bg-lightgray placeholder:text-[#a0a0a0] placeholder:text-sm rounded-3xl outline-none font-medium px-5 py-3"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-base md:text-lg font-medium border mt-2 sm:mt-4 px-6 py-3 rounded-none shadow-sm uppercase tracking-widest
                    ${loading ? "bg-gray border-gray opacity-60 cursor-not-allowed" : "bg-gray border-gray cursor-pointer"}
                  `}
                >
                  <span className="flex items-center justify-center gap-4">
                    {loading && (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    )}
                    {loading ? "Gönderiliyor..." : "Gönder"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full h-[320px] sm:h-[400px] md:h-[470px] lg:h-[540px] shadow-main overflow-hidden mb-24">
        <iframe
          className="size-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3668099741976!2d32.857161875851624!3d39.910806771525486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f299746f695%3A0x4db688100fb543e3!2sAv.%20Levent%20KOCAMAN%20-%20Kocaman%20Hukuk%20%26%20Dan%C4%B1%C5%9Fmanl%C4%B1k!5e0!3m2!1str!2str!4v1753472535053!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Iletisim;
