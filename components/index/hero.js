import Image from "next/image";
import landingImage from "/public/engineering.png";
import Biography from "./biography";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="border-0">
      <div id="hero-banner">
        {/* hero */}
        <div className="grid text-center rounded lg:gap-4 lg:grid-cols-3 lg:text-center lg:items-center">
          {/* text */}

          <div className="grid gap-8 lg:gap-24">
            <>
              <Biography />
            </>
            <div className="text-center ">
              {/* button */}
              <Link href="/contact-form" passHref>
                <button className="text-light bg-buttonLight dark:bg-buttonDark hover:bg-hoverLight dark:hover:bg-hoverDark">
                  {"Let's talk"}
                </button>
              </Link>
            </div>
          </div>

          {/* ! text */}

          {/* landing pic */}

          <div className="items-center justify-center pt-12 translate-y-10 lg:min-w-full lg:translate-y-20 lg:col-span-2">
            {/* <p className="font-serif text-xl font-bold tracking-wide lg:text-xl text-dark dark:text-light lg:-translate-y-14">
              {filipe.about}
            </p> */}
            <Image src={landingImage} alt="Web development vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
