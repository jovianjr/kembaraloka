import React, { Suspense } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Panorama360 = ({ imageLocation }) => {
	return (
		<Canvas style={{ width: '100%', height: '100%' }}>
			<Suspense fallback={null}>
				<Generate360Image {...{ imageLocation }} />
				<OrbitControls
					autoRotate="true"
					autoRotateSpeed={0.4}
					minDistance={5}
					maxDistance={40}
				/>
			</Suspense>
		</Canvas>
	);
};

const Generate360Image = ({ imageLocation }) => {
	const myTexture = useTexture(imageLocation);

	return (
		<>
			<mesh position={[0, 0, 0]} scale={[-1, 1, 1]}>
				<sphereGeometry attach="geometry" args={[50, 50, 50]} />
				<meshBasicMaterial
					attach="material"
					map={myTexture}
					side={THREE.DoubleSide}
				/>
			</mesh>
		</>
	);
};

export default Panorama360;
