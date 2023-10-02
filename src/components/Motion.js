import { motion } from 'framer-motion';
import '../css/contact.css'
import * as React from 'react';

export function Motion({ mode }) {
  return (
    // <motion.div className='ani'
    //     initial={{
    //         x: '-200px'
    //     }}
    //     animate={{
    //         x: '100vw',
    //         y: [50,-50,50,-50,50,-50,50]
    //     }}
    //     transition={{ duration: 4, delay: 1.1, ease: 'easeInOut' ,repeat: Infinity, repeatDelay: 3 }}
    // />


    <div className='ani'>
      <svg
        height="5rem" width="5rem" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
          d="M30 30 L50 22.5 L37.5 15 Z" stroke={mode} fill="transparent" strokeWidth="3"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
          d="M30 30 L50 22.5 L37.5 15 Z" stroke ={mode} fill="transparent" strokeWidth="3"
          transform="scale(-1,1) translate(-100,0)"
        />
      </svg>
    </div>

  )

}
