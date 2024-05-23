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

const CubeScene = ({ size = '6rem', cubeSize = [1,1,1] }) => {
  return (
    <span
      className='cube-inline'
      style={{ width: size, height: size }}
    >
      <Canvas className='cube-canvas'>
        <ambientLight intensity={0.5} />
        <FloatingCube size={cubeSize} />
      </Canvas>
    </span>
  );
};

export default CubeScene;
