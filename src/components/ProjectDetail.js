import { motion } from 'framer-motion';

const animate = {
    initial: {
        // width:0,
        y: "-10vw",
        opacity: 0
    },
    animate: {
        // width: '75vw',
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 120,
        }
    },
    exit: {
        x: '-100vw',
        opacity: 0,
        transition: {

            duration: 0.6,
            ease: 'easeInOut',

        }
    }

}
export function ProjectDetail({ photo, setShow, show, dark }) {

    return (<>

        <motion.section
            variants={animate} initial='initial' animate='animate' exit='exit'
            id="projectD">


            <h1 className={dark ? 'pageName textcolorwhite' : 'pageName textcolorblack'}>
                About Project
            </h1>
            <div className={dark ? 'projectDetail flex textcolorwhite projectItemDark' : 'projectDetail flex textcolorblack projectItemLight '}>

                <h3 onClick={() => setShow(null)} className={dark ? ' closeButton whiteBorder textcolorwhite' : ' closeButton blackBorder textcolorblack'} >
                    X
                </h3>
                <div className="aboutP">
                    <h3>{show.id}.  {show.title}</h3>

                    <p>
                        {show.discription}
                    </p>
                    <div className='flex detailsButton'>
                        {show.deploy &&
                            <a className={dark ? " flex whiteBorder textcolorwhite" : " flex  textcolorblack buttonS"} href={show.demo} target='_blank' rel="noopener noreferrer">
                                Try Demo
                            </a>
                        }
                        {show.github !== '' &&
                            <a className={dark ? " flex whiteBorder textcolorwhite" : " flex  textcolorblack buttonS"} href={show.github} target='_blank' rel="noopener noreferrer">
                                Github
                            </a>
                        }


                    </div>
                </div>

                <div  >
                    <img className={dark ? 'imageP' : 'imageP littleShadow'} src={photo} alt='project' />
                </div>

            </div>
        </motion.section>

    </>)
}