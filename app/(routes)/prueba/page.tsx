"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioPage = () => {
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);

  const handlePop = (id: number) => {
    setPoppedBalloons((prev) => [...prev, id]);
  };

  const dataSkills = [
    { id: 1, title: "Java", image: "/javaIcon.png" },
    { id: 2, title: "Angular", image: "/angularIcon.png" },
    { id: 3, title: "PostgreSQL", image: "/postgresIcon.png" },
    { id: 4, title: "Docker", image: "/dockerIcon.png" },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
        Mis
        <span className="text-secondary font-bold"> habilidades</span>
      </h1>

      <div className="relative z-10 grid max-w-5xl gap-6 mx-auto sm:grid-cols-2 mt-4 md:grid-cols-4">
        {dataSkills.map((data) => (
          <motion.div
            key={data.id}
            className="relative flex items-center justify-center w-40 h-40"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => handlePop(data.id)}
          >
            {!poppedBalloons.includes(data.id) ? (
              // Globos animados
              <motion.div
                className="w-full h-full bg-blue-500 rounded-full shadow-lg cursor-pointer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              // Contenido revelado
              <>
                <motion.div
                  className="absolute w-full h-full p-4 text-center bg-white border rounded-lg shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="mb-2 text-lg font-bold">{data.title}</h3>
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </motion.div>

                {/* Animación del nombre al explotar */}
                <motion.div
                  className="absolute text-2xl font-bold text-center text-white"
                  initial={{ opacity: 0, y: -50, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    color: [
                      "#ff6b6b",
                      "#ffcc6b",
                      "#6bff6b",
                      "#6b6bff",
                      "#ff6bff",
                    ], // Ciclo de colores
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {data.title.toUpperCase()}
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
