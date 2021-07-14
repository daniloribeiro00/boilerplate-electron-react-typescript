import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	border-top: 1px solid #fff;

	span {
		font-size: 1.2rem;
		color: #fff;

		a {
			text-decoration: underline;
		}
	}

	@media (max-width: 1200px) {
		margin: 1rem;
	}
`;
