'use client'
import { motion } from 'framer-motion';

const chilImgL = {
    initial: {rotate: 0},
    animate: { rotateZ: -25}
}
const chilImgR = {
    initial: {rotate: 0},
    animate: { rotateZ: 25}
}

const Play = () => {
  return (
    <motion.div className="wrap-img  mt-40 flex justify-center gap-4"
            initial="initial"
            animate="initial"
            whileHover="animate"
            >
                    <motion.div className="img-left -z-10"
                            variants={chilImgL}
                            >
                        <div className="img bg-[url('/images/redant.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Redant</h3>
                            <p>the Heretical</p>
                        </div>
                    </motion.div>
                    <div className="img-center -z-10">
                        <div className="img bg-[url('/images/vendaarlia.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Vendaarlia</h3>
                            <p>the Developer</p>
                        </div>
                    </div>
                    <motion.div className="img-right -z-10"
                            variants={chilImgR}
                            >
                        <div className="img bg-[url('/images/bluevils.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Bluevils</h3>
                            <p>the Antagonist</p>
                        </div>
                    </motion.div>
            </motion.div>
  );
};

export default Play;
