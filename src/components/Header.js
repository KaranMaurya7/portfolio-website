import { Link } from 'react-router-dom';
import person from '../assets/MeWithBack0.png';
import { motion } from 'framer-motion';

const animateText = {
    initial: { opacity: 0, y: '-10px' },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.9, duration: 0.6 }
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
export function Header({ dark }) {
    return (
        <>
            <header className={dark ? 'homeHeader headerDark' : 'homeHeader headerLight'}>
                <div className='details'>
                    <h3 className={dark ? 'darkBottomBorder' : 'lightBottomBorder'}> Welcome to my portfolio</h3>

                    <motion.h1
                        className={dark ? 'headerDark' : 'headerLight'}
                        variants={animateText}
                        initial='initial'
                        whileInView='animate'
                    >Hi! I'm <span className={dark ? 'nameDark' : 'nameLight'}>Karan Maurya</span></motion.h1>
                    <motion.h1
                        variants={animateText}
                        initial='initial'
                        whileInView='animate'
                    >
                        Web Developer
                    </motion.h1>
                    <p>
                        As a skilled and passionate web developer, I am dedicated to turning ideas into innovative and user-friendly web applications. Explore my various projects showcasing my skills in web development.
                    </p>
                    <Link to='./Resume Karan.pdf' target='_blank' rel="noopener noreferrer">

                        <button className={dark ? 'buttonDark' : 'buttonLight'}>Resume</button>
                    </Link>
                </div>
               
                    <motion.img
                        variants={animateImage}
                        initial='initial'
                        whileInView='animate'
                        className='sideImage' src={person} alt='person' />
               
            </header>
        </>
    )
}