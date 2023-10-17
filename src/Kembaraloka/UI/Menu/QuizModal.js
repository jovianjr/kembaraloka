import Image from 'next/image';
import Button from 'Components/Element/Button';
import dataQuiz from 'Kembaraloka/Data/Quiz';

const QuizModal = ({ onClose }) => {
	return (
		<div className="w-full h-full pt-4 xl:py-8 xl:px-10 flex flex-col rounded-3xl bg-shades-0">
			<h4 className="px-8 text-h5 xl:text-h4 text-c-blue-900 font-bold text-center">
				Kuis Kembara Loka
			</h4>
			<div className="flex-grow mt-8 xl:my-8 px-4 max-h-full overflow-y-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
				{dataQuiz?.map((val, index) => {
					return (
						<a
							href={val?.quizLink}
							target="_blank"
							rel="noreferrer"
							className="flex flex-col justify-center items-center gap-4 p-2 rounded-lg hover:bg-c-yellow-100 hover:cursor-pointer"
							key={index}
						>
							<div className="relative h-auto w-full">
								<Image
									src={`/assets/kembaraloka/images/palapa.webp`}
									width="100%"
									height="100%"
									layout="responsive"
									objectFit="contain"
									alt={`image ${val.name}`}
								/>
							</div>
							<p className="flex-grow text-center text-b-lg font-bold">
								{val.name?.toUpperCase()}
							</p>
						</a>
					);
				})}
			</div>
			<div className="flex justify-end">
				<Button
					text="Tutup"
					className="hidden xl:block text-shades-0"
					onClick={onClose}
				/>
			</div>
		</div>
	);
};

export default QuizModal;
