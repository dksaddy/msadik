// Container variants for staggering children
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // gap between each child animation
    },
  },
};

// Child item variants for fade + slide in
export const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
