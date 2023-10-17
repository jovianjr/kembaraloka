import clsx from 'clsx';
import { Md360, MdFullscreen } from 'react-icons/md';
import Button from 'Components/Element/Button';
import RenderIf from 'Components/Element/RenderIf';
import Panorama360 from 'Kembaraloka/UI/Menu/Panorama360';

const Detail360Modal = ({ data, fullscreen, setFullscreen, onClose }) => {
	return (
		<div
			className={clsx(
				'w-full h-full py-4 flex flex-col bg-shades-0',
				fullscreen ? '' : 'rounded-3xl'
			)}
		>
			<div className="px-10 flex justify-between items-center">
				<h3 className="text-h5 xl:text-h3 text-c-blue-900 font-bold text-center">
					{data?.title}
				</h3>
				<span className="hidden xl:flex flex-col items-center">
					<h6 className="font-bold text-center">360° View</h6>
					<Md360 className="w-16 h-16 -m-4" />
				</span>
			</div>
			<div className="flex-grow relative my-4 bg-neutral-300">
				<RenderIf when={data?.src360}>
					<iframe
						width="100%"
						height="100%"
						src={data?.src360 + '?autoplay=1'}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</RenderIf>
				<RenderIf when={data?.src360Image && fullscreen}>
					<Panorama360
						imageLocation={
							process.env.NEXT_PUBLIC_BASE_URL +
							'/assets/kembaraloka/panorama360/images/' +
							data?.src360Image
						}
					/>
				</RenderIf>
				<RenderIf when={data?.src360Image && !fullscreen}>
					<Panorama360
						imageLocation={
							process.env.NEXT_PUBLIC_BASE_URL +
							'/assets/kembaraloka/panorama360/images/' +
							data?.src360Image
						}
					/>
				</RenderIf>
			</div>
			<div className="px-10 relative flex justify-center xl:justify-between items-center">
				<Button color="yellow" text="Kembali" onClick={onClose} />
				<RenderIf when={data?.voiceOver}>
					<audio
						className="absolute left-1/2 -translate-x-1/2 -translate-y-[150%] xl:translate-y-0"
						src={
							process.env.NEXT_PUBLIC_BASE_URL +
							'/assets/kembaraloka/panorama360/voiceOver/' +
							data?.voiceOver
						}
						controls
						controlsList="nodownload"
						volume={1}
					/>
				</RenderIf>

				<button
					className={clsx(
						'p-2.5 bg-c-blue-500 rounded-full',
						'hover:cursor-pointer hover:scale-110 transition-all',
						'hidden xl:block'
					)}
					onClick={setFullscreen}
				>
					<MdFullscreen className="w-6 h-6 text-shades-0" />
				</button>
			</div>
		</div>
	);
};

export default Detail360Modal;
