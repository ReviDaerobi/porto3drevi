import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">

        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Bonjour, je m'appelle <span className="text-[#231e6e]">Revi</span>encante </h1>
          <div className="w-20 sm:h-2 h-2 violet-gradient" />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm Web Developer & App Developer In Vocational Highschool <br className="sm:block hidden xs:block hidden" />SMK N 1 CIOMAS</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2 border-blue-800">
            <motion.dev 
              animate={{ 
                y: [0,24,0]
               }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
               }}
               className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero
