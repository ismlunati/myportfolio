import TransitionPage from "@/components/transition-page";
import Container from "@/components/container";
import Avatar from "@/components/avatar";
import ContactPage from "@/components/contacto";
import React from "react";
import CoverParticles from "@/components/cover-particles";

const Contacto = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />

      <Container>
        <Avatar />
        <div>
          <h1
            className="text-2xl leading-tight 
            text-center md:text-left md:text-5xl md:mt-10"
          >
            {" "}
            Contacte
            <span className="font-bold text-secondary"> conmigo</span>
          </h1>
          <ContactPage />
        </div>
      </Container>
    </>
  );
};
export default Contacto;
