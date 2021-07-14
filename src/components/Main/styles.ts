import styled from 'styled-components';

export const Container = styled.main`
	margin: 3rem auto;
	background: #eee;
	border-radius: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		font-size: 1.7rem;
		font-weight: 400;
	}

	img {
		height: 40vmin;
		pointer-events: none;
		padding: 2rem;
	}

	span {
		font-size: 1.4rem;
		font-weight: 400;
	}

	@media (max-width: 1200px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;
