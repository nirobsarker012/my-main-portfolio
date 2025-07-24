import { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ief56g4", "template_gjpp1bo", form.current, {
          publicKey: "ePKVvY6XOHhCz-ldm",
        })
        .then(
          () => {
            toast.success(
              "Message sent successfully. I'll get back to you as soon as possible. Thank you!"
            );
          },
          (error) => {
            toast.error("FAILED...", error.text);
          }
        );
      form.current.reset();
    }
  };

  return (
    <div id="contact" className="container">
      <div className="border-red mx-auto my-10 w-[145px] border-b-[3px] border-[#55E6C1] text-2xl font-semibold md:w-[180px] md:text-3xl">
        <h1 className="text-center text-gray-300">Contact Me</h1>
      </div>
      <ContactInfo />
      <form className="w-full pb-32" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-10 md:flex-row">
          <input
            className="w-full border border-[#252425] bg-transparent px-3 py-3 text-white placeholder-[#ddd] placeholder-opacity-50 focus:border-[#4BFFA5] focus:placeholder-opacity-100 focus:outline-none"
            type="text"
            placeholder="Name*"
            required
            name="name"
          />
          <input
            className="-mt-5 w-full border border-[#252425] bg-transparent px-3 py-3 text-white placeholder-[#ddd] placeholder-opacity-50 focus:border-[#4BFFA5] focus:placeholder-opacity-100 focus:outline-none md:-mt-0"
            type="email"
            placeholder="Email*"
            required
            name="email"
          />
        </div>
        <div>
          <input
            className="my-5 w-full border border-[#252425] bg-transparent px-3 py-3 text-white placeholder-[#ddd] placeholder-opacity-50 focus:border-[#4BFFA5] focus:placeholder-opacity-100 focus:outline-none"
            type="text"
            placeholder="Subject*"
            required
            name="subject"
          />
        </div>
        <textarea
          className="w-full border border-[#252425] bg-transparent px-3 py-3 text-white placeholder-[#ddd] placeholder-opacity-50 focus:border-[#4BFFA5] focus:placeholder-opacity-100 focus:outline-none"
          placeholder="Your Message..."
          rows={5}
          required
          name="message"
        ></textarea>

        <button
          type="submit"
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-1 rounded-sm bg-[#55E6C1] py-3 text-center font-semibold text-black transition-all duration-300 hover:bg-[#252425] hover:text-[#4BFFA5] md:w-44"
        >
          Send Message <IoIosSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
