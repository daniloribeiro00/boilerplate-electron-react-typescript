import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	border-bottom: 1px solid #fff;

	h1 {
		font-size: 2.3rem;
		color: #fff;
	}

	@media (max-width: 1200px) {
		margin: 1rem;

		h1 {
			font-size: 2rem;
		}
	}
`;
