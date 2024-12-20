"use client";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className="grid items-center justify-center h-screen
      max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20"
      >
        <div className="max-w-[450px] mt-20 md-0">
          <h1
            className="text-2xl leading-tight text-center 
          md:text-left md:text-4xl md:md-5"
          >
            Mis <span className="font-bold text-secondary">servicios</span>
          </h1>
          <p className="mt-4 mb-3 text-xl text-gray-300">
            Ofrezco desarrollo de soluciones con las últimas tecnologías y emplementando las mejores prácticas, construyendo un producto intuitivo y mantenible. Para ello tengo experiencia en Angular y Java 21 como stack tecnológico y bases de datos como ORACLE, DB2 y postgreSQL.
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
          Contacta conmigo
          </button>
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
