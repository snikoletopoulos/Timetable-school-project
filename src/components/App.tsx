import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ClassroomSelect from "./ClassroomSelect";
import TimeTable from "./TimeTable";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<ClassroomSelect />
				</Route>
				<Route exact path="/time-table">
					<TimeTable />
				</Route>
			</Switch>
		</Router>
	);
}
