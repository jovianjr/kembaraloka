import Model from './model';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import React, {
	Suspense,
	useRef,
	useState,
	useEffect,
	useLayoutEffect
} from 'react';
import * as THREE from 'three';

import dataHalte from 'Kembaraloka/Data/Halte';
import dataInfografis from 'Kembaraloka/Data/Infografis';
import Background from 'Kembaraloka/Object/Background';
import Bus from 'Kembaraloka/Object/Bus';
import { useSpring, animated } from '@react-spring/three';
import ObjectName from 'Kembaraloka/Object/ObjectName';
import RenderIf from 'Components/Element/RenderIf';

const config = {
	camStartPosition: new THREE.Vector3(0, 2.5, 3),
	camFov: 50,
	camSBAwalFov: 55,
	camSBAkhirFov: 100
	// camFov: 20, //50
	// camSBAwalFov: 25, //55 //onboard
	// camSBAkhirFov: 50 //100 //onboard
};

export default function MainObject(props) {
	const [showPlayGaleri, setShowPlayGaleri] = useState(false);
	const [object, setObject] = useState(null);

	const showModal = e => {
		let data;

		if (e?.name?.includes('HALTE')) {
			data = dataHalte.find(obj => obj.objectName === e?.name);
			if (data) props.setShowHalte(data);
		} else {
			data = dataInfografis.find(obj => obj.objectName === e?.name);
			if (data) {
				setObject(data);
				props.setShowInfografis(data);
			}
		}
	};

	return (
		<>
			<ObjectName {...{ object }} />
			<Canvas
				camera={{ position: config.camStartPosition, fov: config.camSBAwalFov }}
			>
				<ambientLight intensity={0.5} />
				<spotLight position={[0, 100, 0]} angle={1} />
				<Suspense fallback={<Loader />}>
					<LoaderContainer
						onComplete={() => {
							props.setLoading(false);
						}}
					>
						<Model
							scale={0.25}
							showModal={showModal}
							showModalGaleri={setShowPlayGaleri}
							setObject={setObject}
							freeControl={props.freeControl}
						/>
						<Controls
							onboard={props.onboard}
							modalShow={!!props.showInfografis}
							object={props.showInfografis}
							{...props}
						/>
						<Background />
					</LoaderContainer>
				</Suspense>
			</Canvas>
		</>
	);
}

const LoaderContainer = ({ onLoad, onComplete, children }) => {
	if (onLoad) {
		onLoad();
	}

	useLayoutEffect(() => {
		if (onComplete) {
			onComplete();
		}
	});

	return children;
};

function Loader() {
	// const { active, progress, errors, item, loaded, total } = useProgress();
	const { progress } = useProgress();

	return (
		<Html
			center
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'center'
			}}
		>
			<div
				style={{
					display: 'inline-block',
					borderRadius: '25px',
					padding: '10px 20px',
					marginBottom: '2%'
				}}
				className="text-center !mb-[15%] lg:!mb-[2%] glassmo"
			>
				<p className="py-2 font-medium">Sedang memuat</p>
				<p>{progress.toFixed(2).toString()} %</p>
			</div>
		</Html>
	);
}

function Controls(props) {
	const [modal, setModal] = useState(false);
	const { gl, camera } = useThree();
	const vec = new THREE.Vector3();
	const controls = useRef();

	useEffect(() => {
		if (props.modalShow) {
			setModal(true);
		}
	}, [props.modalShow]);

	useFrame(state => {
		const step = 0.01;

		// set compass
		if (props.freeControl) props.setCamera(camera.rotation.z.toFixed(2));

		// console.log('fov', state.camera.fov);
		// console.log('target x', controls.current.target.x.toFixed(4));
		// console.log('target z', controls.current.target.z.toFixed(4));

		// console.log('cam x', state.camera.position.x.toFixed(4));
		// console.log('cam y', state.camera.position.y.toFixed(4));
		// console.log('cam z', state.camera.position.z.toFixed(4));
		// console.log(' ');

		if (modal) {
			// console.log(props.object?.position?);
			const vectorLookAt = controls.current.target;
			const lookAt = new THREE.Vector3(
				props.object?.target?.x,
				0,
				props.object?.target?.z
			);
			state.camera.fov = THREE.MathUtils.lerp(
				state.camera.fov,
				// props.modalShow ? 25 : 25, //config.camSBAkhirFov,
				props.modalShow ? 25 : config.camSBAkhirFov,
				0.05
			);
			state.camera.position.lerp(
				vec.set(
					props.modalShow ? props.object?.camera?.x : camera.position.x,
					props.modalShow ? props.object?.camera?.y : camera.position.y,
					props.modalShow ? props.object?.camera?.z : camera.position.z
				),
				0.05
			);
			state.camera.lookAt(vectorLookAt.lerp(lookAt, 0.1));
			state.camera.updateProjectionMatrix();

			//45
			// if (camera.fov >= 20 && !props.modalShow) {
			if (camera.fov >= 45 && !props.modalShow) {
				setModal(false);
			}
		}

		// ketika fov masih onboard
		if (camera.fov >= config.camSBAwalFov) {
			state.camera.fov = THREE.MathUtils.lerp(
				state.camera.fov,
				props.onboard ? config.camSBAkhirFov : config.camFov,
				step
			);
			state.camera.position.lerp(
				vec.set(
					props.onboard ? camera.position.x : config.camStartPosition.x,
					props.onboard ? camera.position.y : config.camStartPosition.y,
					props.onboard ? camera.position.z : config.camStartPosition.z
				),
				step
			);
			state.camera.lookAt(0, 0, 0);
			state.camera.updateProjectionMatrix();
		} else if (
			camera.fov < config.camSBAwalFov &&
			camera.fov != null &&
			!props.freeControl
		) {
			props.setTutorial(true);
		}

		// konfigurasi orbitcontrol: pan
		if (controls.current) {
			var _v = new THREE.Vector3();
			var minPan = new THREE.Vector3(-10, 0, -10);
			var maxPan = new THREE.Vector3(10, 0, 10);
			_v.copy(controls.current.target);
			controls.current.target.clamp(minPan, maxPan);
			_v.sub(controls.current.target);
			camera.position.sub(_v);
		}
	});

	return (
		<>
			<TourMode controls={controls} tourMode={props.tourMode} />
			<OrbitControls
				ref={controls}
				autoRotateSpeed={3}
				autoRotate={props.onboard}
				enablePan={props.freeControl && !props.tourMode}
				enableRotate={props.freeControl && !props.tourMode}
				enableZoom={props.freeControl && !props.tourMode}
				minDistance={1}
				maxDistance={props.tourMode ? 100 : 15}
				maxPolarAngle={Math.PI / 2 - 0.1}
				target={[0, 0, 0]}
				args={[camera, gl.domElement]}
			/>
		</>
	);
}

const tourRoute = [
	{ x: -1.68781, z: 2.96382, offset: { x: 0.25794, z: 3.57246 } },
	{ x: -4.13762, z: 2.16416, offset: { x: -6.1102, z: 1.69833 } },
	{ x: -2.96683, z: -1.57309, offset: { x: -2.33247, z: -3.46837 } },
	{ x: -0.61543, z: -0.76703, offset: { x: 1.35197, z: -0.1597 } },
	{ x: -1.12659, z: 0.99371, offset: { x: -1.68781, z: 2.96382 } },
	{ x: 2.9658, z: 2.23592, offset: { x: 4.88736, z: 2.78282 } },
	{ x: 2.23255, z: 3.37653, offset: { x: 0.67313, z: 4.62554 } },
	{ x: 0.78331, z: 3.64683, offset: { x: -1.68781, z: 2.96382 } }
];

const TourMode = ({ controls, tourMode }) => {
	return (
		<>
			<Bus
				tourRoute={tourRoute}
				controls={controls}
				tourMode={tourMode}
				scale={0.195}
			/>
		</>
	);
};
