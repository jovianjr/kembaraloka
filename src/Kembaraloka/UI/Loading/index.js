import React from 'react';

export default function LoadingPage(props) {
	return (
		<>
			<div className="fixed w-full h-full flex items-center justify-center">
				<video width="100%" height="100%" muted loop autoPlay>
					<source
						src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/videos/loading.mp4`}
						type="video/mp4"
					/>
				</video>
			</div>
		</>
	);
}
