import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
	h2 {
		color: var(--text-title);
		font-size: 1.5em;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;

		border: 1px solid var(--input-border);
		background: var(--input-background);

		font-weight: 400;
		font-size: 1rem;

		& + input {
			margin-top: 1rem;
		}

		&::placeholder {
			color: var(--text-body);
		}
	}

	button[type='submit'] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--green);
		color: var(--shape);
		border-radius: 0.25rem;
		border: 0;
		font-size: 1rem;
		margin-top: 1.5rem;
		transition: filter 0.2s ease;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionsTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

const colors = {
	green: '#33cc95',
	red: '#e52e4d'
};

export const RadioBox =
	styled.button <
	RadioBoxProps >
	`
	height: 4rem;
	border: 1px solid var(--input-border);
	border-radius: 0.25rem;

	background: ${(props) => (props.isActive === true ? transparentize(0.9, colors[props.activeColor]) : 'transparent')};

	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-color 0.2s ease;

	&:hover {
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: flex;
		margin-left: 1rem;
		font-size: 1rem;
		color: var(--text-title);
	}


`;
