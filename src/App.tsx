import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import GetJoke from "./services/GetJoke";
import joke from "./models/joke";

function App() {
	const [joke, setJoke] = useState<joke>();
	const [count, setCount] = useState(0);

	useEffect(() => {
		GetJoke().then((data) => {
			setJoke(data);
		});
	}, [count]);

	return (
		<div className="App">
			<p>{joke?.setup}</p>
			<p>{joke?.punchline}</p>
			<button
				onClick={() => {
					console.log(
						"grand circus key: ",
						process.env.REACT_APP_GRAND_CIRCUS_KEY
					);
					setCount((prv) => prv + 1);
				}}
			>
				{count}
			</button>
		</div>
	);
}

export default App;
