import React, { useState, useRef, useEffect } from 'react';
import RenderIf from 'Components/Element/RenderIf';

import MainObject from 'Kembaraloka/Object';
import LoadingPage from 'Kembaraloka/UI/Loading';
import Onboard from 'Kembaraloka/UI/Onboard';
import UI from 'Kembaraloka/UI';

export default function KembaraLoka() {
	const audioRef = useRef();
	const [loading, setLoading] = useState(true);
	const [onboard, setOnboard] = useState(true);
	const [tourMode, setTourMode] = useState(false);
	const [tutorial, setTutorial] = useState(false);
	const [camera, setCamera] = useState(null);
	const [freeControl, setFreeControl] = useState(false);
	const [music, setMusic] = useState(true);
	const [animation, setAnimation] = useState(true);
	const [showInfografis, setShowInfografis] = useState(false);
	const [showHalte, setShowHalte] = useState(false);

	const startVmap = () => {
		setOnboard(false);
		audioRef.current.volume = 0.1;
		audioRef.current.play();
		audioRef.current.loop = true;
	};

	const musicToggle = () => {
		if (music) audioRef.current.pause();
		else audioRef.current.play();
		setMusic(!music);
	};

	return (
		<>
			<RenderIf when={loading}>
				<LoadingPage />
			</RenderIf>
			<RenderIf when={!loading}>
				<Onboard {...{ startVmap, animation, setAnimation }} />
				<audio
					ref={audioRef}
					src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/kembaraloka/anthem.mp3`}
				/>
			</RenderIf>

			<RenderIf when={!loading && !animation && (tutorial || freeControl)}>
				<UI
					{...{
						camera,
						tutorial,
						setTutorial,
						setFreeControl,
						music,
						musicToggle,
						showInfografis,
						setShowInfografis,
						showHalte,
						setShowHalte,
						tourMode,
						setTourMode
					}}
				/>
			</RenderIf>
			<MainObject
				{...{
					setLoading,
					onboard,
					tourMode,
					setTourMode,
					freeControl,
					tutorial,
					camera,
					setCamera,
					setTutorial,
					showInfografis,
					setShowInfografis,
					showHalte,
					setShowHalte
				}}
			/>
		</>
	);
}
