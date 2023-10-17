import RenderIf from 'Components/Element/RenderIf';

import Compass from 'Kembaraloka/UI/Compass';
import Menu from 'Kembaraloka/UI/Menu';
import Tutorial from 'Kembaraloka/UI/Tutorial';
import Infografis from 'Kembaraloka/UI/Infografis';

export default function UI({
	camera,
	tutorial,
	setTutorial,
	setFreeControl,
	music,
	musicToggle,
	showInfografis,
	setShowInfografis,
	showHalte,
	setShowHalte,
	tourMode,
	setTourMode
}) {
	return (
		<>
			<Infografis
				isOpen={!!showInfografis}
				onClose={() => setShowInfografis(null)}
				data={showInfografis}
			/>
			<Infografis
				isOpen={!!showHalte}
				onClose={() => setShowHalte(null)}
				data={showHalte}
			/>
			<RenderIf when={tutorial}>
				<Tutorial
					isOpen={tutorial}
					onClose={() => {
						setTutorial(false);
						setFreeControl(true);
					}}
				/>
			</RenderIf>
			<RenderIf
				when={
					showInfografis?.objectName?.includes('HALTE')
						? false
						: !showInfografis
				}
			>
				<Compass {...{ camera }} />
				<Menu
					{...{
						music,
						musicToggle,
						setTutorial,
						setFreeControl,
						tourMode,
						setTourMode
					}}
				/>
			</RenderIf>
		</>
	);
}
