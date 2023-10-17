import React, { useMemo } from 'react';
import dataInfografis from 'Kembaraloka/Data/Infografis';
import dataHalte from 'Kembaraloka/Data/Halte';
import RenderIf from 'Components/Element/RenderIf';
import clsx from 'clsx';

export default function LoadingPage({ object = null }) {
	const ObjectName = useMemo(() => {
		if (object) {
			let data;

			if (object?.name?.includes('HALTE')) {
				data = dataHalte.find(obj => obj.objectName === object?.name);
			} else {
				data = dataInfografis.find(obj => obj.objectName === object?.name);
			}
			return data ? data.title : '';
		}
		return null;
	}, [object]);

	return (
		<>
			<RenderIf when={ObjectName}>
				<div
					className={clsx(
						'fixed z-[100] bottom-[3%] left-[50%] -translate-x-1/2',
						'rounded-2xl bg-neutral-50 text-c-blue-900 font-bold'
					)}
				>
					<div className="relative">
						<div
							className="
							absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full
							w-0 h-0 
							border-l-[2.5vh] border-l-transparent
							border-b-[2vh] border-b-neutral-50
							border-r-[2.5vh] border-r-transparent"
						></div>
						<h3 className="p-4 text-center">{ObjectName}</h3>
					</div>
				</div>
			</RenderIf>
		</>
	);
}
