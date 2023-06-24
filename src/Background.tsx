import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {loadFont, fontFamily} from '@remotion/google-fonts/Kanit';

loadFont('italic', {
	weights: ['900'],
});

export const Background: React.FC = () => {
	const {fps, height} = useVideoConfig();
	const frame = useCurrentFrame() % 50;

	const push1 = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 25,
	});

	const push2 = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		delay: 25,
	});

	const panelHeight = height / 3;

	return (
		<AbsoluteFill>
			{new Array(5).fill(true).map((text, i) => {
				return (
					<AbsoluteFill
						style={{
							height: panelHeight,
							top: panelHeight * i - panelHeight * push1 - panelHeight * push2,
							justifyContent: 'center',
						}}
					>
						<Text stroke={i % 2 === 0} />
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};

const Text: React.FC<{
	stroke: boolean;
}> = ({stroke}) => {
	return (
		<div
			style={{
				fontFamily,
				color: stroke ? 'transparent' : '#ccc',
				fontSize: 400,
				lineHeight: 0.7,
				WebkitTextStroke: stroke ? '2px #ccc' : 'none',
			}}
		>
			GOAT
		</div>
	);
};
