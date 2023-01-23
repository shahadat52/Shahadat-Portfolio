import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
      <div className="text-cyan-400 mt-[-20px] font-extralight ">
        <TypeAnimation
          sequence={[
            " Web developer 🧑‍💻",
            1000,
            " Frontend Developer 🧑‍💻",
            1000,
            " Javascript developer 🧑‍💻",
            1000,
            " React Developer 🧑‍💻",
            1000,
          ]}
          speed={30} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "25px" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity}
        />
      </div>
    );
};

export default TextAnimation;
