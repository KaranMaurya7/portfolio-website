import portfolio from '../assets/portfolio0.png';
import catchme from '../assets/catchmegame.png';
import ecom from '../assets/Ecommerce.png';
import ipod from '../assets/IpodReact.png';
import movieflix from '../assets/movieFlix.png';
import todo from '../assets/nodeTodo.png';

import { Footer } from '../components/Footer';
import '../css/home.css';
import '../css/projects.css';
import { TransitionEffect } from '../components/TransitionEffect';
import { ProjectElement } from '../components/ProjectElements';
import { ProjectDetail } from '../components/ProjectDetail';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

import { motion } from 'framer-motion';

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
            stiffness:120,
        }
    },
}

const photos = [portfolio, catchme, ecom, ipod, movieflix, todo];

export function Projects({ dark }) {

    const [show, setShow] = useState(null);

    return (<>
        <TransitionEffect />
        <div className="projectContainer">
            <motion.section
             variants={animate} initial='initial' animate='animate'
            >
                <h1 className={dark ? 'pageName textcolorwhite' : 'pageName textcolorblack'}>Projects</h1>
                <div className="projects flex">
                    {projectsData.map((item, i) => (
                        <div key={i}>
                            <ProjectElement  item={item} show={show} setShow={setShow} dark={dark} />
                        </div>
                    
                    ))}
                </div>
            </motion.section>
            <AnimatePresence>
                {show && <ProjectDetail photo = {photos[show.id - 1]} setShow={setShow} show={show} dark={dark} />}
            </AnimatePresence>
        </div>
        <Footer dark={dark} />

    </>)
}