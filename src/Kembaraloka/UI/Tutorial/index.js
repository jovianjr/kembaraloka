import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { STATUS } from 'react-joyride';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from 'Components/Element/Button';
import RenderIf from 'Components/Element/RenderIf';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

export default function Tutorial({ isOpen, onClose }) {
	const [index, setIndex] = useState(0);

	const handleJoyrideCallback = data => {
		const { status, index } = data;
		setIndex(index);

		if ([STATUS?.FINISHED, STATUS?.SKIPPED].includes(status)) {
			onClose();
		}
	};

	return (
		<>
			<RenderIf when={index === 0}>
				<div className="fixed z-[500] bottom-[-2.5%] left-[-10%] xl:left-[7.5%] 3xl:left-[12.5%]">
					<div className="relative w-[47.5vw] sm:w-[45vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] rotate-[25deg] xl:rotate-0">
						<Image
							alt="Palopi"
							src="/assets/kembaraloka/tutorial/palopi.png"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
				<div className="fixed z-[500] bottom-[-2.5%] right-[-10%] xl:right-[7.5%] 3xl:right-[12.5%]">
					<div className="relative w-[47.5vw] sm:w-[45vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] rotate-[-25deg] xl:rotate-0">
						<Image
							alt="Palopo"
							src="/assets/kembaraloka/tutorial/palopo.png"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</RenderIf>
			<RenderIf when={index === 1}>
				<div className="fixed z-[500] top-1/4 left-0 rotate-[35deg] translate-x-[-25%]">
					<div className="relative w-[40vw] sm:w-[30vw] md:w-[25vw] xl:w-[15vw]">
						<Image
							alt="Palopi"
							src="/assets/kembaraloka/tutorial/palopi.png"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</RenderIf>
			<RenderIf when={index > 1 && index < 7}>
				<div className="fixed z-[500] bottom-[5%] xl:bottom-auto xl:top-[0%] right-0 rotate-[-35deg] translate-x-[25%]">
					<div className="relative w-[40vw] sm:w-[25vw] md:w-[20vw] xl:w-[15vw]">
						<Image
							alt="Palopo"
							src="/assets/kembaraloka/tutorial/palopo.png"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</RenderIf>
			<RenderIf when={index === 7}>
				<div className="fixed z-[500] bottom-1/4 xl:bottom-1/4 left-0 rotate-[35deg] translate-x-[-25%]">
					<div className="relative w-[40vw] sm:w-[30vw] md:w-[25vw] xl:w-[15vw]">
						<Image
							alt="Palopi"
							src="/assets/kembaraloka/tutorial/palopi.png"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</RenderIf>
			<Joyride
				steps={steps}
				run={isOpen}
				callback={handleJoyrideCallback}
				showProgress={false}
				tooltipComponent={index === 0 && Tooltip}
				continuous
				showSkipButton
				spotlightClicks
				disableOverlayClose
				disableCloseOnEsc
				styles={{
					beacon: {
						display: 'none'
					},
					options: {
						arrowColor: '#F5F5F5'
					},
					tooltip: {
						backgroundColor: '#F5F5F5',
						borderRadius: '16px',
						padding: '20px 10px 5px 10px',
						padding:
							window?.screen?.width > 500
								? '20px 10px 5px 10px'
								: '15px 7px 3px 7px',
						width:
							window?.screen?.width > 500
								? '240px'
								: window?.screen?.width > 300
								? '50vw'
								: '40vw'
					},
					overlay: { height: '100%' },
					tooltipContent: {
						padding: '10px'
					},
					tooltipFooter: {
						marginTop: '0'
					},
					buttonClose: {
						display: 'none'
					},
					buttonNext: {
						backgroundColor: 'transparent',
						padding: '4px'
					},
					buttonBack: {
						backgroundColor: 'transparent',
						marginRight: '0',
						padding: '4px'
					}
				}}
				locale={{
					back: (
						<IoIosArrowDropleftCircle className="w-10 h-10 text-c-orange-500" />
					),
					next: (
						<IoIosArrowDroprightCircle className="w-10 h-10 text-c-orange-500" />
					),
					last: (
						<strong
							className="text-c-blue-900 text-b-md font-bold hover:underline"
							aria-label="last"
						>
							Selesai
						</strong>
					),
					skip: (
						<strong
							className="text-c-blue-900 text-b-md font-bold hover:underline"
							aria-label="skip"
						>
							Lewati
						</strong>
					)
				}}
			/>
		</>
	);
}

const Content = ({ children }) => {
	return <p className="text-c-blue-900 text-b-md font-medium">{children}</p>;
};

const Tooltip = ({ skipProps, primaryProps, tooltipProps }) => {
	const [swiper, setSwiper] = useState();

	const NextAction = e => {
		if (swiper.activeIndex !== 2) return swiper.slideTo(2);

		return primaryProps.onClick(e);
	};

	return (
		<div
			{...tooltipProps}
			className={clsx(
				'absolute xl:p-4 w-[90vw] xl:w-[50vw] -translate-x-1/2 -translate-y-1/2',
				'xl:bg-gradient-to-br xl:from-shades-0/70 xl:to-shades-0/40 xl:glassmo-kembaraloka',
				'flex justify-center items-center '
			)}
		>
			<div className="relative w-full h-full px-10 py-8 rounded-3xl bg-shades-0">
				<h4 className="text-h5 xl:text-h4 text-c-blue-900 text-center font-bold">
					Selamat Datang di{' '}
					<span className="text-c-orange-500 font-deco text-d-sm xl:text-d-md">
						Kembara Loka
					</span>{' '}
					2.0
				</h4>
				<p className="text-c-blue-900 text-center text-b-md xl:text-b-lg font-medium">
					Untuk melanjutkan pertualanganmu, yuk simak tutorial singkat di bawah
					ini!
				</p>
				<div className="max-h-[40vh] py-4 xl:py-10">
					<Swiper
						loop
						autoplay={{
							delay: 2000,
							disableOnInteraction: false
						}}
						pagination={{
							clickable: true
						}}
						modules={[Autoplay, Pagination]}
						className="h-[25vh] xl:h-[35vh] -mb-[2vh]"
						onSwiper={swiper => setSwiper(swiper)}
					>
						{['desktop.png', 'mobile.png'].map((val, index) => {
							return (
								<SwiperSlide key={index}>
									<div className="relative w-full h-[20vh] xl:h-[30vh] bg-shades-0">
										<Image
											src={`/assets/kembaraloka/tutorial/${val}`}
											alt={val}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="w-full flex justify-center xl:justify-between items-center">
					<Button
						type="secondary"
						className="hover:cursor-pointer hidden xl:block"
						text="Lewati"
						{...skipProps}
					/>
					<Button
						color="yellow"
						className="w-fit hover:cursor-pointer"
						text="Selanjutnya"
						onClick={NextAction}
					/>
				</div>

				<span {...skipProps}>
					<IoClose
						className={clsx(
							'absolute top-2 !right-2 !h-10 !w-10 p-1',
							'xl:hidden rounded-full text-c-blue-900 ',
							'hover:cursor-pointer'
						)}
					/>
				</span>
			</div>
		</div>
	);
};

const steps = [
	{
		target: 'body',
		placement: 'center',
		disableBeacon: true
	},
	{
		target: '.tutorial-compass',
		placement: 'right',
		title: <span className="text-h6 text-c-blue-900 font-bold">Kompas 3D</span>,
		content: (
			<Content>
				membantu mengetahui arah mata angin sesuai dengan dunia nyata
			</Content>
		)
	},
	{
		target: '.tutorial-button-1',
		placement: 'left',
		title: <span className="text-h6 text-c-blue-900 font-bold">Musik</span>,
		content: <Content>matikan dan nyalakan latar musik</Content>
	},
	{
		target: '.tutorial-button-2',
		placement: 'left',
		title: <span className="text-h6 text-c-blue-900 font-bold">Panorama</span>,
		content: (
			<Content>kumpulan foto 360° bangunan - bangunan di sekitar UGM</Content>
		)
	},
	{
		target: '.tutorial-button-3',
		placement: 'left',
		title: (
			<span className="text-h6 text-c-blue-900 font-bold">Lokasi UGM</span>
		),
		content: (
			<Content>
				deskripsi singkat lokasi dan alamat Universitas Gadjah Mada
			</Content>
		)
	},
	{
		target: '.tutorial-button-4',
		placement: 'left',
		title: (
			<span className="text-h6 text-c-blue-900 font-bold">Mode Jelajah</span>
		),
		content: (
			<Content>
				nikmati perjalanan mengelilingi UGM dengan Trans Gadjah Mada
			</Content>
		)
	},
	{
		target: '.tutorial-button-5',
		placement: 'left',
		title: (
			<span className="text-h6 text-c-blue-900 font-bold">
				Kuis Kembara Loka
			</span>
		),
		content: (
			<Content>kumpulan kuis tentang UGM yang terbagi dalam 7 klaster</Content>
		)
	},
	{
		target: '.tutorial-help',
		placement: 'right-end',
		title: <span className="text-h6 text-c-blue-900 font-bold">Bantuan</span>,
		content: <Content>untuk mengulangi tutorial</Content>
	}
];
