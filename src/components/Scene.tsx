import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { EcctrlJoystick } from 'ecctrl'
import { useControls } from 'leva'

import { Lights, Map, Controller } from './'

const Scene = () => {
	const { enJoy } = useControls({
		enJoy: false,
	})

	return (
		<>
			{enJoy && <EcctrlJoystick buttonNumber={0} />}
			<Canvas>
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
