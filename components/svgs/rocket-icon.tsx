"use client";
import { motion } from "framer-motion";

export const RocketIcon = () => {
  const rocketVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const exhaustVariants = {
    initial: { scaleY: 0.8, opacity: 0.8 },
    animate: {
      scaleY: 1.2,
      opacity: 1,
      transition: { duration: 0.2, yoyo: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 64 65"
      fill="none"
      variants={rocketVariants}
      initial="initial"
      animate="animate"
    >
      {/* rocket body */}
      <motion.path
        d="M24.6523 23.2161C24.6523 16.6658 27.3268 10.1154 31.0998 5.53668C31.8998 4.5659 33.3569 4.5659 34.1569 5.53668C37.9299 10.1154 40.6044 16.6658 40.6044 23.2161V46.5689H32.6284H24.6523V23.2161Z"
        fill="#CCC6FB"
      ></motion.path>
      {/* right wing */}
      <motion.path
        d="M40.606 46.5709V34.8945C48.6468 38.0697 48.5085 44.8635 47.9075 48.1425C47.7238 49.1444 46.6403 49.5897 45.7294 49.134L40.606 46.5709Z"
        fill="#6754F4"
      ></motion.path>

      {/* left wing */}
      <motion.path
        d="M24.7131 46.5709V34.8945C16.6722 38.0697 16.8106 44.8635 17.4116 48.1425C17.5952 49.1444 18.6788 49.5897 19.5897 49.134L24.7131 46.5709Z"
        fill="#6754F4"
      ></motion.path>

      {/* exhaust */}
      <motion.g variants={exhaustVariants} initial="initial" animate="animate">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.7837 49.418C27.4128 49.418 27.9228 49.928 27.9228 50.5571V55.6833C27.9228 56.3125 27.4128 56.8225 26.7837 56.8225C26.1545 56.8225 25.6445 56.3125 25.6445 55.6833V50.5571C25.6445 49.928 26.1545 49.418 26.7837 49.418Z"
          fill="#7867F5"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.4795 49.418C33.1086 49.418 33.6186 49.928 33.6186 50.5571V59.6704C33.6186 60.2995 33.1086 60.8095 32.4795 60.8095C31.8503 60.8095 31.3403 60.2995 31.3403 59.6704V50.5571C31.3403 49.928 31.8503 49.418 32.4795 49.418Z"
          fill="#7867F5"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.6057 49.418C38.2348 49.418 38.7448 49.928 38.7448 50.5571V55.6833C38.7448 56.3125 38.2348 56.8225 37.6057 56.8225C36.9765 56.8225 36.4665 56.3125 36.4665 55.6833V50.5571C36.4665 49.928 36.9765 49.418 37.6057 49.418Z"
          fill="#7867F5"
        ></path>
      </motion.g>

      {/* top left dash */}
      <motion.path
        d="M14.1392 22.668C14.7683 22.668 15.2783 23.178 15.2783 23.8071V31.3076C15.2783 31.9367 14.7683 32.4468 14.1392 32.4468C13.51 32.4468 13 31.9367 13 31.3076V23.8071C13 23.178 13.51 22.668 14.1392 22.668Z"
        fill="#CCC6FB"
      ></motion.path>
      {/* bottom left dash */}
      <motion.path
        d="M8.13916 38.8086C8.7683 38.8086 9.27831 39.3186 9.27831 39.9478V50.3086C9.27831 50.9377 8.7683 51.4478 8.13916 51.4478C7.51002 51.4478 7 50.9377 7 50.3086V39.9478C7 39.3186 7.51002 38.8086 8.13916 38.8086Z"
        fill="#CCC6FB"
      ></motion.path>
      {/* middle right dash */}

      <motion.path
        d="M57.1392 26.668C57.7683 26.668 58.2783 27.178 58.2783 27.8071V35.3071C58.2783 35.9363 57.7683 36.4463 57.1392 36.4463C56.51 36.4463 56 35.9363 56 35.3071V27.8071C56 27.178 56.51 26.668 57.1392 26.668Z"
        fill="#CCC6FB"
      ></motion.path>
    </motion.svg>
  );
};
