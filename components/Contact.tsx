"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto" id="contact">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]"
        >
          GET IN TOUCH
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:03394070105"
                    className="text-base text-[#1A1A1A] hover:underline"
                  >
                    0339 4070105
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:uamanat23@gmail.com"
                    className="text-base text-[#1A1A1A] hover:underline"
                  >
                    uamanat23@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Location
                  </h4>
                  <p className="text-base text-[#1A1A1A]">
                    Lahore
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Portfolio
                  </h4>
                  <a
                    href="https://portfolio-phi-eight-81.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#1A1A1A] hover:underline"
                  >
                    portfolio-phi-eight-81.vercel.app
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-base font-medium text-[#1A1A1A]">
                  Bachelors in Computer Science
                </p>
                <p className="text-sm text-gray-600">
                  COMSATS University Islamabad Lahore Campus
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

