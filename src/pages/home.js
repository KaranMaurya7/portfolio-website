import '../css/home.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TransitionEffect } from '../components/TransitionEffect';

export function Home({ dark }) {
    return (<>
        <div className='home'>
            <TransitionEffect />
            <Header dark={dark} />   
            <Footer dark={dark} />
        </div>
    </>)
}