import Image from "next/image";
import banne from "/public/avatar.png";
import Biography from "./biography";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="border-0">
      <div id="hero-banner" className="h-screen" alt="hero banner">
        {/* hero */}
        <div className="grid justify-center mt-8 text-center lg:mb-0 lg:mt-14 lg:gap-4 lg:text-center lg:items-center">
          {/* text */}

          <div className="grid justify-center gap-12 lg:gap-24">
            <>
              <Biography />
            </>
            <div className="mt-8 text-center">
              {/* button */}
              <Link href="/contact-form" passHref>
                <motion.button
                  className="px-12 py-8 text-4xl text-dark bg-cta dark:bg-cta drop-shadow lg:text-6xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {"Let's talk"}
                </motion.button>
              </Link>
            </div>
          </div>

          {/* ! text */}

          {/* landing pic */}
          {/* <div className="items-center justify-center h-full mx-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={banne}
                alt="Avatar based on Nuno Martins's real appearence"
                className="mt-10 lg:mt-0 "
              />
            </motion.div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
