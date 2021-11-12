import React from "react";
import { motion } from "framer-motion";
export default function FlyingCard() {
  const card1 = {
    show: {
      filter: ["blur(0px)", "blur(2px)"],
      scale: [0.5, 0.9],
      rotateX: [-12, 170],
      rotateY: [14, -187],
      rotateZ: [12, 60],
      skew: [0, 4],
      bottom: ["23%", "24%"],
      right: 0,
      x: ["80%", "83%"],
      y: [5, 10],
      transition: { duration: 13.76, repeat: "Infinity", repeatType: "mirror" },
    },
  };

  const card2 = {
    show: {
      filter: ["blur(0px)", "blur(2px)"],
      scale: [1.2, 0.9],
      rotateX: [12, 7],
      rotateY: [4, 17],
      rotateZ: [2, 160],

      skew: [0, 4],
      top: ["70%", "73%"],
      left: 0,
      x: ["-110%", "-105%"],
      y: [5, 10],
      transition: { duration: 4.43, repeat: "Infinity", repeatType: "mirror" },
    },
  };
  const card3 = {
    show: {
      filter: ["blur(0px)", "blur(2px)"],
      scale: [0.9, 0.4],
      rotateX: [12, 7],
      rotateY: [4, 7],
      rotateZ: [2, 46],
      skew: [0, 4],
      left: ["0%", "3%"],
      top: ["4%", "5%"],
      x: ["-100%", "-100%"],
      transition: { duration: 7, repeat: "Infinity", repeatType: "mirror" },
    },
  };
  const card4 = {
    show: {
      filter: ["blur(0px)", "blur(2px)"],
      scale: [0.9, 0.9],

      rotateZ: [2, 76],
      skew: [0, 4],
      top: ["3%", "3%"],
      left: ["100%", "100%"],
      x: [0, 50],
      y: [-13, 5],
      transition: { duration: 3.57, repeat: "Infinity", repeatType: "mirror" },
    },
  };
  return (
    <div className="abs-container abs-centering">
      <motion.img
        variants={card1}
        animate="show"
        className="flying-card flying-1"
        src="assets/flying_cards/1.png"
        alt="flying card"
      />
      <motion.img
        variants={card2}
        animate="show"
        className="flying-card flying-2"
        src="assets/flying_cards/2.png"
        alt="flying card"
      />
      <motion.img
        variants={card3}
        animate="show"
        className="flying-card flying-3"
        src="assets/flying_cards/3.png"
        alt="flying card"
      />
      <motion.img
        variants={card4}
        animate="show"
        className="flying-card flying-4"
        src="assets/flying_cards/4.png"
        alt="flying card"
      />
    </div>
  );
}
