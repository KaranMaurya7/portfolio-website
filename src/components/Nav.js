import { useState } from 'react';
import '../css/nav.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Motion } from './Motion';



const animate = {
    initial: {
        x: '50vh',
        opacity: 0
    }, animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }, exit: {
        x: '50vh',
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export function Navbar({ dark, setDark }) {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleDark = (e) => {
        e.preventDefault();

        setDark(!dark);
        if (dark === false) {

            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }

        window.location.reload(true);

    }

    return (<>

        <nav className={dark ? 'displayFlex dark' : 'displayFlex light'}>
            <div className=' displayFlex  headerName'>
                <span> Karan Maurya&nbsp; </span>
                <Motion mode={dark ? 'white' : 'black'} />
            </div>

            {/* less than 1000px */}
            <img onClick={() => setBurgerMenu(!burgerMenu)} className={dark ? 'darkicon rmargin' : 'lighticon rmargin'} src={burgerMenu ? 'https://cdn-icons-png.flaticon.com/128/2732/2732657.png' : 'https://cdn-icons-png.flaticon.com/128/7216/7216128.png'} alt='burger' />

            <AnimatePresence>
                {burgerMenu &&
                    <motion.div variants={animate} initial='initial' animate={burgerMenu ? 'animate' : ''} exit='exit'

                        className='displayFlex burgerlinks'>

                        {/* <span> <img className='lighticon rmargin' src='https://cdn-icons-png.flaticon.com/128/2732/2732657.png' alt='close'/> </span> */}
                        <span onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink className='nondecorativeL' to='/'>
                                Home
                            </NavLink>
                        </span>
                        <span onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink className='nondecorativeL' to='about'>
                                About
                            </NavLink>
                        </span>
                        <span onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink className='nondecorativeL' to='projects'>
                                Projects
                            </NavLink>
                        </span>
                        <span onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink className='nondecorativeL' to='contact'>
                                Contact
                            </NavLink>
                        </span>
                        <div className='displayFlex social'>
                            <Link to='https://github.com/KaranMaurya7'  target='_blank'>
                                <img className='iconB' src='https://cdn-icons-png.flaticon.com/128/25/25231.png' alt='github' />
                            </Link>
                            <Link to='https://www.linkedin.com/in/karan-maurya-9b6b29259/'  target='_blank'>

                                <img className='iconB' src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt='Linkdein' />
                            </Link>

                            <Link to='contact'>

                                <img className='iconB' src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' alt='mail' />

                            </Link>

                            <img onClick={handleDark} className='iconB' src={dark ? 'https://cdn-icons-png.flaticon.com/128/6932/6932837.png' : 'https://cdn-icons-png.flaticon.com/128/4885/4885230.png'} alt='mode' />


                        </div>

                    </motion.div>
                }
            </AnimatePresence>


            {/* on full screen */}
            <div className='displayFlex links'>
                <span>
                    <NavLink className={dark ? 'nondecorativeD' : 'nondecorativeL'} to='/'>
                        Home
                    </NavLink>
                </span>
                <span>
                    <NavLink className={dark ? 'nondecorativeD' : 'nondecorativeL'} to='about'>
                        About
                    </NavLink>
                </span>

                <span>
                    <NavLink className={dark ? 'nondecorativeD' : 'nondecorativeL'} to='projects'>
                        Projects
                    </NavLink>
                </span>
                <span>
                    <NavLink className={dark ? 'nondecorativeD' : 'nondecorativeL'} to='contact'>
                        Contact
                    </NavLink>
                </span>
            </div>
            <div className='displayFlex socialButtons'>

                <Link to ='https://github.com/KaranMaurya7'  target='_blank'>
                    <img className={dark ? 'darkicon' : 'lighticon'} src='https://cdn-icons-png.flaticon.com/128/25/25231.png' alt='github' />
                </Link>
                <Link to='https://www.linkedin.com/in/karan-maurya-9b6b29259/' target='_blank'>
                    <img className={dark ? 'darkicon' : 'lighticon'} src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt='Linkdein' />

                </Link>

                <Link to='contact'>

                    <img className={dark ? 'darkicon' : 'lighticon'} src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' alt='mail' />

                </Link>


                <motion.img
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={handleDark} className={dark ? 'darkicon' : 'iconB'} src={dark ? 'https://cdn-icons-png.flaticon.com/128/6932/6932837.png' : 'https://cdn-icons-png.flaticon.com/128/4885/4885230.png'} alt='mode' />


            </div>
        </nav>
        <Outlet />

    </>)
}