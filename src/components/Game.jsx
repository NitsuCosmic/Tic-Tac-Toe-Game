import usePlay from "../hooks/usePlay";
import Board from "./Board";

export default function Game() {
	const {
		squares,
		isCrossNext,
		score,
		setScore,
		winner,
		resetGame,
		handleClick,
	} = usePlay();

	return (
		<div className="text-center">
			<h1 className="text-white text-3xl font-bold mb-6">Tic Tac Toe</h1>
			<div className="flex gap-6 mb-6 justify-center">
				<div className="text-center">
					<div
						className={`flex justify-center items-center w-20 aspect-square rounded-md text-4xl font-bold bg-indigo-950 ${
							isCrossNext ? "border-2 border-white" : ""
						}`}
					>
						<i className="fa-solid fa-xmark text-red-600"></i>
					</div>
					<h3 className="text-white text-xl">One</h3>
				</div>
				<div className="text-center">
					<div
						className={`flex justify-center items-center w-20 aspect-square rounded-md text-4xl font-bold bg-indigo-950 ${
							isCrossNext ? "" : "border-2 border-white"
						}`}
					>
						<i className="fa-regular fa-circle text-yellow-400"></i>
					</div>
					<h3 className="text-white text-xl">Two</h3>
				</div>
			</div>
			<div className="mb-2 text-xl text-white font-medium">
				<h3 className="text-white">Score</h3>
				<div className="flex justify-around ">
					<h3>X: {score.x}</h3>
					<h3>O: {score.o}</h3>
				</div>
			</div>
			<Board
				squares={squares}
				isCrossNext={isCrossNext}
				handleClick={handleClick}
			/>
			<h3 className="text-white text-2xl my-6">
				{winner
					? winner === "draw"
						? "It's a draw!"
						: `${winner} Wins!`
					: `Next player: ${isCrossNext ? "X" : "O"}`}
			</h3>
			<div className="flex justify-center gap-2">
				<button
					onClick={() => resetGame()}
					className="text-lg font-medium text-white px-2 py-1 rounded bg-violet-800 transition-colors hover:bg-violet-900"
				>
					Restart Game
				</button>
				<button
					onClick={() => setScore({ x: 0, o: 0 })}
					className="text-lg font-medium text-white px-2 py-1 rounded bg-violet-800 transition-colors hover:bg-violet-900"
				>
					Restart Score
				</button>
			</div>
		</div>
	);
}
