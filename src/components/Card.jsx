//eslint-disable
import React from "react";

export default function Card({ classroom, ammountOfClassrooms, func }) {
	let nums = [];
	for (let i = 0; i < ammountOfClassrooms; i++) nums.push(i + 1);

	return (
		<section>
			<h1>{classroom + "' Λυκείου"}</h1>
			<div className="section-conteiner">
				{nums.map((num) => (
					<input
						key={num}
						id="test"
						type="button"
						className="btn"
						value={classroom + num}
						name="class"
						onClick={func}
					/>
				))}
			</div>
		</section>
	);
}
