import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { EcctrlJoystick } from 'ecctrl'

import { Lights, Map, Controller } from './'
import { Environment } from '@react-three/drei'

const Scene = () => {
	return (
		<>
			{/* <EcctrlJoystick
			// joystickBaseProps={{
			// 	receiveShadow: true,
			// 	material: new MeshBasicMaterial({ color: '#777' }),
			// }}
			/> */}
			<Canvas>
				{/* <Lights /> */}
				{/* <Environment preset="sunset" /> */}
				<Lights />
				<Physics timeStep="vary">
					<Suspense>
						<Controller />
						<Map />
					</Suspense>
				</Physics>
			</Canvas>
		</>
	)
}

export default Scene
