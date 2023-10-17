import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { IoClose } from 'react-icons/io5';
import {
	MdFullscreen,
	MdVrpano,
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos
} from 'react-icons/md';
import Modal from 'Components/Element/Modal';
import RenderIf from 'Components/Element/RenderIf';
import Button from 'Components/Element/Button';

import PanoramaList from 'Kembaraloka/Data/PanoramaList';
import Panorama360 from 'Kembaraloka/UI/Menu/Panorama360';

const PanoramaModal = ({ onClose }) => {
	const [currentVal, setCurrentVal] = useState(null);
	const [fullscreen, setFullscreen] = useState(false);
	return (
		<>
			<Modal
				isOpen={!!currentVal}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonOnClick={onClose}
				closeButtonClassName={clsx(
					'!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden',
					fullscreen ? 'hidden' : ''
				)}
				transition={true}
				transitionBase="h-0 xl:!h-auto"
				transitionOpen="!h-[85vh] xl:!h-auto"
				className={clsx(
					fullscreen
						? '!p-0 !inset-0'
						: 'rounded-t-3xl xl:rounded-[36px] !p-4 !inset-x-0 !bottom-0 !top-auto xl:!inset-x-[10%] xl:!inset-y-10'
				)}
				onClose={() => setCurrentVal(null)}
			>
				<Panorama360Modal
					onClose={() => setCurrentVal(null)}
					setFullscreen={() => setFullscreen(!fullscreen)}
					{...{ currentVal, fullscreen }}
				/>
			</Modal>
			<div className="w-full h-full pt-4 xl:py-8 xl:px-10 flex flex-col rounded-3xl bg-shades-0">
				<h4 className="px-8 text-h5 xl:text-h4 text-c-blue-900 font-bold text-center">
					Panorama 360° UGM
				</h4>
				<div className="flex-grow px-4 mt-4 xl:my-4 max-h-full overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-2 auto-rows-max">
					<RenderIf when={!currentVal}>
						{PanoramaList?.map((val, index) => {
							return (
								<div
									className="flex flex-col justify-center items-center gap-4 p-2 rounded-lg hover:bg-c-yellow-100 hover:cursor-pointer"
									onClick={() => {
										setFullscreen(false);
										setCurrentVal(val);
									}}
									key={index}
								>
									<div className="relative h-32 w-32">
										<Image
											src={val.thumbnail}
											layout="fill"
											objectFit="contain"
											alt={`image ${val.name}`}
										/>
									</div>
									<p className="text-center text-b-lg font-bold">{val.name}</p>
								</div>
							);
						})}
					</RenderIf>
				</div>
				<Button
					color="yellow"
					text="Tutup"
					className="hidden xl:block self-end"
					onClick={onClose}
				/>
			</div>
		</>
	);
};

const Panorama360Modal = ({
	currentVal,
	fullscreen,
	setFullscreen,
	onClose
}) => {
	const [index, setIndex] = useState(0);

	return (
		<div
			className={clsx(
				'w-full h-full pt-8 pb-2 xl:py-4 flex flex-col bg-shades-0',
				fullscreen ? '!py-0 xl:!py-4' : 'rounded-3xl'
			)}
		>
			<div
				className={clsx(
					'px-10 mb-4 flex justify-center xl:justify-between items-center',
					fullscreen ? '!hidden xl:!flex' : ''
				)}
			>
				<h3 className="text-h5 xl:text-h3 font-bold text-center">
					{currentVal?.list360[index]?.name}
				</h3>
				<span className="hidden xl:flex flex-col items-center">
					<MdVrpano className="w-10 h-10" />
					<h6 className="font-bold text-center">Panorama</h6>
				</span>
			</div>
			<div className="flex-grow relative min-h-[40vh] bg-neutral-300">
				<RenderIf when={currentVal?.list360.length > 0 && index > 0}>
					<button
						className={clsx(
							'absolute z-[100] top-1/2 left-[2%] translate-y-[-50%] p-2',
							'rounded-full bg-c-yellow-500'
						)}
						onClick={() => setIndex(index - 1)}
					>
						<MdOutlineArrowBackIos className="w-6 h-6 text-shades-100" />
					</button>
				</RenderIf>
				<RenderIf
					when={
						currentVal?.list360.length > 0 &&
						index < currentVal?.list360.length - 1
					}
				>
					<button
						className={clsx(
							'absolute z-[100] top-1/2 right-[2%] translate-y-[-50%] p-2',
							'rounded-full bg-c-yellow-500'
						)}
						onClick={() => setIndex(index + 1)}
					>
						<MdOutlineArrowForwardIos className="w-6 h-6 text-shades-100" />
					</button>
				</RenderIf>

				<RenderIf
					when={currentVal && !fullscreen && currentVal?.list360[index]?.src}
				>
					<Panorama360
						imageLocation={
							process.env.NEXT_PUBLIC_BASE_URL +
							'/assets/kembaraloka/panorama360/images/' +
							currentVal?.list360[index]?.src
						}
					/>
				</RenderIf>
				<RenderIf
					when={currentVal && fullscreen && currentVal?.list360[index]?.src}
				>
					<Panorama360
						imageLocation={
							process.env.NEXT_PUBLIC_BASE_URL +
							'/assets/kembaraloka/panorama360/images/' +
							currentVal?.list360[index]?.src
						}
					/>
				</RenderIf>
				<RenderIf when={fullscreen}>
					<span onClick={setFullscreen}>
						<IoClose
							className={clsx(
								'absolute top-6 !right-6 z-10 !h-12 !w-12 p-1',
								'xl:hidden rounded-full text-c-blue-900 bg-c-yellow-500',
								'hover:bg-c-yellow-500 hover:cursor-pointer'
							)}
						/>
					</span>
				</RenderIf>
			</div>
			<div
				className={clsx(
					'px-10 py-4 relative flex justify-center xl:justify-between items-center gap-2',
					fullscreen ? '!h-0 xl:!h-auto !p-0 xl:!px-10 xl:!py-4' : ''
				)}
			>
				<Button
					className={fullscreen ? 'hidden xl:block' : ''}
					color="yellow"
					text="Kembali"
					onClick={onClose}
				/>
				<audio
					className="absolute left-1/2 -translate-x-1/2 -translate-y-[150%] xl:translate-y-0"
					src={
						process.env.NEXT_PUBLIC_BASE_URL +
						'/assets/kembaraloka/panorama360/voiceOver/' +
						currentVal?.list360[index]?.voiceOver
					}
					controls
					controlsList="nodownload"
					volume={1}
				/>
				<button
					className={clsx(
						'p-2.5 bg-c-blue-500 rounded-full',
						'hover:cursor-pointer hover:scale-110 transition-all',
						fullscreen ? 'hidden xl:block' : ''
					)}
					onClick={setFullscreen}
				>
					<MdFullscreen className="w-6 h-6 text-shades-0" />
				</button>
			</div>
		</div>
	);
};

export default PanoramaModal;
