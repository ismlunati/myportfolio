"use client"
import TransitionPage from "@/components/transition-page";
import Container from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import dynamic from "next/dynamic";


import { useTranslation } from "react-i18next";



const PageAboutMe = () => {

    const { t } = useTranslation();

  return (
        <>
            <TransitionPage />
        
        
        <Container>
            <Avatar />
            <h1 className="text-2xl leading-tight 
            text-center md:text-left md:text-5xl md:mt-10"> {t("aboutTitle1")}
                <span  className="font-bold text-secondary"> {t("aboutTitle2")}</span>
            </h1>

            <CounterServices />
            <TimeLine/>
        </Container>
        </>
  );
}

export default dynamic(() => Promise.resolve(PageAboutMe), { ssr: false });
