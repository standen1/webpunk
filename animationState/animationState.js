/********************************************
 *      This file is for storing all of
 *      the animation objects used by
 *      Framer Motion throughout the app.
 *      Since most of it is repetative,
 *      I wanted to re-use the same
 *      objects.
 * *****************************************/
export const containerVariants= {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

export const childVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 12
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

export const extraVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 12,
      delay: 1.5
    }
  },
  exit: {
    x: '-100vw',
    transition: { 
      ease: 'easeInOut',
      delay: 0.4
    }
  }
}

export const privacyPageVariants= {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

