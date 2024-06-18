import { useState } from "react";

// import 'main.css'

const Square = (props: any) => {
	const [valor, setValor] = useState(props.value);
	const escutarClique = () => {
		console.log("clicou no botão");
		setValor("X");
	};

	const escutar = props.onClique ?? escutarClique;
	const titulo = props.value ?? "NOK";

	return (
		<button onClick={escutar} className="square">
			{titulo}
		</button>
	);
};

const Board = () => {
	const [botao_1_1, setModificarValorBotao_1_1] = useState("1");
	const [botao_1_2, setModificarValorBotao_1_2] = useState("2");
	const [botao_1_3, setModificarValorBotao_1_3] = useState("3");
	const [botao_2_1, setModificarValorBotao_2_1] = useState("4");
	const [botao_2_2, setModificarValorBotao_2_2] = useState("5");
	const [botao_2_3, setModificarValorBotao_2_3] = useState("6");
	const [botao_3_1, setModificarValorBotao_3_1] = useState("7");
	const [botao_3_2, setModificarValorBotao_3_2] = useState("8");
	const [botao_3_3, setModificarValorBotao_3_3] = useState("9");

	const escutarCliqueBotao_1_1 = () => {
		setModificarValorBotao_1_1("X");
	};

	const escutarCliqueBotao_1_2 = () => {
		setModificarValorBotao_1_2("X");
	};

	const escutarCliqueBotao_1_3 = () => {
		setModificarValorBotao_1_3("X");
	};

	return (
		<>
			<div className="board-row">
				<Square value={botao_1_1} onClique={escutarCliqueBotao_1_1} />
				<Square value={botao_1_2} onClique={escutarCliqueBotao_1_2} />
				<Square value={botao_1_3} onClique={escutarCliqueBotao_1_3} />
			</div>
			<div className="board-row">
				<Square
					value={botao_2_1}
					onClique={() => {
						setModificarValorBotao_2_1("X");
					}}
				/>
				<Square
					value={botao_2_2}
					onClique={() => {
						setModificarValorBotao_2_2("X");
					}}
				/>
				<Square
					value={botao_2_3}
					onClique={() => {
						setModificarValorBotao_2_3("X");
					}}
				/>
			</div>
			<div className="board-row">
				<Square
					value={botao_3_1}
					onClique={() => {
						setModificarValorBotao_3_1("X");
					}}
				/>
				<Square
					value={botao_3_2}
					onClique={() => {
						setModificarValorBotao_3_2("X");
					}}
				/>
				<Square
					value={botao_3_3}
					onClique={() => {
						setModificarValorBotao_3_3("X");
					}}
				/>
			</div>
		</>
	);
};
function App() {
	return <Board />;
}

export default App;
