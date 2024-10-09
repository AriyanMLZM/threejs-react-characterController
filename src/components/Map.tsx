import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { map } from '../assets/models'

const Map = () => {
	const { nodes, materials } = useGLTF(map) as any

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			<group dispose={null}>
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
			</group>
		</RigidBody>
	)
}

export default Map
