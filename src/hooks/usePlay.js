import { useEffect, useState } from "react";

export default function usePlay() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isCrossNext, setIsCrossNext] = useState(true);
	const [winner, setWinner] = useState(null);
	const [score, setScore] = useState({ x: 0, o: 0 });

	useEffect(() => {
		const calculatedWinner = calculateWinner(squares);
		if (calculatedWinner && !winner) {
			setWinner(calculatedWinner);
			if (calculatedWinner === "X") {
				setScore((prevScore) => ({
					...prevScore,
					x: prevScore.x + 1, // Increment X's score correctly
				}));
			} else {
				setScore((prevScore) => ({
					...prevScore,
					o: prevScore.o + 1, // Increment O's score correctly
				}));
			}
		} else if (
			!calculatedWinner &&
			squares.every((square) => square !== null) &&
			!winner
		) {
			setWinner("draw");
		}
	}, [squares, winner]); // Dependency array to avoid infinite re-renders

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	function resetGame() {
		setSquares(Array(9).fill(null));
		setIsCrossNext(true);
		setWinner(null);
	}

	function handleClick(index) {
		if (squares[index] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		nextSquares[index] = isCrossNext ? "X" : "O";
		setSquares(nextSquares);
		setIsCrossNext(!isCrossNext);
	}

	return {
		squares,
		isCrossNext,
		score,
		setScore,
		winner,
		resetGame,
		handleClick,
	};
}
