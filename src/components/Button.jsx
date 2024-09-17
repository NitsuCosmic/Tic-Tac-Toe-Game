import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ square, index, onButtonClick }) {
	return (
		<button
			onClick={() => onButtonClick(index)}
			className="min-w-20 aspect-square rounded-md text-4xl font-bold bg-indigo-950"
		>
			{square === "X" ? (
				<FontAwesomeIcon icon={faXmark} className="text-red-600" />
			) : square === "O" ? (
				<FontAwesomeIcon icon={faCircle} className="text-yellow-400" />
			) : null}
		</button>
	);
}
