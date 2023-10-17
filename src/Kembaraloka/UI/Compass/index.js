import clsx from 'clsx';
import Image from 'next/image';

export default function Compass({ camera }) {
	return (
		<>
			<div
				className={clsx(
					'tutorial-compass fixed z-[100] top-[3%] xl:top-[5%] left-[3%]',
					'h-[30vw] w-[30vw] sm:h-[25vw] sm:w-[25vw] md:h-[20vw] md:w-[20vw] lg:h-[15vw] lg:w-[15vw] xl:h-[10vw] xl:w-[10vw] p-4 flex items-center justify-center rounded-full glassmo',
					'text-b-md font-bold'
				)}
			>
				<div className="h-full w-full relative">
					<Image
						style={{ transform: 'rotate(' + camera + 'rad)' }}
						src="/assets/kembaraloka/images/compass/Lingkaran.svg"
						layout="fill"
						objectFit="cotain"
						alt="compasss"
					/>
					<div className="h-full w-full absolute">
						<div className="h-[75%] w-[75%] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<Image
								src="/assets/kembaraloka/images/compass/Jarum.svg"
								layout="fill"
								objectFit="contain"
								alt="compasss"
							/>
						</div>
					</div>
				</div>
				{/* angle: <p> {camera}</p> */}
			</div>
		</>
	);
}
