import Image from 'next/image';
import Button from 'Components/Element/Button';
import RenderIf from 'Components/Element/RenderIf';
import { useState } from 'react';
import clsx from 'clsx';

const QuizModal = ({ onClose }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="w-full h-full pt-4 xl:py-8 xl:px-10 flex flex-col rounded-3xl bg-shades-0">
			<h4 className="px-8 text-h5 xl:text-h4 text-c-blue-900 font-bold text-center">
				Panorama 360° UGM
			</h4>
			<div className="py-4 flex items-center justify-center font-bold text-center">
				<div className="flex items-center justify-center font-bold text-center">
					{['Trans Gadjah Mada', 'Halte Kembara'].map((val, index) => {
						return (
							<p
								className={clsx(
									'py-2 px-4 rounded-lg text-b-lg text-c-blue-900 hover:cursor-pointer hover:underline',
									activeTab === index
										? 'bg-c-yellow-300 font-bold'
										: 'font-medium'
								)}
								onClick={() => setActiveTab(index)}
								key={index}
							>
								{val}
							</p>
						);
					})}
				</div>
			</div>
			<div className="mt-2 xl:my-2 flex-grow max-h-full overflow-y-auto">
				<RenderIf when={activeTab === 0}>
					<div className="px-20 xl:px-10 grid grid-cols-1 xl:grid-cols-2 gap-8 auto-rows-max">
						{['Trans 01', 'Trans 02']?.map((val, index) => {
							return (
								<div
									className="flex flex-col justify-center items-center gap-4 p-2 rounded-lg hover:bg-c-yellow-100 hover:cursor-pointer"
									key={index}
								>
									<div className="relative h-[20vh] xl:h-[30vh] w-full">
										<Image
											src={`/assets/kembaraloka/images/transgadjahmada.png`}
											layout="fill"
											objectFit="contain"
											alt={`image halte`}
										/>
									</div>
									<p className="flex-grow text-center text-b-lg font-bold">
										{val}
									</p>
								</div>
							);
						})}
					</div>
				</RenderIf>
				<RenderIf when={activeTab === 1}>
					<div className="px-10 xl:px-2 grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 auto-rows-max">
						{[
							'(01) GSP - Wisdom Park',
							'(02) Mirota - Medica',
							'(03) GSP - Jalan Kaliurang',
							'(04) GSP - FTP',
							'(05) Jalan Kaliurang - Medica ',
							'(06) Sardjito - MM'
						]?.map((val, index) => {
							return (
								<div
									className="flex flex-col justify-center items-center gap-4 p-2 rounded-lg hover:bg-c-yellow-100 hover:cursor-pointer"
									key={index}
								>
									<div className="relative h-[15vh] w-full">
										<Image
											src={`/assets/kembaraloka/images/halte.png`}
											layout="fill"
											objectFit="contain"
											alt={`image halte`}
										/>
									</div>
									<p className="flex-grow text-center text-b-lg font-bold">
										{val}
									</p>
								</div>
							);
						})}
					</div>
				</RenderIf>
			</div>
			<div className="hidden xl:flex justify-end">
				<Button text="Tutup" className="text-shades-0" onClick={onClose} />
			</div>
		</div>
	);
};

export default QuizModal;
