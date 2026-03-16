export default function GuessleGame() {
	return (
		<div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
			<iframe
				src='/guessle/index.html'
				style={{
					width: '100%',
					height: '100vh',
					border: 'none',
				}}
			/>
		</div>
	);
}
