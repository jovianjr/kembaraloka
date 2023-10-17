import { FaGlobeAsia } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import Button from 'Components/Element/Button';
import SocialMediaButton from 'Components/Element/SocialMediaButton';

const LocationModal = ({ onClose }) => {
	return (
		<div className="w-full h-full py-4 xl:py-8 xl:px-10 flex flex-col rounded-3xl bg-shades-0">
			<h4 className="text-h5 xl:text-h4 font-bold text-center">Lokasi UGM</h4>
			<div className="flex-grow my-5 flex flex-col gap-6 max-h-full overflow-y-auto">
				<iframe
					width="100%"
					height="60%"
					title="Lokasi UGM"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15812.695295992151!2d110.3774998!3d-7.7713847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac4d7b5fcf34f8e4!2sGadjah%20Mada%20University!5e0!3m2!1sen!2sid!4v1621710538791!5m2!1sen!2sid"
					allowFullScreen
					loading="lazy"
				/>
				<div className="px-8 xl:px-0 flex flex-col gap-1 xl:gap-2">
					<p className="text-b-lg xl:text-b-2xl font-bold">
						Universitas Gadjah Mada
					</p>
					<p className="text-b-lg xl:text-b-xl font-medium">
						Bulaksumur, Kabupaten Sleman <br /> Daerah Istimewa Yogyakarta 55281
					</p>
					<div className="flex flex-row xl:flex-col gap-4 xl:gap-2">
						<span className="flex items-center gap-2 xl:gap-3.5">
							<FaGlobeAsia className="w-5 h-5" />
							<p className="text-b-lg xl:text-b-xl font-medium">ugm.ac.id</p>
						</span>
						<span className="flex items-center gap-2 xl:gap-3.5">
							<IoCallSharp className="w-5 h-5" />
							<p className="text-b-lg xl:text-b-xl font-medium">
								0811235678919
							</p>
						</span>
					</div>
				</div>
			</div>
			<div className="px-8 xl:px-0 flex justify-between items-center">
				<div className="w-full xl:w-1/2 grid grid-cols-6 justify-items-center xl:justify-items-start">
					<SocialMediaButton
						icon="line"
						href="https://line.me/R/ti/p/@mlo6507f"
						bgColor="c-green-500"
					/>
					<SocialMediaButton
						icon="instagram"
						href="https://www.instagram.com/ppsmb_ugm/"
						bgColor="c-purple-300"
					/>
					<SocialMediaButton
						icon="twitter"
						href="https://twitter.com/ppsmb_ugm/"
						bgColor="c-yellow-500"
					/>
					<SocialMediaButton
						icon="tiktok"
						href="https://www.tiktok.com/@ppsmb_ugm"
						bgColor="c-teal-500"
					/>
					<SocialMediaButton
						icon="youtube"
						href="https://www.youtube.com/c/ppsmbpalapa_gplus"
						bgColor="c-orange-500"
					/>
					<SocialMediaButton
						icon="facebook"
						href="https://web.facebook.com/pages/category/Local-business/PPSMB-UGM-325374494259950/?_rdc=1&_rdr"
						bgColor="c-blue-700"
					/>
				</div>
				<Button
					color="yellow"
					text="Tutup"
					className="hidden xl:block self-end"
					onClick={onClose}
				/>
			</div>
		</div>
	);
};

export default LocationModal;
