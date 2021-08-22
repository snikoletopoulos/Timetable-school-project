import React from "react";

export default function Popup({ open, classroom, exit }: PopupProps) {
	let style: React.CSSProperties;

	if (open) {
		style = { visibility: "visible" };
	} else {
		style = { visibility: "hidden" };
	}

	let courses = ["Θεωρητική", "Θετική", "Τεχνολογική"];

	return (
		<div id="pop-up" style={style}>
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

interface PopupProps {
	open: boolean;
	classroom: string;
	exit: React.MouseEventHandler<HTMLSpanElement>;
}
