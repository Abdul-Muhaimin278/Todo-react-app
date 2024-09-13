import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
	AddTodo,
	clearTodo,
	// handleSortAscend,
	// handleSortDescend,
} from "../store/actions.js";
import "./Todo.css";
import { useState } from "react";

export default function Todo() {
	const [dataSwitch, setDataSwitch] = useState(true);
	const [searchInput, setSearchInput] = useState("");

	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todo.todoData);
	const [filterTodo, setFilterTodo] = useState(todo);
	const remainingTasks = useSelector((state) => state.todo.todoData.length);

	const addTodo = (inputValue) => {
		const { content } = inputValue;

		if (!content) return;

		dispatch(AddTodo(inputValue));
	};

	const handleSearchInput = (e) => {
		let searchTerm = e.target.value;
		setSearchInput(searchTerm);

		const filteredItems = todo.filter((task) =>
			task.content.toLowerCase().startsWith(searchTerm.toLowerCase())
		);
		// console.log(filteredItems);

		setFilterTodo(filteredItems);
	};

	const sortedData = searchInput
		? filterTodo.sort((a, b) => (dataSwitch ? a.id - b.id : b.id - a.id))
		: todo.sort((a, b) => (dataSwitch ? a.id - b.id : b.id - a.id));

	return (
		<section className="d-flex flex-column align-items-center justify-content-start todo-container ">
			<header>
				<h1>Todo List</h1>
			</header>
			<TodoForm onAddTodo={addTodo} />
			<div className="d-flex">
				<input
					type="text"
					name="search"
					id="search"
					className="mx-1"
					value={searchInput}
					onChange={handleSearchInput}
				/>
				{/* <button
					className="btn btn-light mx-1"
					onClick={() => setSearchInput("")}
				>
					Clear
				</button> */}
			</div>
			<section className="my-3">
				<button
					className="btn btn-info mx-1"
					onClick={() => setDataSwitch(true)}
				>
					Latest
				</button>
				<button
					className="btn btn-info mx-1"
					onClick={() => setDataSwitch(false)}
				>
					Oldest
				</button>

				<button
					className="btn btn-danger mx-1"
					onClick={() => dispatch(clearTodo())}
				>
					Clear todos
				</button>
			</section>
			<h6>{remainingTasks} todos are left</h6>
			{sortedData.map((curTask, index) => {
				return (
					<TodoList
						key={curTask.id}
						index={index}
						taskId={curTask.id}
						date={curTask.date}
						data={curTask.content}
						checked={curTask.checked}
					/>
				);
			})}
		</section>
	);
}
