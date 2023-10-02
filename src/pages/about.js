import { AboutMe } from '../components/AboutMe.js'
import { Footer } from '../components/Footer.js'
import { Skills } from '../components/Skills.js'
import { TransitionEffect } from '../components/TransitionEffect.js'
import '../css/home.css'


export function About({ dark }) {
    return (<>
        <div className='aboutContainer'>
            <TransitionEffect />
            <Skills dark={dark}/>
            <AboutMe dark={dark} />
            <Footer dark={dark} />
        </div>
    </>)
}