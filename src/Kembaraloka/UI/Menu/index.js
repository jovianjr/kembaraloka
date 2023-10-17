import clsx from 'clsx';
import { useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdBus } from 'react-icons/io';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import { MdQuiz, MdVrpano } from 'react-icons/md';

import Modal from 'Components/Element/Modal';
import RenderIf from 'Components/Element/RenderIf';

import LocationModal from 'Kembaraloka/UI/Menu/LocationModal';
import PanoramaModal from 'Kembaraloka/UI/Menu/PanoramaModal';
import TourModal from 'Kembaraloka/UI/Menu/TourModal';
import QuizModal from 'Kembaraloka/UI/Menu/QuizModal';
import HelpIcon from 'Kembaraloka/UI/Menu/helpIcon';

import dynamic from 'next/dynamic';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

export default function Menu({
	music,
	musicToggle,
	setTutorial,
	setFreeControl,
	tourMode,
	setTourMode
}) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<ReactTooltip
				id="menu-btn"
				delayShow={500}
				className="font-bold !rounded-lg"
			/>

			<ReactTooltip
				id="coming-soon-tour"
				textColor="#232D58"
				backgroundColor="#FFC00E"
				borderColor="#FFC00E"
				arrowColor="#FFC00E"
				className="text-center font-bold !rounded-lg"
			>
				<p className="text-b-lg">Mode Jelajah</p>
				<p className="text-b-md font-semibold">Coming Soon!</p>
			</ReactTooltip>
			<div className="fixed z-[100] top-[50%] translate-y-[-50%] right-[3%] flex flex-col gap-4 py-3 px-2 rounded-3xl glassmo">
				<IconButton
					className="tutorial-button-1"
					dataTip={music ? 'Matikan Musik' : 'Mainkan Musik'}
					Icon={music ? IoVolumeHigh : IoVolumeMute}
					onClick={musicToggle}
				/>
				<IconButton
					className="tutorial-button-2"
					dataTip="Panorama 360 UGM"
					Icon={MdVrpano}
					onClick={() => setShowModal('panorama')}
				/>
				<IconButton
					className="tutorial-button-3"
					dataTip="Lokasi UGM"
					Icon={FaMapMarkedAlt}
					onClick={() => setShowModal('location')}
				/>
				<IconButton
					className="tutorial-button-4"
					dataTip="Mode Jelajah"
					dataFor="coming-soon-tour"
					Icon={IoMdBus}
					onClick={() => setTourMode(!tourMode)}
					// onClick={() => setShowModal('tour')}
				/>
				<IconButton
					className="tutorial-button-5"
					dataTip="Kuis Kembara Loka"
					Icon={MdQuiz}
					onClick={() => setShowModal('quiz')}
				/>
			</div>

			<div
				data-tip="Bantuan"
				data-for="menu-btn"
				data-effect="solid"
				data-place="right"
				className="tutorial-help fixed z-[100] bottom-[2.5%] left-[3%] rounded-full hover:cursor-pointer hover:scale-105 transition-all"
			>
				<HelpIcon
					className="text-c-blue-900"
					onClick={() => {
						setTutorial(true);
						setFreeControl(false);
					}}
				/>
			</div>

			<p className="fixed z-[100] bottom-[3%] right-[5%] text-b-md font-bold text-shades-0">
				© PPSMB UGM 2022
			</p>

			<Modal
				isOpen={showModal === 'panorama'}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
				className="!pt-8 xl:!p-4 rounded-t-3xl xl:rounded-[36px] !inset-x-0 !bottom-0 !top-auto xl:!inset-x-[20%] xl:!inset-y-24 xl:!bg-shades-0/30 xl:glassmo !outline-none !border-none"
				transition={true}
				transitionBase="h-0 xl:!h-auto"
				transitionOpen="!h-[80vh] xl:!h-auto"
				onClose={() => setShowModal(false)}
			>
				<PanoramaModal onClose={() => setShowModal(false)} />
			</Modal>
			<Modal
				isOpen={showModal === 'location'}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
				onClose={() => setShowModal(false)}
				className="!py-4 xl:!p-4 rounded-xl xl:rounded-[36px] !inset-x-[5%] !inset-y-[20%] xl:!inset-x-[27.5%] xl:!inset-y-16 xl:!bg-shades-0/30 xl:glassmo !outline-none !border-none"
			>
				<LocationModal onClose={() => setShowModal(false)} />
			</Modal>
			<Modal
				isOpen={showModal === 'tour'}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
				className="!pt-8 xl:!p-4 rounded-t-3xl xl:rounded-[36px] !inset-x-0 !bottom-0 !top-auto xl:!inset-x-[20%] xl:!inset-y-16 xl:!bg-shades-0/30 xl:glassmo !outline-none !border-none"
				transition={true}
				transitionBase="h-0 xl:!h-auto"
				transitionOpen="!h-[80vh] xl:!h-auto"
				onClose={() => setShowModal(false)}
			>
				<TourModal onClose={() => setShowModal(false)} />
			</Modal>
			<Modal
				isOpen={showModal === 'quiz'}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
				className="!pt-8 xl:!p-4 rounded-t-3xl xl:rounded-[36px] !inset-x-0 !bottom-0 !top-auto xl:!inset-x-[27.5%] xl:!inset-y-16 xl:!bg-shades-0/30 xl:glassmo !outline-none !border-none"
				transition={true}
				transitionBase="h-0 xl:!h-auto"
				transitionOpen="!h-[80vh] xl:!h-auto"
				onClose={() => setShowModal(false)}
			>
				<QuizModal onClose={() => setShowModal(false)} />
			</Modal>
		</>
	);
}

const IconButton = ({
	dataTip = '',
	dataFor = 'menu-btn',
	dataEffect = 'solid',
	dataPlace = 'left',
	className = '',
	Icon,
	onClick
}) => {
	return (
		<div
			data-tip={dataTip}
			data-for={dataFor}
			data-effect={dataEffect}
			data-place={dataPlace}
		>
			<button
				className={clsx(
					'p-2.5 bg-shades-0 text-c-blue-900 rounded-full',
					'hover:cursor-pointer hover:scale-110 transition-all',
					className
				)}
			>
				<Icon className="w-6 h-6" {...{ onClick }} />
			</button>
		</div>
	);
};
