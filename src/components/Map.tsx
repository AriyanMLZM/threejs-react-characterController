import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { artG as map } from '../assets/models'

const Map = () => {
	const { nodes, materials } = useGLTF(map) as any

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			{/* <group dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube001.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube001_2.geometry}
					material={materials.Material}
				/>
			</group> */}
			{/* <group dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.island.geometry}
					material={materials.PaletteMaterial001}
				/>
			</group> */}
			<group dispose={null}>
				<group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_1.geometry}
						material={materials.Walls}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_2.geometry}
						material={materials.Ceilling}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_3.geometry}
						material={materials.Floor}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_4.geometry}
						material={materials.Emissive}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_5.geometry}
						material={materials.CeillingWire}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_6.geometry}
						material={materials.Painting}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_7.geometry}
						material={materials.Lamp}
					/>
					{/* <mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_8.geometry}
						material={materials.BenchWood}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Walls_Walls_0_9.geometry}
						material={materials.BenchConcreteBase}
					/> */}
				</group>
			</group>
		</RigidBody>
	)
}

export default Map
