import { useDispatch, useSelector } from "react-redux";
import {
	checkedTodo,
	DeleteTodo,
	saveBtn,
	toggleButton,
} from "../store/actions";
import { useState } from "react";

export const TodoList = ({ index, taskId, date, data, checked }) => {
	const [input, setInput] = useState({ content: data, checked });
	const dispatch = useDispatch();
	const toggle = useSelector((state) => state.todo.toggleBtn);

	return (
		<section className="">
			<ul className="container todo-item">
				<li className=" row">
					<div className="d-flex align-content-start col">
						{toggle !== index ? (
							<input
								id={`check-${index}`}
								type="checkbox"
								onClick={() => dispatch(checkedTodo(index))}
							/>
						) : (
							<input
								id={`check-${index}`}
								type="text"
								value={input.content}
								onChange={(e) => setInput(e.target.value)}
							/>
						)}
						{toggle !== index && (
							<label
								htmlFor={`check-${index}`}
								className={checked ? "checkList" : "notCheckList"}
							>
								{data}
							</label>
						)}
					</div>
					{toggle !== index ? (
						<div className="d-flex align-content-center justify-content-between col-4">
							<button
								className="btn btn-sm btn-primary"
								disabled={checked}
								onClick={() => dispatch(toggleButton(index))}
							>
								edit
							</button>
							<button
								className="btn btn-sm btn-danger"
								onClick={() => dispatch(DeleteTodo(index))}
							>
								delete
							</button>
						</div>
					) : (
						<div className="d-flex align-content-center justify-content-between col-4">
							<button
								className="btn btn-sm btn-success"
								onClick={() => dispatch(saveBtn(input, taskId))}
							>
								save
							</button>
							<button
								className="btn btn-sm btn-secondary"
								onClick={() => dispatch(toggleButton(null))}
							>
								cancel
							</button>
						</div>
					)}
				</li>
				<p className="text-end date_time mb-0">{date}</p>
			</ul>
		</section>
	);
};
