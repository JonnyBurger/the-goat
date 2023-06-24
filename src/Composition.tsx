import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Kanit';
import {Foreground} from './Foreground';
import {Background} from './Background';

loadFont('italic', {
	weights: ['900'],
});

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#292929',
			}}
		>
			<Background />
			<Foreground />
		</AbsoluteFill>
	);
};
