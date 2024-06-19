import { useState } from "react";

const Square = (props: any) => {
	const escutar = props.onClique ?? null;
	const titulo = props.value ?? "NOK";

	return (
		<button onClick={escutar} className="square">
			{titulo}
		</button>
	);
};

const Board = () => {
	const [nextGamer, setNextGamer] = useState("X");
	const [botao_1_1, setModificarValorBotao_1_1] = useState("");
	const [botao_1_2, setModificarValorBotao_1_2] = useState("");
	const [botao_1_3, setModificarValorBotao_1_3] = useState("");
	const [botao_2_1, setModificarValorBotao_2_1] = useState("");
	const [botao_2_2, setModificarValorBotao_2_2] = useState("");
	const [botao_2_3, setModificarValorBotao_2_3] = useState("");
	const [botao_3_1, setModificarValorBotao_3_1] = useState("");
	const [botao_3_2, setModificarValorBotao_3_2] = useState("");
	const [botao_3_3, setModificarValorBotao_3_3] = useState("");

	const escutarClique = (indice: number) => {
		const vencedor = calcularVencedor();
		console.info(vencedor);
		if (vencedor !== "") return;

		if (indice === 0) {
			if (botao_1_1 !== "") return;
			setModificarValorBotao_1_1(nextGamer);
		}
		else if (indice === 1) {
			if (botao_1_2 !== "") return;
			setModificarValorBotao_1_2(nextGamer);
		}
		else if (indice === 2) {
			if (botao_1_3 !== "") return;
			setModificarValorBotao_1_3(nextGamer);
		}
		else if (indice === 3) {
			if (botao_2_1 !== "") return;
			setModificarValorBotao_2_1(nextGamer);
		}
		else if (indice === 4) {
			if (botao_2_2 !== "") return;
			setModificarValorBotao_2_2(nextGamer);
		}
		else if (indice === 5) {
			if (botao_2_3 !== "") return;
			setModificarValorBotao_2_3(nextGamer);
		}
		else if (indice === 6) {
			if (botao_3_1 !== "") return;
			setModificarValorBotao_3_1(nextGamer);
		}
		else if (indice === 7) {
			if (botao_3_2 !== "") return;
			setModificarValorBotao_3_2(nextGamer);
		}
		else if (indice === 8) {
			if (botao_3_3 !== "") return;
			setModificarValorBotao_3_3(nextGamer);
		}
		
		const gamer = nextGamer === "X" ? "O" : "X";
		setNextGamer(gamer);
	};

	const calcularVencedor = () => {
		/*
		[0, 1, 2]
		[3, 4, 5],
    	[6, 7, 8],
    	[0, 3, 6],
    	[1, 4, 7],
    	[2, 5, 8],
    	[0, 4, 8],
    	[2, 4, 6]
		*/
		// linhas
		if (botao_1_1 && botao_1_1 === botao_1_2 && botao_1_1 === botao_1_3) {
			return botao_1_1;
		} 
		else if (botao_2_1 && botao_2_1 === botao_2_2 && botao_2_1 === botao_2_3) {
			return botao_2_1;
		}
		else if (botao_3_1 && botao_3_1 === botao_3_2 && botao_3_1 === botao_3_3) {
			return botao_3_1;
		}
		// colunas
		else if (botao_1_1 && botao_1_1 === botao_2_1 && botao_1_1 === botao_3_1) {
			return botao_1_1;
		}
		else if (botao_1_2 && botao_1_2 === botao_2_2 && botao_1_2 === botao_3_2) {
			return botao_1_2;
		}
		else if (botao_1_3 && botao_1_3 === botao_2_3 && botao_1_3 === botao_3_3) {
			return botao_1_3;
		}
		// diagonais
		else if (botao_1_1 && botao_1_1 === botao_2_2 && botao_1_1 === botao_3_3) {
			return botao_1_1;
		}
		else if (botao_1_3 && botao_1_3 === botao_2_2 && botao_1_3 === botao_3_1) {
			return botao_1_3;
		}

		return "";
	}

	const vencedor = calcularVencedor();
	let estado;
	if (vencedor !== "") {
		estado = `Vencedor ${vencedor}`;
	} else {
		estado = `Próximo jogador: ${nextGamer}`;
	}

	return (
		<>
			<div className="status">{estado}</div>
			<div className="board-row">
				<Square value={botao_1_1} onClique={() => (vencedor === "") && escutarClique(0)} />
				<Square value={botao_1_2} onClique={() => escutarClique(1)} />
				<Square value={botao_1_3} onClique={() => escutarClique(2)} />
			</div>
			<div className="board-row">
				<Square value={botao_2_1} onClique={() => escutarClique(3)} />
				<Square value={botao_2_2} onClique={() => escutarClique(4)} />
				<Square value={botao_2_3} onClique={() => escutarClique(5)} />
			</div>
			<div className="board-row">
				<Square value={botao_3_1} onClique={() => escutarClique(6)} />
				<Square value={botao_3_2} onClique={() => escutarClique(7)} />
				<Square value={botao_3_3} onClique={() => escutarClique(8)} />
			</div>
		</>
	);
};
function App() {
	return <Board />;
}

export default App;
