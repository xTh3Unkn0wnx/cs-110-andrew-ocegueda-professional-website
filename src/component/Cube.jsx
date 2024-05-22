import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import './../App.css';

const FloatingCube = ({ size = [1, 1, 1] }) => {
  const cubeRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const rotateX = time * 0.5;
    const rotateY = time * 0.75;
    if (cubeRef.current) {
      cubeRef.current.rotation.x = rotateX;
      cubeRef.current.rotation.y = rotateY;
    }
  });

  return (
    <Box
      ref={cubeRef}
      args={size}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial color='lightgrey' />
    </Box>
  );
};

const CubeScene = ({ size = '6rem', cubeSize }) => {
  const style = {
    inline: {
      display: 'inline-block',
      width: size,
      height: size,
    },
    canvas: {
      width: '100%',
      height: '100%',
    },
  };
  return (
    <span style={style.inline}>
      <Canvas style={style.canvas}>
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[, 10, 10]} /> */}
        <FloatingCube size={cubeSize}/>
      </Canvas>
    </span>
  );
};

const style = {
  inline: {
    display: 'inline-block',
    width: '6rem',
    height: '6rem',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
};

export default CubeScene;
