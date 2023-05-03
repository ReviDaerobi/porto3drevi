import React from "react";
import { motion } from "framer-motion";

import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import { technologies } from "../constants";

import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="justify-end items-end text-right">
        <p className={styles.sectionSubText}>What I'm Learn</p>
        <h2 className={styles.sectionHeadText}>Leanguage</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Tech, "tech")