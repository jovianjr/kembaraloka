import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Button from 'Components/Element/Button';
import Modal from 'Components/Element/Modal';
import RenderIf from 'Components/Element/RenderIf';
import clsx from 'clsx';

import dynamic from 'next/dynamic';
const Anime = dynamic(() => import('react-anime'), { ssr: false });

export default function Onboard({ startVmap, animation, setAnimation }) {
	const [puzzle, setPuzzle] = useState(true);
	const [title, setTitle] = useState(true);
	const [subTitle, setSubTitle] = useState(false);
	const [SVGdone, setSVGdone] = useState(false);

	const delay = (fun, delay) => {
		setTimeout(function () {
			fun();
		}, delay);
	};

	const onStart = async () => {
		setTitle(false);
		startVmap();

		delay(() => setSubTitle(true), 500);
	};

	useEffect(() => {
		if (SVGdone) {
			delay(() => setSubTitle(false), 2000);
			delay(() => setPuzzle(false), 2000);
			delay(() => setAnimation(false), 3500);
		}
	}, [SVGdone]);

	const stylesSVG = useSpring({
		translateX: SVGdone ? '-8%' : '0',
		delay: 200
	});

	const stylesVersion = useSpring({
		right: SVGdone ? '-8%' : '-100%',
		delay: 200
	});

	const stylesStroke = useSpring({
		width: SVGdone ? '100%' : '0',
		delay: 200
	});

	return (
		<RenderIf when={animation}>
			<Modal
				isOpen={puzzle}
				header={false}
				footer={false}
				closeButton={false}
				overlayClassName="!bg-shades-100/20"
				className="!bg-transparent !inset-0"
				bodyClassName="flex flex-col items-center justify-center"
				transition
			>
				<div className="absolute top-0 right-0 ">
					<div className="relative w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw]">
						<Image
							src="/assets/kembaraloka/images/onboard/corner-rainbow.svg"
							alt="rainbow corner"
							width="84%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 ">
					<div className="relative w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] rotate-180">
						<Image
							src="/assets/kembaraloka/images/onboard/corner-rainbow.svg"
							alt="rainbow corner"
							width="84%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</Modal>
			<Modal
				isOpen={title}
				header={false}
				footer={false}
				closeButton={false}
				overlayClassName="!bg-transparent"
				className="!bg-transparent !inset-0"
				bodyClassName="flex flex-col items-center justify-center"
				transition
			>
				<div
					className={clsx(
						'bg-gradient-to-r from-shades-0/60 via-shades-0/25 to-shades-0/0 glassmo',
						'relative z-[1100] px-8 py-12 rounded-3xl',
						'flex flex-col items-center justify-center',
						'w-[70vw] sm:w-[50vw] lg:w-auto'
					)}
				>
					<h1 className="text-h5 xl:text-h1 text-center text-shades-0 font-bold">
						JELAJAHI PETA
					</h1>
					<p className="-mt-2 xl:-mt-4 mb-6 text-d-sm xl:text-d-lg text-center font-deco text-c-orange-500">
						Virtual UGM
					</p>
					<Button
						color="yellow"
						text={
							<span className="text-b-lg xl:text-h6">Mulai Petualanganmu</span>
						}
						onClick={onStart}
					/>

					<div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-[65%]">
						<div className="relative w-[30vw] sm:w-[15vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] rotate-[-20deg]">
							<Image
								src="/assets/kembaraloka/images/onboard/balairung.png"
								alt="balairung"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4">
						<div className="relative w-[30vw] sm:w-[15vw] md:w-[20vw] lg:w-[15vw] xl:w-[12.5vw] rotate-[15deg]">
							<Image
								src="/assets/kembaraloka/images/onboard/monas.png"
								alt="balairung"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
					</div>

					<h6 className="w-[70vw] sm:w-[50vw] lg:w-[30vw] absolute bottom-[-50%] md:bottom-[-40%] xl:bottom-[-35%] left-1/2 -translate-x-1/2 text-center text-shades-0 text-b-lg md:text-b-xl xl:text-h6">
						**Pengalaman terbaik didapatkan pada PC / Laptop
					</h6>
				</div>
			</Modal>
			<Modal
				isOpen={subTitle}
				header={false}
				footer={false}
				closeButton={false}
				overlayClassName="!bg-transparent"
				className="!bg-transparent"
				bodyClassName="flex flex-col items-center justify-center"
				transition
			>
				<div className="relative pb-2 flex gap-2 items-end">
					<animated.div className="w-[50vw]" style={stylesSVG}>
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 367.21 65.33"
						>
							<defs>
								<style>
									{
										'.cls-1{fill:#f06522;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
									}
								</style>
							</defs>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M125.16 10.67a2.17 2.17 0 0 1 1.66.62 2.31 2.31 0 0 1 .73 1.63 2.25 2.25 0 0 1-.59 1.66c-.28.28-.65.66-1.11 1.15s-1.36 1.36-2.7 2.63-2.76 2.57-4.26 3.91-3.41 3-5.72 4.89-4.68 3.8-7.1 5.65-5.23 3.86-8.39 6-6.36 4.25-9.6 6.23a26.2 26.2 0 0 0 1.46 3.26 38.69 38.69 0 0 0 2.77 4.4 33.55 33.55 0 0 0 4 4.64 24.75 24.75 0 0 0 5.34 3.85 18.07 18.07 0 0 0 6.62 2.15 2.13 2.13 0 0 1 1.52.93 2.41 2.41 0 0 1 .42 1.77 2.1 2.1 0 0 1-.73 1.42 2.28 2.28 0 0 1-1.56.59 1 1 0 0 1-.34-.07 21.46 21.46 0 0 1-6.62-1.94 28.51 28.51 0 0 1-5.72-3.53A35.88 35.88 0 0 1 90.58 58 42.26 42.26 0 0 1 87 53.25a33.73 33.73 0 0 1-2.42-4.5l-8.49 16.42A2.23 2.23 0 0 1 74 66.42a2.53 2.53 0 0 1-1.11-.28 2.32 2.32 0 0 1-1-3.19l26.87-51.83a2 2 0 0 1 1.35-1.18 2.31 2.31 0 0 1 1.8.17 2.18 2.18 0 0 1 1.14 1.35 2.43 2.43 0 0 1-.14 1.81L90 38.35q5.82-3.74 11.44-7.93t9.28-7.28q3.67-3.09 6.93-6.06T122 13c.74-.74 1.25-1.27 1.52-1.6a2.41 2.41 0 0 1 1.64-.73ZM142.76 54.12a2.34 2.34 0 0 1 2.42 2.32 2.38 2.38 0 0 1-.62 1.66 28.66 28.66 0 0 1-8.25 5.65 23.17 23.17 0 0 1-10.11 2.6 12.64 12.64 0 0 1-2.36-.21 8 8 0 0 1-6.44-5 12.77 12.77 0 0 1-.52-8.39 20.2 20.2 0 0 1 4.88-8.52 24.84 24.84 0 0 1 7.55-5.61q4.31-2.09 7.63-1 3.6 1.17 3.95 4.16a5.84 5.84 0 0 1-.59 3 13.41 13.41 0 0 1-1.73 2.77 19.25 19.25 0 0 1-2.29 2.32c-.86.74-1.49 1.28-1.91 1.6a5.89 5.89 0 0 1-.9.62 17.12 17.12 0 0 1-4.85 2 23.5 23.5 0 0 1-3.91.79c-.77.05-1.38.07-1.84.07a2.46 2.46 0 0 1-1.59-.55 8.16 8.16 0 0 0 .48 4.85 3.7 3.7 0 0 0 2.91 2.22q3.46.61 8.56-1.56a23.65 23.65 0 0 0 7.93-5.17 2.16 2.16 0 0 1 1.6-.62Zm-17.53-6.69a15 15 0 0 0-2.22 3 16.57 16.57 0 0 0 8-2.29 16.19 16.19 0 0 0 3.36-2.87c1.18-1.27 1.79-2.21 1.83-2.81l-.76-.35a4.86 4.86 0 0 0-.83-.07 9.89 9.89 0 0 0-4.47 1.46 19.17 19.17 0 0 0-4.91 3.93Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M187 56.06a2.21 2.21 0 0 1 1.42 1.07 2.34 2.34 0 0 1 .28 1.77 2.1 2.1 0 0 1-1 1.42c-.69.41-1.47.85-2.32 1.31s-2.08 1-3.67 1.7a32.1 32.1 0 0 1-4.47 1.53 14.64 14.64 0 0 1-4.37.38 6.32 6.32 0 0 1-3.71-1.24 5 5 0 0 1-1.59-1.87 4.08 4.08 0 0 1-.32-2.32 13 13 0 0 1 .52-2.32 12.68 12.68 0 0 1 1.32-2.6q1-1.56 1.59-2.46c.42-.6 1-1.46 1.88-2.57a1.83 1.83 0 0 0 .2-.27c.1-.14.19-.27.28-.38a2.17 2.17 0 0 0 .21-.32 124.17 124.17 0 0 0-15.39 14.83 2.19 2.19 0 0 1-1.52.77 2.48 2.48 0 0 1-1.63-.45 2.31 2.31 0 0 1-.59-3.09 89.74 89.74 0 0 0 7.69-15.38 83.2 83.2 0 0 0-9.94 8.59q-6.21 6-11.47 11.78a2.31 2.31 0 0 1-3.12.28 2 2 0 0 1-.93-1.39 2.37 2.37 0 0 1 .24-1.66l14.48-25a2.43 2.43 0 0 1 1.42-1.17 2.3 2.3 0 0 1 1.81.21 2.24 2.24 0 0 1 1.1 1.42 2.43 2.43 0 0 1-.24 1.84l-5.26 9q9.28-8.67 13.23-9.84a2.35 2.35 0 0 1 .62-.07 3 3 0 0 1 2.85 1.59q1.17 2.14-1.25 8.25 6.3-5.76 9.63-7.21c2.22-1 4-1.18 5.27-.62a2.21 2.21 0 0 1 1.28 1.28 2.09 2.09 0 0 1-.1 1.84 53.84 53.84 0 0 1-5.13 8q-5.13 6.93-4.23 7.62a4.23 4.23 0 0 0 3.05.21A25.77 25.77 0 0 0 180 59a37.94 37.94 0 0 0 5.24-2.67 2.26 2.26 0 0 1 1.76-.27Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M206.93 14.51a2.19 2.19 0 0 1 1.76.21 2.35 2.35 0 0 1 1.15 1.39 2.3 2.3 0 0 1-.21 1.8l-12.89 23.42q6.16-2.91 9.49-1.59A4.86 4.86 0 0 1 209 42.3a6.82 6.82 0 0 1 .42 4.16 20.45 20.45 0 0 1-4 8.21 32.5 32.5 0 0 1-7.21 7.07c-2.61 1.82-4.84 2.74-6.69 2.74A4.61 4.61 0 0 1 188 63a7.15 7.15 0 0 1-1.6-2.77l-1.73 3.12a2.11 2.11 0 0 1-2 1.18 2.29 2.29 0 0 1-1.11-.28 2.34 2.34 0 0 1-1.18-1.42 2.2 2.2 0 0 1 .21-1.77l24.95-45.39a2.37 2.37 0 0 1 1.39-1.16Zm-12.76 33.75a2.52 2.52 0 0 1-1.45.42l-2.56 4.71a17.29 17.29 0 0 0 .34 4.19c.28 1.32.6 2.07 1 2.25 1.11 0 2.67-.8 4.68-2.42a32.24 32.24 0 0 0 5.58-5.86 15.45 15.45 0 0 0 3.05-6c.18-.83.09-1.32-.28-1.46q-1.19-.48-4.3.83a34.06 34.06 0 0 0-6.06 3.34ZM238.73 54.64a2.12 2.12 0 0 1 1.63.72 2.31 2.31 0 0 1 .62 1.7 2.16 2.16 0 0 1-.72 1.6c-.65.64-1.34 1.28-2.08 1.9s-1.7 1.35-2.88 2.18a17.6 17.6 0 0 1-3.67 2 9.62 9.62 0 0 1-3.57.77 5.46 5.46 0 0 1-2.49-.56 3.83 3.83 0 0 1-1.94-2.49 9.14 9.14 0 0 1 .2-4.78q-8.39 8.39-13.16 7.48a4.22 4.22 0 0 1-2.57-1.42 4.12 4.12 0 0 1-1-2.74c0-1.89 1-4.53 3.05-7.9a52.77 52.77 0 0 1 7.14-9.1q4-4.08 6.34-4.64a5.24 5.24 0 0 1 4.15.76 7.13 7.13 0 0 1 2.36 2.71.06.06 0 0 0 .07-.07 2.4 2.4 0 0 1 1.45-.87 2.37 2.37 0 0 1 1.7.31 2.16 2.16 0 0 1 1 1.39 2.47 2.47 0 0 1-.21 1.73 80.9 80.9 0 0 0-4.51 9.43c-1.2 3-1.73 5.1-1.59 6.16q1.11.15 3.81-1.56a33.65 33.65 0 0 0 5.13-4 2.52 2.52 0 0 1 1.74-.71Zm-26.88 6q1.86-.21 6.06-3.89a75.21 75.21 0 0 0 9-9.63 5.58 5.58 0 0 0-1.76-3.12.87.87 0 0 0-.35-.07h-.2a13.35 13.35 0 0 0-3 2.47 44.59 44.59 0 0 0-4.72 5.37c-3.09 3.88-4.76 6.84-5.03 8.83Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M264.44 39.46a6.32 6.32 0 0 1-.28 3.4 14.32 14.32 0 0 1-1.16 2.91 16.34 16.34 0 0 1-1.21 1.73 2.35 2.35 0 0 1-4.16-1.18 2.14 2.14 0 0 1 .49-1.73 12 12 0 0 0 1.31-2.12 3.52 3.52 0 0 0 .49-1.69q-2.3.55-9.05 7.72a205.81 205.81 0 0 0-13.34 15.77 2.28 2.28 0 0 1-1.87 1 2.16 2.16 0 0 1-1.38-.49 2 2 0 0 1-.94-1.42 2.53 2.53 0 0 1 .31-1.76l15.87-24.33a2.39 2.39 0 0 1 1.49-1 2.2 2.2 0 0 1 1.77.35 2.11 2.11 0 0 1 .94 1.25 2.54 2.54 0 0 1 0 1.59q5.13-4.23 8-3a4.55 4.55 0 0 1 2.72 3ZM290.64 54.64a2.1 2.1 0 0 1 1.62.72 2.36 2.36 0 0 1 .63 1.7 2.21 2.21 0 0 1-.73 1.6c-.65.64-1.34 1.28-2.08 1.9s-1.7 1.35-2.87 2.18a17.67 17.67 0 0 1-3.68 2 9.62 9.62 0 0 1-3.57.77 5.49 5.49 0 0 1-2.49-.56 3.83 3.83 0 0 1-1.94-2.49 9.05 9.05 0 0 1 .21-4.78q-8.39 8.39-13.17 7.48a4.2 4.2 0 0 1-2.57-1.41 4.07 4.07 0 0 1-1-2.75c-.05-1.89 1-4.53 3-7.9a52.77 52.77 0 0 1 7.19-9.1c2.65-2.72 4.77-4.27 6.34-4.64a5.27 5.27 0 0 1 4.16.76 7.11 7.11 0 0 1 2.31 2.67.06.06 0 0 0 .07-.07 2.43 2.43 0 0 1 1.46-.87 2.34 2.34 0 0 1 1.69.31 2.13 2.13 0 0 1 1 1.39 2.47 2.47 0 0 1-.21 1.73 79.18 79.18 0 0 0-4.5 9.43c-1.2 3-1.73 5.1-1.6 6.16q1.11.15 3.81-1.56a32.7 32.7 0 0 0 5.13-4 2.53 2.53 0 0 1 1.79-.67Zm-26.89 6q1.88-.21 6.06-3.89a75.21 75.21 0 0 0 9-9.63 5.58 5.58 0 0 0-1.76-3.12.86.86 0 0 0-.34-.07h-.21a13.35 13.35 0 0 0-3.05 2.47 43.72 43.72 0 0 0-4.71 5.37q-4.58 5.84-4.99 8.83ZM341.85 59.9a2.32 2.32 0 0 1 1.49 1 2.36 2.36 0 0 1-.73 3.25 2.34 2.34 0 0 1-1.8.32 34.2 34.2 0 0 0-7.11-.8 35.86 35.86 0 0 0-6.51.48 41.57 41.57 0 0 0-5.75 1.49 41.11 41.11 0 0 0-4.78 1.91c-1.28.62-2.5 1.28-3.68 2s-2 1.17-2.35 1.45l-.87.62a2.11 2.11 0 0 1-1.45.56 2.19 2.19 0 0 1-1.81-.9 2.28 2.28 0 0 1-.52-1.7 2.42 2.42 0 0 1 .8-1.56 36.7 36.7 0 0 1 4.51-3 3.32 3.32 0 0 1 .13-.35l25.64-50.86a2.52 2.52 0 0 1 1.39-1.14 2.15 2.15 0 0 1 1.77.13 2.43 2.43 0 0 1 1.18 1.36 2.35 2.35 0 0 1-.11 1.8l-23.21 45.88a40.6 40.6 0 0 1 23.77-1.94ZM378.5 48.33a2.28 2.28 0 0 1 1.56.9 2.24 2.24 0 0 1 .45 1.73 2.18 2.18 0 0 1-.9 1.53 16 16 0 0 1-4.88 2.42 20.78 20.78 0 0 1-5.79 1 32.08 32.08 0 0 1-9 9.29 9.21 9.21 0 0 1-4.85 1.66 4.73 4.73 0 0 1-2.84-.9 6.78 6.78 0 0 1-2.91-5.09 14.3 14.3 0 0 1 1.59-7.45 30.49 30.49 0 0 1 3.29-5.55 35.54 35.54 0 0 1 4.51-5 18.67 18.67 0 0 1 5.2-3.43 7.83 7.83 0 0 1 5-.62 6.06 6.06 0 0 1 2.88 1.73 5.73 5.73 0 0 1 1.42 3c.32 2-.17 4.43-1.46 7.34a12.42 12.42 0 0 0 5-2.14 2.3 2.3 0 0 1 1.73-.42Zm-21.06 12.89a25.44 25.44 0 0 0 6.23-6.1 11.15 11.15 0 0 1-2.28-1.18 7.09 7.09 0 0 1-2.84-4.09 25.77 25.77 0 0 0-3.4 5.48c-.28.65-.54 1.32-.8 2a7 7 0 0 0-.35 2.57 2.5 2.5 0 0 0 .93 2.15c.33.23 1.17-.05 2.51-.83Zm10.32-17.88a1.43 1.43 0 0 0-.48-.07c-1 0-2.29.62-3.95 1.87-.7 2.4-.42 4.07.83 5a5.38 5.38 0 0 0 2.29.9q2.55-4.5 2.21-6.79a1.13 1.13 0 0 0-.9-.91Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M408.23 49.68a2.26 2.26 0 0 1 1.63.76 2.31 2.31 0 0 1 .62 1.7 2.16 2.16 0 0 1-.72 1.6 41.09 41.09 0 0 1-3.92 3.18q-2.46 1.8-5.82 3.92a40 40 0 0 1-7.21 3.57 19.72 19.72 0 0 1-6.89 1.45 8.76 8.76 0 0 1-5.75-1.86 7.85 7.85 0 0 1-2.64-4.5l-3.32 6.86a2.21 2.21 0 0 1-2.15 1.31 2 2 0 0 1-1-.27 2.19 2.19 0 0 1-1.21-1.32 2.31 2.31 0 0 1 .1-1.8l24.6-50.38a2.16 2.16 0 0 1 1.32-1.21 2.2 2.2 0 0 1 1.76.1 2.39 2.39 0 0 1 1.22 1.35 2 2 0 0 1-.14 1.77l-15.43 31.8 12-8.53a2.42 2.42 0 0 1 1.77-.41 2.23 2.23 0 0 1 1.52.93 2.2 2.2 0 0 1 .42 1.77A2.31 2.31 0 0 1 398 43l-15.69 11.15c-.74 3.1-.46 5.15.84 6.17q2.21 1.66 6.65.17a42.66 42.66 0 0 0 9-4.36 51.46 51.46 0 0 0 7.69-5.79 2.39 2.39 0 0 1 1.74-.66Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
							<MyAnime {...{ setSVGdone }}>
								<path
									className="cls-1"
									d="M433.59 54.64a2.12 2.12 0 0 1 1.63.72 2.36 2.36 0 0 1 .63 1.7 2.21 2.21 0 0 1-.73 1.6c-.65.64-1.34 1.28-2.08 1.9s-1.7 1.35-2.88 2.18a17.35 17.35 0 0 1-3.67 2 9.62 9.62 0 0 1-3.57.77 5.49 5.49 0 0 1-2.49-.56 3.83 3.83 0 0 1-1.94-2.49 9.05 9.05 0 0 1 .21-4.78q-8.4 8.39-13.17 7.48a4.25 4.25 0 0 1-2.53-1.41 4.12 4.12 0 0 1-1-2.75c0-1.89 1-4.53 3.05-7.9a52.77 52.77 0 0 1 7.1-9.1c2.65-2.72 4.77-4.27 6.34-4.64a5.27 5.27 0 0 1 4.16.76 7.19 7.19 0 0 1 2.35 2.67.06.06 0 0 0 .07-.07 2.4 2.4 0 0 1 1.46-.87 2.34 2.34 0 0 1 1.69.31 2.16 2.16 0 0 1 1 1.39 2.47 2.47 0 0 1-.21 1.73 79.18 79.18 0 0 0-4.5 9.43c-1.21 3-1.74 5.1-1.6 6.16q1.11.15 3.81-1.56a33.17 33.17 0 0 0 5.13-4 2.52 2.52 0 0 1 1.74-.67Zm-26.88 6q1.86-.21 6.06-3.89a75.21 75.21 0 0 0 9-9.63A5.52 5.52 0 0 0 420 44a.86.86 0 0 0-.34-.07h-.21a13.35 13.35 0 0 0-3 2.47 43.72 43.72 0 0 0-4.71 5.37q-4.61 5.84-5.03 8.83Z"
									transform="translate(-70.14 -8.33)"
								/>
							</MyAnime>
						</svg>
					</animated.div>
					<animated.div
						className="absolute right-[-15%] xl:right-[-10%] text-shades-0 text-h6 md:text-h3 xl:text-h1 font-bold"
						style={stylesVersion}
					>
						2.0
					</animated.div>
				</div>
				<div className="relative w-[60vw]">
					<animated.hr
						className="absolute w-full border-t-2 xl:border-t-4 text-shades-0"
						style={stylesStroke}
					/>
				</div>
			</Modal>
		</RenderIf>
	);
}

const MyAnime = props => (
	<Anime
		easing="easeInOutCubic"
		duration={3000}
		svg
		component="g"
		delay={(el, index) => index * 1500}
		direction="normal"
		complete={() => {
			props.setSVGdone(true);
		}}
		fillOpacity={1}
		strokeDashoffset={el => {
			var pathLength = '0';
			for (var key in el.children) {
				let child = el.children[key];
				if (child.getTotalLength) {
					pathLength = child.getTotalLength().toString();
					el.setAttribute('stroke-dasharray', pathLength);
				}
			}
			return [pathLength, 0];
		}}
		{...props}
	/>
);
