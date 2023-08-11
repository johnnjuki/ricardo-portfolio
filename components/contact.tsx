"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/send-email";
import toast from "react-hot-toast";
import SubmitBtn from "@/components/submit-btn";


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact" />
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jonnietrues@gmail.com">
          jonnietrues@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);

          if (error) {
            toast.error("Sending email failed.");
            return
          }

          toast.success('Email sent successfully!')
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Your maessage"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
