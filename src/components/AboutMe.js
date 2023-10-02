import person2 from '../assets/ePerson.png';
import study from '../assets/study.png';

import { motion } from 'framer-motion';

const animateText = {
    initial: { y: '-10px', opacity: 0 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.6 }
    }
}
const animateImage = {
    initial: { opacity: 0, x: 100 },
    animate:
    {
        opacity: 1, x: 0,
        transition: { delay: 0.9, duration: 0.5 }
    }
}

const animate = {
    initial: {
        x: "-10vw",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 1,
            ease: 'easeInOut',
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 120,
        }
    },
}
export function AboutMe({ dark }) {
    return (<>

        {/* aboutme */}
        < motion.section variants={animate} initial='initial' animate='animate'>
            <div className={dark ? 'aboutme only1000Dark backGroundDark' : 'aboutme only1000light backGroundLight'}>

                <div className='objective'>
                    <motion.img
                        variants={animateImage}
                        initial='initial'
                        whileInView='animate' className='eduImage' src={person2} alt='person' />
                    <motion.div variants={animateText}
                        initial='initial' whileInView='animate'>
                        <h3>About Me</h3>
                        <p>
                            I am graduate of Bachelors in Science degree. I am a skilled and motivated web developer. Coming from non-technical field, I have really polished my skills through various courses and projects.  By making projects, I had acquired the skills like problem-solving, attention to detail and team work. <br />
                            I am seeking a challenging role in a dynamic organization where I can utilize my technical abilities to develop innovative and user-friendly web applications. My goal is to continuously learn and grow while contributing to the success of the company.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={animate} initial='initial' animate='animate' >

            <div className={dark ? 'aboutme only1000Dark backGroundDark' : 'aboutme backGroundLight'}>


                <div className='objective'>
                    <motion.div variants={animateText}
                        initial='initial' whileInView='animate'

                        className='lmargin'>
                        <h3>Education & Courses</h3>
                        <ul className={dark ? 'darkul' : 'lightul'}>

                            <li>
                                <p>
                                    <b>BACHELORS IN SCINECE</b> <br />
                                    Panjab University &nbsp; &nbsp; &nbsp; July 2017 to September 2020
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>+2(NON-MEDICAL)</b> <br />
                                    Government Model Senior Secondary School &nbsp; &nbsp; &nbsp; July 2015 to March 2017
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>	JAVA AND DSA</b> <br />
                                    Coding Ninjas &nbsp; &nbsp; &nbsp; July 2022 to Dec 2022
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>MERN STACK</b> <br />
                                    Coding Ninjas &nbsp; &nbsp; &nbsp; Dec 2022 to September 2023
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                    <img className='eduImage flipImage' src={study} alt='study' />
                </div>
            </div>
        </motion.section>
    </>)
}