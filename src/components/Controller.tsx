import { KeyboardControls } from '@react-three/drei'
import Ecctrl from 'ecctrl'

const Controller = () => {
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]

	return (
		<KeyboardControls map={keyboardMap}>
			<Ecctrl
				camCollision={false} // disable camera collision detect (useless in FP mode)
				camInitDis={-0.01} // camera intial position
				camMinDis={-0.01} // camera zoom in closest position
				camMaxDis={-0.01} // camera zoom in closest position
				camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
				camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
				turnVelMultiplier={1} // Turning speed same as moving speed
				turnSpeed={100} // give it big turning speed to prevent turning wait time
				mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
				maxVelLimit={8}
				capsuleHalfHeight={1.5}
			/>
		</KeyboardControls>
	)
}

export default Controller
