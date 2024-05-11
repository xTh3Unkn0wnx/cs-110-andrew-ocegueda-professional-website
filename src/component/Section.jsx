import "./../App.css";
import { motion } from "framer-motion";
import React from "react";

function Section({
  section_title = "Section Title",
  classnames = "",
  children = null,
  section_id = "",
  container_motion = {},
  item_motion = {},
  styleCon = {},
}) {
  return (
    <motion.section
      className={` ${classnames} about-me adjustable-padding min-height `}
      {...styleCon}
      {...container_motion}
      id={section_id}
    >
      <motion.h2 {...item_motion}
      style={{
        fontSize: "4rem",
        textAlign: "center",
        margin: "2rem 0",
      }}
      whileHover={{ scale: 1.15}}
      >{section_title}</motion.h2>
      {React.Children.map(children, (child) => (
        <motion.div {...item_motion}
        whileHover={{ scale: 1.05}}
        style={{
          margin: "2rem 0",
          fontSize: "1.5rem",
        }}
        >{child}</motion.div>
      ))}
    </motion.section>
  );
}

// const Section = React.forwardRef(
//   (
//     {
//       section_title = "Section Title",
//       classnames = "",
//       children = null,
//       // animation = {
//       //   initial: { opacity: 0 },
//       //   animate: { opacity: 1 },
//       //   transition: { duration: 1},
//       // },
//     },
//     ref
//   ) => {

//     return (
//       <motion.section
//         ref={ref}
//         className={` ${classnames} about-me adjustable-padding min-height `}
//         // initial={animation.initial}
//         // animate={animation.animate}
//         // transition={{ staggerChildren: 2 }}
//         variants={container}
//         initial="hidden"
//         animate="show"
//         whileHover={{ scale: 1.05 }}
//       >
//         <motion.h2 variants={item}>{section_title}</motion.h2>
//         {React.Children.map(children, (child) => (
//           <motion.div
//             // initial={animation.initial}
//             // animate={animation.animate}
//             // transition={animation.transition}
//             variants={item}
//           >
//             {child}
//           </motion.div>
//         ))}
//       </motion.section>
//     );
//   }
// );

// Section.displayName = "Section";

export default Section;
