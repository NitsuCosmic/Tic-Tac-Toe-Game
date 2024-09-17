import Button from "./Button";

export default function Board({ squares, handleClick, isCrossNext }) {
	return (
		<div className="grid grid-cols-3 mx-auto p-2 gap-2 rounded-lg bg-violet-800">
			{squares.map((square, index) => {
				return (
					<Button
						key={index}
						square={square}
						index={index}
						onButtonClick={handleClick}
					/>
				);
			})}
		</div>
	);
}
