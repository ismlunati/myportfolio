"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const Introduction = () => {

    const { t } = useTranslation();

  return (
    <div className="z-20 w-full bg-dark/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="800"
          height="800"
          alt="Profile pic"
        />

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left">
            {t("intro1")} <br />
            <TypeAnimation
              sequence={[
                t("intro2"),
                1000,
                t("intro3"),
                1000,
                t("intro4"),
                1000,
                t("intro5"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            {t("intro6")}
          </p>

          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
            {/*                        <Link href="/projects" className="px-3 py-2 transition-all 
                        border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        > Ver proyectos
                        </Link> */}

            <Link
              href="/contacto"
              className="px-3 py-2 transition-all 
                        border-2 cursor-pointer text-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              {" "}
              {t("contactWithMe")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
