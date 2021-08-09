//eslint-disable
import React from "react";

export default function Card({
	classroom,
	ammountOfClassrooms,
	func,
	type,
}: CardProps) {
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
						type={type}
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

type CardProps = {
	classroom: string;
	ammountOfClassrooms: number;
	func?: React.MouseEventHandler<HTMLInputElement>;
	type: string;
};
