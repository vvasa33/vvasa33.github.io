export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, // Faster stagger
      delayChildren: 0.05    // Almost no delay before starting
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } // Slightly faster duration
  }
};

export const fastItemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.3, ease: "easeOut" } // Very fast for small items
  }
};

export const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Faster line drawing
  }
};

// Persona-inspired "Snappy" Variants
export const personaVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        mass: 0.8
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  },
  // For diagonal/angular reveals often seen in Persona
  angularReveal: {
    hidden: { 
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      opacity: 0,
      x: -20
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // "Expo out" feel
      }
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.1,
      ease: "circOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

// Print / newspaper metaphor variants
export const printVariants = {
  letter: {
    hidden: { scaleY: 0.3, opacity: 0, originY: 1 },
    visible: (i) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        delay: i * 0.04,
        type: 'spring',
        stiffness: 500,
        damping: 28,
      },
    }),
  },
  word: {
    hidden: { scaleY: 0.4, opacity: 0, originY: 1 },
    visible: (i) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        type: 'spring',
        stiffness: 400,
        damping: 22,
      },
    }),
  },
  halftoneReveal: {
    hidden: {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0.6,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  },
  halftoneOverlay: {
    hidden: { opacity: 0.55 },
    visible: {
      opacity: 0.2,
      transition: { duration: 0.5, delay: 0.35, ease: 'easeOut' },
    },
  },
  scrollContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  },
  pageTurn: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
  },
  subPageContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
    },
  },
  subPageItem: {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  },
};
