
export const SlideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};


export const SlideDown = (delay) => {
  return {
    initial: {
      y: -150,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const Xooming = (delay) => {
  return {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1.0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};