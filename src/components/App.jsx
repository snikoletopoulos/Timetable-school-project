import React, { useState } from "react";
import Card from "./Card";
import Popup from "./Popup";

export default function App() {
	const [popup, openPopup] = useState(false);

	function open() {
		if (popup) {
			openPopup(false);
		} else {
			openPopup(true);
		}
	}

	return (
		<>
			<form>
				<Card func={open} classroom="Α" ammountOfClassrooms="4" />
				<Card func={open} classroom="Β" ammountOfClassrooms="4" />
				<Card func={open} classroom="Γ" ammountOfClassrooms="4" />
				<Popup open={popup} />
			</form>
		</>
	);
}
