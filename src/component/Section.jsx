import './../App.css';
import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
// import CubeScene from './Cube';
const CubeScene = React.lazy(() => import('./Cube'));

function Section({
  section_title = 'Section Title',
  classnames = '',
  children = null,
  section_id = '',
  container_motion = {},
  item_motion = {},
  styleCon = {},
  windowWidth = 800,
}) {
  return (
    <motion.section
      className={` ${classnames} about-me adjustable-padding min-height `}
      {...styleCon}
      {...container_motion}
      id={section_id}
    >
      <motion.h2
        {...item_motion}
        style={{
          fontSize: '4rem',
          margin: '2rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        whileHover={{ scale: 1.15 }}
      >
        {windowWidth > 700 && (<Suspense fallback={<div>Loading...</div>}>
          <CubeScene cubeSize={[2.5, 2.5, 2.5]} />
        </Suspense>)}
        {section_title}
        {windowWidth > 700 && (<Suspense fallback={<div>Loading...</div>}>
          <CubeScene cubeSize={[2.5, 2.5, 2.5]} />
        </Suspense>)}
      </motion.h2>
      {React.Children.map(children, (child) => (
        <motion.div
          {...item_motion}
          whileHover={{ scale: 1.05 }}
          style={{
            margin: '2rem 0',
            fontSize: '1.5rem',
          }}
        >
          {child}
        </motion.div>
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
