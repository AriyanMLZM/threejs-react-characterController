import { KeyboardControls } from '@react-three/drei'
import Ecctrl from 'ecctrl'

const Controller = () => {
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'run', keys: ['Shift'] },
	]

	return (
		<KeyboardControls map={keyboardMap}>
			<Ecctrl
				camCollision={false}
				camInitDis={-0.01}
				camMinDis={-0.01}
				camMaxDis={-0.01}
				camFollowMult={1000}
				camLerpMult={1000}
				turnVelMultiplier={1}
				turnSpeed={100}
				mode="CameraBasedMovement"
			/>
		</KeyboardControls>
	)
}

export default Controller
