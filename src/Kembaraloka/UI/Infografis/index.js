import clsx from 'clsx';
import { useState } from 'react';
import RenderIf from 'Components/Element/RenderIf';
import Button from 'Components/Element/Button';
import Modal from 'Components/Element/Modal';
import Image from 'next/image';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Md360, MdQuiz } from 'react-icons/md';
import Detail360 from 'Kembaraloka/UI/Infografis/Detail360';

export default function Infografis({ isOpen, onClose, data }) {
	const [Val360, setVal360] = useState(null);
	const [fullscreen, setFullscreen] = useState(false);
	return (
		<>
			<RenderIf when={!data?.objectName?.includes('HALTE')}>
				<Modal
					isOpen={isOpen}
					onClose={onClose}
					header={false}
					footer={false}
					closeButton={true}
					closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
					overlayClassName="bg-transparent"
					className="w-full xl:w-[40vw] !inset-x-0 !bottom-0 !top-auto xl:!inset-x-20 xl:!inset-y-10 xl:py-3 xl:px-3 rounded-t-3xl xl:rounded-3xl xl:!bg-shades-0/30 xl:glassmo"
					transition={true}
					transitionBase="h-0 xl:!h-auto"
					transitionOpen="!h-[80vh] xl:!h-auto"
				>
					<div className="flex flex-col px-4 pt-12 pb-8 xl:p-8 h-full gap-4 rounded-2xl bg-shades-0">
						<h3 className="px-5 xl:px-2 text-h5 xl:text-h3 text-c-blue-900 text-center font-bold">
							{data?.title}
						</h3>
						<div className="flex-grow px-2 max-h-full overflow-y-auto">
							<RenderIf when={data?.images?.length === 1}>
								<div className="relative w-full h-[30vh] bg-shades-0">
									<Image
										src={`/assets/kembaraloka/images/gambarInfografis/${data?.images?.[0]}`}
										alt={data?.images?.[0]}
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</RenderIf>
							<RenderIf when={data?.images?.length > 1}>
								<Swiper
									loop
									autoplay={{
										delay: 3000,
										disableOnInteraction: false
									}}
									pagination={{
										clickable: true
									}}
									modules={[Autoplay, Pagination]}
									className="h-[35vh] -mb-[2vh]"
								>
									{data?.images?.map((val, index) => {
										return (
											<SwiperSlide key={index}>
												<div className="relative w-full h-[30vh] bg-shades-0">
													<Image
														src={`/assets/kembaraloka/images/gambarInfografis/${val}`}
														alt={val}
														layout="fill"
														objectFit="cover"
													/>
												</div>
											</SwiperSlide>
										);
									})}
								</Swiper>
							</RenderIf>
							<p className="pt-4 text-b-lg font-medium text-justify">
								{data?.body}
							</p>
						</div>
						<div className="px-2 flex items-center justify-center xl:justify-between">
							<Button
								color="blue"
								type="secondary"
								text="Kembali"
								className="hidden xl:block"
								onClick={onClose}
							/>
							<div className="flex items-center gap-2">
								<a href={data?.quizLink} target="_blank" rel="noreferrer">
									<Button
										text={
											<h6 className="flex gap-2 text-shades-0">
												<MdQuiz className="w-5 h-5" />
												Kuis
											</h6>
										}
									/>
								</a>
								<RenderIf when={data?.src360 || data?.src360Image}>
									<Button
										color="yellow"
										text={
											<h6 className="flex gap-2">
												<Md360 className="w-5 h-5" />
												Detail 360°
											</h6>
										}
										onClick={() => setVal360(data)}
									/>
								</RenderIf>
							</div>
						</div>
					</div>
				</Modal>
			</RenderIf>
			<Modal
				isOpen={
					!!Val360 || data?.objectName?.includes('HALTE') ? isOpen : false
				}
				header={false}
				footer={false}
				closeButton={true}
				closeButtonClassName="!h-10 !w-10 !text-c-blue-900 !bg-transparent xl:hidden"
				closeButtonOnClick={onClose}
				onClose={() =>
					data?.objectName?.includes('HALTE') ? onClose() : setVal360(null)
				}
				className={clsx(
					'xl:glassmo xl:!bg-shades-0/30 !outline-none !border-none',
					fullscreen
						? '!p-0 !inset-0'
						: 'rounded-t-3xl xl:rounded-[36px] !p-4 !inset-x-0 !bottom-0 !top-auto xl:!inset-x-[10%] xl:!inset-y-10'
				)}
				transition={true}
				transitionBase="h-0 xl:!h-auto"
				transitionOpen="!h-[85vh] xl:!h-auto"
			>
				<Detail360
					onClose={() =>
						data?.objectName?.includes('HALTE') ? onClose() : setVal360(null)
					}
					setFullscreen={() => setFullscreen(!fullscreen)}
					data={data?.objectName?.includes('HALTE') ? data : Val360}
					{...{ fullscreen }}
				/>
			</Modal>
		</>
	);
}
