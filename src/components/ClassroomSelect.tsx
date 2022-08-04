import React, { useState } from "react";
import Card from "./Card";
import Popup from "./Popup";

export default function App() {
	const [popup, openPopup] = useState<boolean>(false);
	const [classSelected, setClassSelected] = useState<string>("");

	function togglePopup(e: any): void {
		setClassSelected(e.target.value);
		openPopup(true);
	}

	return (
		<main>
			<Card classroom="Α" ammountOfClassrooms={4} submit />
			<Card
				openPopup={togglePopup}
				classroom="Β"
				ammountOfClassrooms={4}
				submit={false}
			/>
			<Card
				openPopup={togglePopup}
				classroom="Γ"
				ammountOfClassrooms={4}
				submit={false}
			/>
			<Popup open={popup} exit={togglePopup} classroom={classSelected} />
		</main>
	);
}
