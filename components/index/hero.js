import Image from "next/image";
// import banne from "/public/coding.png";
import banner from "/public/landing.png";
import Biography from "./biography";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="border-0">
      <div id="hero-banner" className="h-screen">
        {/* hero */}
        <div className="grid justify-center mt-20 text-center lg:mt-36 lg:gap-4 lg:grid-cols-2 lg:text-center lg:items-center">
          {/* text */}

          <div className="grid justify-center gap-12 lg:gap-24">
            <>
              <Biography />
            </>
            <div className="text-center ">
              {/* button */}
              <Link href="/contact-form" passHref>
                <button className="text-dark bg-cta dark:bg-cta drop-shadow-2xl hover:bg-ctaHover dark:hover:bg-ctaHover">
                  {"Let's talk"}
                </button>
              </Link>
            </div>
          </div>

          {/* ! text */}
        </div>
        {/* landing pic */}

        <div className="bg-cover h-72">
          <Image
            src={banner}
            alt="Web development vector"
            className="object-cover mt-10 scale-110 lg:mt-0"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
