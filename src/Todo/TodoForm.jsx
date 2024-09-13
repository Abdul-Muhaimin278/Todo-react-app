import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
	const [todo, setTodo] = useState({});

	const uniqueId = () => {
		const now = new Date();
		const date = now.toLocaleString();
		const id = now.getTime();
		return { date, id };
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let taskID = uniqueId();
		const { date, id } = taskID;
		const payload = {
			id,
			date,
			content: todo,
			checked: false,
		};

		onAddTodo(payload);
		setTodo({ id: "", content: "", checked: false });
	};

	return (
		<section className="form">
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						className="todo-input"
						value={todo.content}
						onChange={(e) => setTodo(e.target.value)}
						required
					/>
				</div>
				<div>
					<button type="submit" className="todo-btn">
						Add Task
					</button>
				</div>
			</form>
		</section>
	);
};
