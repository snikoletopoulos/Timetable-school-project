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

	return (
		<>
			<form>
				<Card classroom="Α" ammountOfClassrooms="4" type="submit" />
				<Card
					func={togglePopup}
					classroom="Β"
					ammountOfClassrooms="4"
					type="button"
				/>
				<Card
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
