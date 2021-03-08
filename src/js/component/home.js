import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [todoList, setTodoList] = useState([]);
	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaohxavier")
			.then(response => response.json())
			.then(res => setTodoList(res));
	};
	useEffect(() => {
		getTodos();
	}, []);
	console.log(todoList);
	return (
		<div className="text-center mt-5">
			<h1>To-Do List</h1>
			{todoList.map((item, index) => (
				<p key={index}>{item.label}</p>
			))}
		</div>
	);
}
