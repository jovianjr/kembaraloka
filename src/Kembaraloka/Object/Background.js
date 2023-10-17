import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
// import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Background() {
	const image = useTexture(
		`${process.env.NEXT_PUBLIC_BASE_URL}/assets/kembaraloka/images/skybox.png`
	);

	return (
		<mesh scale={10} position={[0, 0, 1]}>
			<sphereGeometry args={[5, 6, 10]} />
			<meshBasicMaterial map={image} side={THREE.DoubleSide} opacity={1} />
		</mesh>
	);
}
