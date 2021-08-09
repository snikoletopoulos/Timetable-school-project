import React from "react";

export default function Popup({ open, classroom, exit }: PopupProps) {
	let styles;

	if (open) {
		styles = { visibility: "visible" };
	} else {
		styles = { visibility: "hidden" };
	}

	let courses = ["Θεωρητική", "Θετική", "Τεχνολογική"];

	return (
		<dialog id="pop-up" open={open}>
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
		</dialog>
	);
}

type PopupProps = {
	open: boolean;
	classroom: string;
	exit: React.MouseEventHandler<HTMLSpanElement>;
};
