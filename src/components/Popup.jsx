import React from "react";

export default function Popup({ open, classroom, exit }) {
	let styles;

	if (open) {
		styles = { visibility: "visible" };
	} else {
		styles = { visibility: "hidden" };
	}

	let courses = ["Θεωρητική", "Θετική", "Τεχνολογική"];

	return (
		<div id="pop-up" style={styles}>
			{classroom && <input type="hidden" value={classroom} name="class" />}
			{courses.map((course) => (
				<input
					key={course}
					type="submit"
					value={course}
					className="btn course"
					name="course"
				/>
			))}
			<span id="popup-exit" onClick={exit}></span>
		</div>
	);
}
