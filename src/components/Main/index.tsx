import { Container } from './styles';

import logo from '../../../assets/favicon.png';

export const Main = () => {
	return (
		<Container>
			<h2>Electron + React JS + TypeScript App</h2>
			<img src={logo} alt='Electron + React JS + TypeScript App' />
			<span>Edit App.tsx and save to reload.</span>
		</Container>
	);
};
