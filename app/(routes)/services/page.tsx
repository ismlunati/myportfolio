"use client";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className="grid items-center justify-center h-screen
        max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 pt-16 sm:pt-24 md:pt-32"
        // Usamos pt-* para asegurar suficiente espacio entre el contenido y la navbar
      >
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1
            className="text-2xl leading-tight text-center 
            md:text-left md:text-4xl md:mb-5"
          >
            {t("services1")}{" "}
            <span className="font-bold text-secondary">{t("services2")}</span>
          </h1>
          <p className="mt-4 mb-3 text-xl text-gray-300 px-4  sm:px-6 md:px-0">{t("services3")}</p>
          <div className="flex mt-4 px-4 sm:px-6 md:px-0">
            <Link
              href="/contacto"
              className="px-3 py-2 transition-all  
                      border-2 cursor-pointer bg-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              {t("services4")}
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
