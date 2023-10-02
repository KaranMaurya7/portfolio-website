import meet from '../assets/contact.png';
import { motion } from 'framer-motion';

export function ContactElement({ dark }) {
    return (<>
        <div className={dark ? 'contact darkMode' : 'contact lightMode'}>
            <h1>Contact</h1>
            <div className={dark ? 'info darkContact' : 'info lightContact'}>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className='meetImage' src={meet} alt='contact' />
                
                <motion.form
                    initial={{ x: -250 }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 1, duration: 0.5, ease: 'easeInOut',
                        type: "spring",
                        damping: 10,
                        mass: 0.75,
                        stiffness: 120,
                    }}
                    action='https://getform.io/f/bae32c06-8949-4093-99c4-04dd27427e8e'
                    method='POST'
                >
                    <input type='name' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <textarea name='message' placeholder='Message' />
                    <button type='submit'>
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    </>)
}