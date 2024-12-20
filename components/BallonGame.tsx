import React, { useState } from "react";
import { motion } from "framer-motion";

interface BalloonProps {
  id: number;
  color: string;
  title: string;
  image: string;
}

const balloonsData: BalloonProps[] = [
  {
    id: 1,
    color: "#ff6b6b",
    title: "Premio 1",
    image: "/images/premio1.jpg", // Cambia a tus rutas de imágenes
  },
  {
    id: 2,
    color: "#6b6bff",
    title: "Premio 2",
    image: "/images/premio2.jpg",
  },
  {
    id: 3,
    color: "#6bff6b",
    title: "Premio 3",
    image: "/images/premio3.jpg",
  },
];

const Balloon = ({ id, color, title, image }: BalloonProps) => {
  const [popped, setPopped] = useState(false);

  return (
    <motion.div
      className="balloon-container"
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity }}
      onClick={() => setPopped(true)}
      style={{ position: "relative", width: 100, height: 150, cursor: "pointer" }}
    >
      {!popped ? (
        <motion.div
          className="balloon"
          style={{
            backgroundColor: color,
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ) : (
        <motion.div
          className="revealed-content"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            backgroundColor: "#fff",
            border: "2px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "10px 0" }}>{title}</h3>
          <img
            src={image}
            alt={title}
            style={{ width: "80px", height: "80px", borderRadius: "10px" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

const BalloonGame = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "40px",
        background: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      {balloonsData.map((balloon) => (
        <Balloon
          key={balloon.id}
          id={balloon.id}
          color={balloon.color}
          title={balloon.title}
          image={balloon.image}
        />
      ))}
    </div>
  );
};

export default BalloonGame;
