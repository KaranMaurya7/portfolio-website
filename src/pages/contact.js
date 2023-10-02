import { Footer } from '../components/Footer';
import '../css/contact.css';

import { ContactElement } from '../components/ContactElement';
import { TransitionEffect } from '../components/TransitionEffect';

export function Contact({ dark }) {
    return (<>
        <div className='contactContainer'>       
            <TransitionEffect/>
            <ContactElement dark={dark} />
            <Footer dark={dark} />
        </div>
    </>)
}