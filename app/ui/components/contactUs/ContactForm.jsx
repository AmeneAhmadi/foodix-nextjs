"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useContactContext } from "../../contexts/contact/ContactContext";
import MessageBox from "../common/MessageBox";

export default function ContactForm() {
  const { sendMessage } = useContactContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const { ref: rightPartRef, inView: rightPartInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData);
    setFormData({ name: "", email: "", subject: "", service: "", message: "" });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div
      className={clsx(
        "flex flex-col xl:flex-row items-start justify-between gap-6 pt-20 bg-[var(--gray-color)]",
        "px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full"
      )}
    >
      {/* ✅ فرم تماس */}
      <div
        ref={rightPartRef}
        className="flex flex-col items-start justify-center w-full xl:w-1/2"
      >
        <div
          className={clsx(
            " flex flex-col items-center xl:items-start justify-center mb-8 gap-6 w-full",
            rightPartRef ? "animate-fadeInDown opacity-100" : "opacity-0"
          )}
        >
          <span className="font-hanken text-[var(--primary-color)] uppercase font-bold">
            Get in touch
          </span>
          <h2 className="uppercase font-bold text-6xl leading-20">
            have questions? get in touch!
          </h2>
        </div>
        <div
          className={clsx(
            "w-full font-hanken",
            rightPartInView ? "animate-fadeInUp opacity-100" : "opacity-0"
          )}
        >
          <form onSubmit={handleSubmit} className="py-6   rounded-lg w-full">
            {/* ✅ نام و ایمیل در یک سطر */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
            </div>

            {/* ✅ کشور و موضوع در یک سطر */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-gray-400 text-gray-700 outline-[var(--primary-color)]">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
              <input
                type="text"
                name="service"
                placeholder="Your Service"
                value={formData.service}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
            </div>

            {/* ✅ پیام کاربر (تک‌ستونه) */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              cols={10}
              className="border p-6 w-full resize-none rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
            />

            {/* ✅ دکمه ارسال */}
            <div
              className={clsx(
                // inView ? "animate-fadeInUp opacity-100" : "opacity-0",
                "flex items-center justify-start py-4"
              )}
            >
              <button
                type="submit"
                className={clsx(
                  "font-hanken cursor-pointer bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]",
                  "text-white rounded-lg text-xl py-4 px-11 font-bold transition-colors capitalize"
                )}
              >
                submit now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ عکس سرآشپز (فقط در دسکتاپ نمایش داده شود) */}
      <div
        ref={imgRef}
        className={clsx(
          "hidden xl:flex items-center justify-end w-full xl:w-1/2",
          imgInView ? "animate-fadeInDown opacity-100" : "opacity-0"
        )}
      >
        <Image
          src="/assets/images/contact-1.png"
          alt="Chef"
          width={500} // افزایش عرض عکس
          height={500} // افزایش ارتفاع عکس
          className="rounded-lg object-cover h-auto" // object-cover برای حفظ تناسب تصویر
        />
      </div>
      {showMessage && (
        <MessageBox
          text="Your Message added successfully"
          type="success"
          onClose={() => setShowMessage(false)}
        />
      )}
    </div>
  );
}
