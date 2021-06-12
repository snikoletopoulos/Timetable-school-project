import React from "react";

export default function Popup({ open }) {
	let styles;

	if (open) {
		styles = { visibility: "visible" };
	} else {
		styles = { visibility: "hidden" };
	}

	return (
		<div id="pop-up" style={styles}>
			<input
				type="submit"
				value="Θεωρητική"
				className="btn course"
				name="course"
			/>
			<input
				type="submit"
				value="Θετική"
				className="btn course"
				name="course"
			/>
			<input
				type="submit"
				value="Τεχνολογική"
				className="btn course"
				name="course"
			/>
		</div>
	);
}
