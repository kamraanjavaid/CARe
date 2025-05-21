import React from "react";
import { motion } from "framer-motion";
import "./common.css";
import Button from "./Button";
import Text from "./Text";

export default function Hero() {
  return (
    <div className="hero">
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="hero-content"
      >
        <Text
          text="Lets Drive"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-8xl mb-8"
        />
        <p>
          Discover a wide range of premium vehicles for every occasion — from
          daily rides to luxury experiences. Reliable. Affordable. Fast.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button />
        </div>
      </motion.div>
    </div>
  );
}
