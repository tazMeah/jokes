import axios from "axios";
import joke from "../models/joke";

export default function GetJoke(): Promise<joke> {
	return axios
		.get("https://official-joke-api.appspot.com/random_joke")
		.then((res) => res.data);
}
