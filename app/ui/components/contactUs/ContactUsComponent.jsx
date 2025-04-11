import React from "react";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";
import PageBanner from "../common/PageBanner";

export default function ContactUsComponent() {
  return (
    <div>
       <PageBanner
              title="contact us"
              subtitles={[
                { page: "home", link: "/" },
                { page: "contact", link: "/contact_us" },
              ]}
            />
      <ContactForm />
      <ContactCards />
    </div>
  );
}
