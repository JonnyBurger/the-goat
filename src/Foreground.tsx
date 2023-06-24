import {
	staticFile,
	Img,
	AbsoluteFill,
	spring,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Foreground: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const start1 = 90;
	const start2 = 210;
	const duration = 30;

	const scale1 = interpolate(frame, [-duration, 0], [1, 1.01], {
		extrapolateLeft: 'clamp',
	});
	const scale2 = interpolate(frame, [start1, start1 + duration], [1.06, 1.05], {
		extrapolateLeft: 'clamp',
	});
	const scale3 = interpolate(frame, [start2, start2 + duration], [1, 1.01], {
		extrapolateLeft: 'clamp',
	});

	const transition1 = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: duration,
		delay: start1,
	});

	const transition2 = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: duration,
		delay: start2,
	});

	return (
		<AbsoluteFill>
			{' '}
			<AbsoluteFill
				style={{
					transformOrigin: '50% 100%',
					transform: `scale(${scale1}) rotateY(${
						transition1 * Math.PI + 'rad'
					})`,
					backfaceVisibility: 'hidden',
				}}
			>
				<Img
					style={{
						filter: 'drop-shadow(0 0 40px #000)',
					}}
					src={staticFile('goat2.png')}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transformOrigin: '50% 100%',
					transform: `scale(${scale2}) rotateY(${
						-Math.PI + transition1 * Math.PI + transition2 * Math.PI + 'rad'
					})`,
					backfaceVisibility: 'hidden',
				}}
			>
				<Img
					style={{
						filter: 'drop-shadow(0 0 40px #000)',
					}}
					src={staticFile('goat.png')}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transformOrigin: '50% 100%',
					transform: `scale(${scale3}) rotateY(${
						-Math.PI + transition2 * Math.PI + 'rad'
					})`,
					backfaceVisibility: 'hidden',
				}}
			>
				<Img
					style={{
						filter: 'drop-shadow(0 0 40px #000)',
					}}
					src={staticFile('goat2.png')}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
