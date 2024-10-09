const Lights = () => {
	return (
		<>
			<ambientLight intensity={0.2} />

			<pointLight position={[0, 5, 0]} intensity={100} color="#fff" />

			<directionalLight position={[7, 10, 7]} intensity={1.2} color="#fff" />
			<directionalLight position={[-7, 10, -7]} intensity={1.2} color="#fff" />
		</>
	)
}

export default Lights
