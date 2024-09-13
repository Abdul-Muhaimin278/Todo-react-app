/* eslint-disable no-case-declarations */
const initialState = {
	todoData: [],
	toggleBtn: null,
};

const setTask = (state = initialState, action) => {
	switch (action.type) {
		case "ASCENDING":
			return {
				...state,
				todoData: action.payload,
			};

		case "DESCENDING":
			return {
				...state,
				todoData: action.payload,
			};

		case "ADD_TODO":
			return { ...state, todoData: [...state.todoData, action.payload] };

		case "CHECKED_TODO":
			return {
				...state,
				todoData: state.todoData.map((curElem, index) =>
					index === action.payload
						? { ...curElem, checked: !curElem.checked }
						: curElem
				),
			};

		case "DEL_TODO":
			return {
				...state,
				todoData: state.todoData.filter(
					(curElem, index) => index !== action.payload
				),
			};

		case "TOGGLE":
			return {
				...state,
				toggleBtn: action.payload,
			};

		case "CLEAR":
			return {
				...state,
				todoData: [],
			};

		case "EDIT":
			const { value, taskID } = action.payload;

			return {
				...state,
				todoData: state.todoData.map((curTodo) =>
					curTodo?.id === taskID ? { ...curTodo, content: value } : curTodo
				),
				toggleBtn: null,
			};

		default:
			return state;
	}
};

export default setTask;
