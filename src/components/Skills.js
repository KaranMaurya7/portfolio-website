import '../css/skills.css';

import javaSkill from '../assets/skill/JavaSkill.png';
import HtmlSkill from '../assets/skill/htmlSkill.png';
import cssSkill from '../assets/skill/CssSkill.png';
import jsSkill from '../assets/skill/JSSkill.png';
import reactSkill from '../assets/skill/ReactSkill.png';
import { motion } from 'framer-motion';

const animate = {
    initial: {
        y: "-10vw",
        opacity: 0
    },
    animate: {
        y: 0,
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

export function Skills({ dark }) {

    return (<>
        <motion.div
         variants={animate} initial='initial' animate='animate'
        className="skills">
            <h2  className= {dark ? 'whiteText' : 'blackText'}>Skills</h2>
            <div className='flexskill'>
                <div>
                    <div>
                        <img className= {dark? 'skillImage lightShodow':'skillImage darkShadow'} src={javaSkill} alt='skill' />
                    </div>
                    <h3 className= {dark ? 'whiteText' : 'blackText'}> Java</h3>
                </div>
                <div>
                    <div>

                        <img className= {dark? 'skillImage lightShodow':'skillImage darkShadow'}  src={HtmlSkill} alt='skill' />
                    </div>
                    <h3 className= {dark ? 'whiteText' : 'blackText'}> HTML</h3>
                </div>
                <div>
                    <div>

                        <img className= {dark? 'skillImage lightShodow':'skillImage darkShadow'}  src={cssSkill} alt='skill' />
                    </div>
                    <h3  className= {dark ? 'whiteText' : 'blackText'} > CSS</h3>
                </div>
                <div>
                    <div>
                        <img className= {dark? 'skillImage lightShodow':'skillImage darkShadow'} src={jsSkill} alt='skill' />
                    </div>
                    <h3 className= {dark ? 'whiteText' : 'blackText'}> Java Script</h3>
                </div>
                <div>
                    <div>

                        <img className= {dark? 'skillImage lightShodow':'skillImage darkShadow'} src={reactSkill} alt='skill' />
                    </div>
                    <h3 className= {dark ? 'whiteText' : 'blackText'}> React</h3>
                </div>
            </div>
        </motion.div>

    </>)
}