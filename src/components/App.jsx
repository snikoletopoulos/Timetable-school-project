import React, { useState } from "react";
import Card from "./Card";
import Popup from "./Popup";

export default function App() {
	const [popup, openPopup] = useState(false);
	const [classSelected, setClassSelected] = useState();

	function togglePopup(e) {
		setClassSelected(e.target.value);
		if (popup) {
			openPopup(false);
		} else {
			openPopup(true);
		}
	}

	function selectClass(e) {}
	//eslint-disable-next-line
	function prevents(event) {
		event.preventDefault();
	}

	return (
		<>
			<form>
				<Card classroom="Α" ammountOfClassrooms="4" type="submit" />
				<Card
					onClick={selectClass}
					func={togglePopup}
					classroom="Β"
					ammountOfClassrooms="4"
					type="button"
				/>
				<Card
					onClick={selectClass}
					func={togglePopup}
					classroom="Γ"
					ammountOfClassrooms="4"
					type="button"
				/>
				<Popup open={popup} exit={togglePopup} classroom={classSelected} />
			</form>
		</>
	);
}
