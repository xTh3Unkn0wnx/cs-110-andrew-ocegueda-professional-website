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
        className='section-title'
        {...item_motion}
        whileHover={{ scale: 1.15 }}
      >
        {windowWidth > 700 && (
          <Suspense fallback={<div>Loading...</div>}>
            <CubeScene cubeSize={[2.5, 2.5, 2.5]} />
          </Suspense>
        )}
        {section_title}
        {windowWidth > 700 && (
          <Suspense fallback={<div>Loading...</div>}>
            <CubeScene cubeSize={[2.5, 2.5, 2.5]} />
          </Suspense>
        )}
      </motion.h2>
      {React.Children.map(children, (child) => (
        <motion.div
          className='section-child'
          {...item_motion}
          whileHover={{ scale: 1.05 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Section;
