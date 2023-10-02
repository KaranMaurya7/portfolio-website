import {motion} from "framer-motion";
import '../css/transition.css'

export function TransitionEffect(){
    return(<>
    <motion.div  className="card color1" 
        initial = {{x: '100%', width: '100%'}}
        animate ={{x:'0%', width:'0%'}}
        transition={{ duration: 0.8, ease: 'easeInOut'}}
    />
    <motion.div  className="card color2" 
        initial = {{x: '100%', width: '100%'}}
        animate ={{x:'0%', width:'0%'}}
        transition={{ delay:0.2, duration: 0.8, ease: 'easeInOut'}}
    />
    <motion.div  className="card color3" 
        initial = {{x: '100%', width: '100%'}}
        animate ={{x:'0%', width:'0%'}}
        transition={{ delay:0.4, duration: 0.8, ease: 'easeInOut'}}
    />
    </>)
}