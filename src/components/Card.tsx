//eslint-disable
import React from "react";
import { Link } from "react-router-dom";

export default function Card({
	classroom,
	ammountOfClassrooms,
	submit,
	openPopup,
}: CardProps) {
	let nums = [];
	for (let i = 1; i <= ammountOfClassrooms; i++) nums.push(i);

	return (
		<section>
			<h1>{classroom + "' Λυκείου"}</h1>
			<div className="section-conteiner">
				{nums.map((num) =>
					submit ? (
						<Link key={classroom + num} className="btn" to={`/time-table`}>
							sdfa
						</Link>
					) : (
						<button key={classroom + num} onClick={openPopup} className="btn">
							{classroom + num}
						</button>
					)
				)}
			</div>
		</section>
	);
}

type CardProps = {
	classroom: string;
	ammountOfClassrooms: number;
	submit: boolean;
	openPopup?: React.MouseEventHandler;
};
