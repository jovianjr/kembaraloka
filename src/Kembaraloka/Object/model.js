/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';

export default function Model(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF(
		`${process.env.NEXT_PUBLIC_BASE_URL}/assets/kembaraloka/Kembara_Loka.glb`
	);

	let start = 0,
		end = 0,
		last = 0;

	async function startCount(e) {
		start = Date.now();
	}

	async function endCount(e) {
		end = Date.now();
		if (end - start < 200 && end - last > 1000) {
			handleClick(e);
			last = Date.now();
		}
	}

	async function handleClick(e) {
		props.showModal({
			position: {
				x: e.object.position.x,
				y: e.object.position.y,
				z: e.object.position.z
			},
			name: e.object.name
		});
	}

	async function handleClickPlayGaleri(e) {
		props.showModalGaleri(true);
	}

	async function handleHover(e) {
		if (!props.freeControl) return;
		props.setObject({
			position: {
				x: e.object.position.x,
				z: e.object.position.z
			},
			name: e.object.name
		});
		document.body.style.cursor = `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/kembaraloka/images/cursor-object.png'), auto`;
	}

	async function clearHover(e) {
		if (!props.freeControl) return;
		props.setObject(null);
		document.body.style.cursor = 'auto';
	}

	return (
		<>
			<group ref={group} {...props} dispose={null}>
				<mesh
					name="ROADS"
					geometry={nodes.ROADS.geometry}
					material={materials.ROADS_BAKED}
					position={[-0.3233, 0.0509, -3.1173]}
				/>
				<mesh
					name="GSP"
					geometry={nodes.GSP.geometry}
					material={materials.GSP_BAKED}
					position={[-6.3618, 0.039, -3.1505]}
					rotation={[-Math.PI, 0.3172, -Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FEB"
					geometry={nodes.FEB.geometry}
					material={materials.FEB_BAKED}
					position={[1.8983, 3.5522, 4.199]}
					rotation={[Math.PI, -1.3054, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="AUDIT_BIO"
					geometry={nodes.AUDIT_BIO.geometry}
					material={materials.AUDIT_BIO_BAKED}
					position={[-20.4463, 0.0338, -25.149]}
					rotation={[-0.001, -0.2862, 0.0091]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PUSAT_PEMBELAJARAN_FEB"
					geometry={nodes.PUSAT_PEMBELAJARAN_FEB.geometry}
					material={materials.PUSAT_PEMBELAJARAN_FEB_BAKED}
					position={[-0.0129, 3.1029, 0.2653]}
					rotation={[0, 1.2891, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="AUDIT_GEO"
					geometry={nodes.AUDIT_GEO.geometry}
					material={materials.AUDIT_GEO_BAKED}
					position={[-14.5331, 0.0311, -26.6522]}
					rotation={[Math.PI, -1.2866, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="LEADERSHIP_HALL"
					geometry={nodes.LEADERSHIP_HALL.geometry}
					material={materials.LEADERSHIP_HALL_BAKED}
					position={[-10.1389, -0.0465, -38.3183]}
					rotation={[0, -0.3464, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="MASKAM"
					geometry={nodes.MASKAM.geometry}
					material={materials.MASKAM_BAKED}
					position={[5.5237, 0.2588, 18.8459]}
					rotation={[0, 1.1382, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PERPUSAT"
					geometry={nodes.PERPUSAT.geometry}
					material={materials.PERPUSAT_BAKED}
					position={[-4.2968, -0.1559, -6.0565]}
					rotation={[0, -0.3065, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="STADION_UGM"
					geometry={nodes.STADION_UGM.geometry}
					material={materials.STADION_UGM_BAKED}
					position={[38.4287, 0.009, -0.4414]}
					rotation={[-Math.PI, 1.5557, -Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FARMASI"
					geometry={nodes.FARMASI.geometry}
					material={materials.FARMASI_BAKED}
					position={[-14.4986, -0.2609, -9.3937]}
					rotation={[0, -0.3685, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FILSAFAT"
					geometry={nodes.FILSAFAT.geometry}
					material={materials.FILSAFAT_BAKED}
					position={[9.2858, -0.0946, 6.324]}
					rotation={[0, -0.3035, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="RSH_SOEPARWI"
					geometry={nodes.RSH_SOEPARWI.geometry}
					material={materials.RSH_SOEPARWI_BAKED}
					position={[29.8477, 1.6674, -15.0537]}
					rotation={[0, 0.1598, 0]}
					scale={0.993}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="LAW_LIBRARY"
					geometry={nodes.LAW_LIBRARY.geometry}
					material={materials.LAW_LIBRARY_BAKED}
					position={[7.4403, -0.173, -1.7343]}
					rotation={[0, 1.2917, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				>
					<mesh
						name="instance_1216"
						geometry={nodes.instance_1216.geometry}
						material={materials.Neutral700}
						rotation={[Math.PI / 2, 0, 0]}
					/>
				</mesh>
				<mesh
					name="ALSC"
					geometry={nodes.ALSC.geometry}
					material={materials.ALSC_BAKED}
					position={[46.1756, 2.1226, -14.3134]}
					rotation={[0, -0.4309, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FIB"
					geometry={nodes.FIB.geometry}
					material={materials.FIB_BAKED}
					position={[-4.4759, 0.0887, 10.8505]}
					rotation={[Math.PI, -1.1353, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FKG"
					geometry={nodes.FKG.geometry}
					material={materials.FKG_BAKED}
					position={[-27.9466, -0.0099, -1.161]}
					rotation={[-Math.PI, 0.3363, -Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FKH"
					geometry={nodes.FKH.geometry}
					material={materials.FKH_BAKED}
					position={[29.6448, -0.0081, -17.5928]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="KEHUTANAN"
					geometry={nodes.KEHUTANAN.geometry}
					material={materials.KEHUTANAN_BAKED}
					position={[7.897, -0.0509, -19.7422]}
					rotation={[0, -0.3168, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="KKMK"
					geometry={nodes.KKMK.geometry}
					material={materials.KKMK_BAKED}
					position={[-29.247, 1.4869, -9.1709]}
					rotation={[0, 1.2836, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PASCASARJANA"
					geometry={nodes.PASCASARJANA.geometry}
					material={materials.PASCASARJANA_BAKED}
					position={[-28.6403, 0.2482, -35.3277]}
					rotation={[Math.PI / 2, 0, 0.1402]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PERTANIAN"
					geometry={nodes.PERTANIAN.geometry}
					material={materials.PERTANIAN_BAKED}
					position={[16.1894, -0.0333, -9.032]}
					rotation={[Math.PI / 2, 0, -2.8371]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PETERNAKAN"
					geometry={nodes.PETERNAKAN.geometry}
					material={materials.PETERNAKAN_BAKED}
					position={[39.6421, 0.4103, -13.9094]}
					rotation={[0, -0.3467, 0]}
					scale={0.1825}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="SV"
					geometry={nodes.SV.geometry}
					material={materials.SV_BAKED}
					position={[-34.2466, 0.2882, 21.1458]}
					rotation={[Math.PI / 2, 0, 1.9506]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="TEKNIK"
					geometry={nodes.TEKNIK.geometry}
					material={materials.TEKNIK_BAKED}
					position={[-33.6433, 0.9523, -28.3279]}
					rotation={[0, 0.92, 0]}
					scale={2.4535}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FTP"
					geometry={nodes.FTP.geometry}
					material={materials.FTP_BAKED}
					position={[8.6285, -0.0069, -9.6294]}
					rotation={[0, 1.2611, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FMIPA"
					geometry={nodes.FMIPA.geometry}
					material={materials.FMIPA_BAKED}
					position={[-10.7688, 1.9723, -16.9274]}
					rotation={[Math.PI, -1.2644, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FBIO"
					geometry={nodes.FBIO.geometry}
					material={materials.FBIO_BAKED}
					position={[-18.6881, -0.0059, -30.2517]}
					rotation={[Math.PI / 2, 0, 0.3045]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="GEOGRAFI"
					geometry={nodes.GEOGRAFI.geometry}
					material={materials.GEOGRAFI_BAKED}
					position={[-9.0862, 0.805, -24.2421]}
					rotation={[Math.PI / 2, 0, -2.8562]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HUKUM"
					geometry={nodes.HUKUM.geometry}
					material={materials.HUKUM_BAKED}
					position={[8.2497, 0.1318, -1.2619]}
					rotation={[Math.PI / 2, 0, 0.2664]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="FISIPOL"
					geometry={nodes.FISIPOL.geometry}
					material={materials.FISIPOL_BAKED}
					position={[-0.5743, -0.0475, -13.0188]}
					rotation={[0, 1.2674, -Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="PSIKOLOGI"
					geometry={nodes.PSIKOLOGI.geometry}
					material={materials.PSIKOLOGI_BAKED}
					position={[8.2727, -0.0037, 12.4719]}
					rotation={[Math.PI / 2, 0, -1.2907]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="GERBANG_UGM"
					geometry={nodes.GERBANG_UGM.geometry}
					material={materials.GERBANG_UGM_BAKED}
					position={[-17.7281, 0.5151, 30.3594]}
					rotation={[Math.PI / 2, 0, 0.2752]}
					scale={1.5783}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="WISDOM_PARK"
					geometry={nodes.WISDOM_PARK.geometry}
					material={materials.WISDOM_PARK_BAKED}
					position={[16.0676, 1.4312, 2.0854]}
					rotation={[Math.PI, -1.2553, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="ZOMIA"
					geometry={nodes.ZOMIA.geometry}
					material={materials.ZOMIA_BAKED}
					position={[13.1149, 0.2876, -19.1826]}
					rotation={[Math.PI, -1.2914, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="SUBDIT_PEMBELAJARAN_DAN_PENGAJARAN"
					geometry={nodes.SUBDIT_PEMBELAJARAN_DAN_PENGAJARAN.geometry}
					material={materials.SUBDIT_PEMBELAJARAN_DAN_PENGAJARAN_BAKED}
					position={[-11.9471, 0.2187, 20.414]}
					rotation={[Math.PI / 2, 0, 1.8524]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="SUBDIT_PENGABDIAN_MASYARAKAT"
					geometry={nodes.SUBDIT_PENGABDIAN_MASYARAKAT.geometry}
					material={materials.SUBDIT_PENGABDIAN_MASYARAKAT_BAKED}
					position={[-13.6074, 0.3466, 25.3993]}
					rotation={[Math.PI, -1.2944, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="DSSDI"
					geometry={nodes.DSSDI.geometry}
					material={materials.DSSDI_BAKED}
					position={[-3.5748, 0.2081, 16.1217]}
					rotation={[Math.PI / 2, 0, -2.8551]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="SEPEDA_KAMPUS"
					geometry={nodes.SEPEDA_KAMPUS.geometry}
					material={materials.SEPEDA_KAMPUS_BAKED}
					position={[11.3808, 0.1596, -22.2422]}
					rotation={[Math.PI, -1.2991, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="TOYAGAMA_CENTER"
					geometry={nodes.TOYAGAMA_CENTER.geometry}
					material={materials.TOYAGAMA_CENTER}
					position={[18.2382, 0.7452, -4.572]}
					rotation={[Math.PI / 2, 0, 1.8791]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="SUBDIT_KEMITRAAN_DAN_ALUMNI"
					geometry={nodes.SUBDIT_KEMITRAAN_DAN_ALUMNI.geometry}
					material={materials.SUBDIT_KEMITRAAN_DAN_ALUMNI_BAKED}
					position={[-7.2736, 0.4451, 24.6646]}
					rotation={[Math.PI, -1.2858, Math.PI]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="AUDIT_FMIPA"
					geometry={nodes.AUDIT_FMIPA.geometry}
					material={materials.AUDIT_FMIPA_BAKED}
					position={[-13.9985, 0.453, -20.5822]}
					rotation={[0, -0.2444, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="BALAIRUNG"
					geometry={nodes.BALAIRUNG.geometry}
					material={materials.BALAIRUNG_BAKED}
					position={[-1.6383, -0.007, -16.2399]}
					rotation={[0, 1.2627, 0]}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="GMC"
					geometry={nodes.GMC.geometry}
					material={materials.GMC_BAKED}
					position={[-25.0143, -0.0125, 15.9003]}
					rotation={[-Math.PI, 0.4758, -Math.PI]}
					scale={0.152}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_01"
					geometry={nodes.HALTE_01.geometry}
					material={materials.HALTE_01_baked}
					position={[-11.2268, 0.2724, 9.6759]}
					rotation={[-Math.PI, 0.3118, -Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_02"
					geometry={nodes.HALTE_02.geometry}
					material={materials.HALTE_01_baked}
					position={[-30.1821, 0.2724, 33.6202]}
					rotation={[Math.PI, -1.1907, Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_06"
					geometry={nodes.HALTE_06.geometry}
					material={materials.HALTE_01_baked}
					position={[-35.43, 0.2724, -6.1009]}
					rotation={[Math.PI, -1.2316, Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_05"
					geometry={nodes.HALTE_05.geometry}
					material={materials.HALTE_01_baked}
					position={[-30.3595, 0.2724, -21.2173]}
					rotation={[Math.PI, -0.4629, Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_04"
					geometry={nodes.HALTE_04.geometry}
					material={materials.HALTE_01_baked}
					position={[0.4678, 0.2724, -10.5367]}
					rotation={[-Math.PI, 0.3129, -Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="HALTE_03"
					geometry={nodes.HALTE_03.geometry}
					material={materials.HALTE_01_baked}
					position={[21.0129, 0.2724, -13.1867]}
					rotation={[Math.PI, -0.3488, Math.PI]}
					scale={0.0032}
					onPointerDown={e => startCount(e)}
					onPointerUp={e => endCount(e)}
					onPointerOver={e => handleHover(e)}
					onPointerOut={e => clearHover(e)}
				/>
				<mesh
					name="BUILDING_CLASS_02_BOTTOM_RIGHT"
					geometry={nodes.BUILDING_CLASS_02_BOTTOM_RIGHT.geometry}
					material={materials.BUILDING_CLASS_02_BOTTOM_RIGHT_BAKED}
					position={[17.5506, -0.0968, 10.9849]}
				/>
				<mesh
					name="BUILDING_CLASS_02_TOP_LEFT"
					geometry={nodes.BUILDING_CLASS_02_TOP_LEFT.geometry}
					material={materials.BUILDING_CLASS_02_TOP_LEFT_BAKED}
					position={[-35.4257, -0.0968, -31.5135]}
					scale={0.8743}
				/>
				<mesh
					name="BUILDING_CLASS_02_TOP_RIGHT"
					geometry={nodes.BUILDING_CLASS_02_TOP_RIGHT.geometry}
					material={materials.BUILDING_CLASS_02_TOP_RIGHT_BAKED}
					position={[9.0922, -0.0968, -41.6114]}
					scale={0.8755}
				/>
				<mesh
					name="BUILDING_CLASS_02_BOTTOM_LEFT"
					geometry={nodes.BUILDING_CLASS_02_BOTTOM_LEFT.geometry}
					material={materials.BUILDING_CLASS_02_BOTTOM_LEFT_BAKED}
					position={[-17.1711, -0.0968, 17.9283]}
					rotation={[0, 0.0856, 0]}
					scale={1.1162}
				/>
				<mesh
					name="VEG_TREES_BOTTOM_LEFT"
					geometry={nodes.VEG_TREES_BOTTOM_LEFT.geometry}
					material={materials.VEG_TREES_BOTTOM_LEFT_BAKED}
					position={[-17.3593, -0.1178, 6.5375]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={0.6941}
				/>
				<mesh
					name="VEG_TREES_TOP_LEFT"
					geometry={nodes.VEG_TREES_TOP_LEFT.geometry}
					material={materials.VEG_TREES_TOP_LEFT_BAKED}
					position={[-36.201, -0.0954, -21.0574]}
					rotation={[0, -1.3748, 0]}
					scale={0.7193}
				/>
				<mesh
					name="VEG_TREES_BOTTOM_RIGHT"
					geometry={nodes.VEG_TREES_BOTTOM_RIGHT.geometry}
					material={materials.VEG_TREES_BOTTOM_RIGHT_BAKED}
					position={[15.301, -0.1778, 6.1805]}
					rotation={[-Math.PI, -0.0141, -Math.PI]}
					scale={0.7193}
				/>
				<mesh
					name="VEG_TREES_TOP_RIGHT"
					geometry={nodes.VEG_TREES_TOP_RIGHT.geometry}
					material={materials.VEG_TREES_TOP_RIGHT_BAKED}
					position={[10.6283, -0.1182, -16.6956]}
					rotation={[-Math.PI, -0.3096, -Math.PI]}
					scale={0.7193}
				/>
				<mesh
					name="GUNUNG_PEGUNUNGAN"
					geometry={nodes.GUNUNG_PEGUNUNGAN.geometry}
					material={materials.GUNUNG_PEGUNUNGAN_BAKED}
					position={[0, -1.3944, 0]}
					rotation={[0, 1.2675, 0]}
					scale={5.8466}
				/>
				<mesh
					name="LAMPU_JALAN"
					geometry={nodes.LAMPU_JALAN.geometry}
					material={materials.LAMPU_JALAN}
					position={[-7.921, 1.0886, 3.0943]}
					rotation={[0, -0.2425, Math.PI]}
					scale={-0.0265}
				/>
				<mesh
					name="KONSTRUKSI"
					geometry={nodes.KONSTRUKSI.geometry}
					material={materials.KONSTRUKSI_BAKED}
					position={[-19.3645, 0.19, 14.7416]}
					rotation={[0, -1.4909, 0]}
					scale={0.2028}
				/>
				<mesh
					name="OTHERS"
					geometry={nodes.OTHERS.geometry}
					material={materials.OTHERS_BAKED}
					position={[-12.486, 0.3504, 13.7925]}
					rotation={[0, -0.2699, 0]}
					scale={0.0302}
				/>
				<mesh
					name="VIDEOTRON"
					geometry={nodes.VIDEOTRON.geometry}
					material={materials.VIDEOTRON_BAKED}
					position={[-12.486, 0.3588, 13.7925]}
					rotation={[0, -0.2699, 0]}
					scale={0.0302}
				/>
				<mesh
					name="BASE001"
					geometry={nodes.BASE001.geometry}
					material={materials.BASE_BAKED_BL}
					position={[0.9097, 0, -2.8808]}
				/>
				<mesh
					name="BASE002"
					geometry={nodes.BASE002.geometry}
					material={materials.BASE_BAKED_TR}
					position={[0.9097, 0, -2.8808]}
				/>
				<mesh
					name="BASE003"
					geometry={nodes.BASE003.geometry}
					material={materials.BASE_BAKED_TL}
					position={[0.9097, 0, -2.8808]}
				/>
				<mesh
					name="BASE004"
					geometry={nodes.BASE004.geometry}
					material={materials.BASE_BAKED_BR}
					position={[0.9097, 0, -2.8808]}
				/>
			</group>
		</>
	);
}

useGLTF.preload(
	`${process.env.NEXT_PUBLIC_BASE_URL}/assets/kembaraloka/Kembara_Loka.glb`
);