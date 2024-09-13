// export const handleSortAscend = (array) => (dispatch) => {
// 	const sortedArr = [...array].sort((a, b) => a.id - b.id);

// 	dispatch({
// 		type: "ASCENDING",
// 		payload: sortedArr,
// 	});
// };
const sortArrayAscend = (array) => {
	return [...array].sort((a, b) => a.id - b.id);
};

export const handleSortAscend = (array) => (dispatch) => {
	const sortedArray = sortArrayAscend(array);

	dispatch({
		type: "ASCENDING",
		payload: sortedArray,
	});
};

export const handleSortDescend = (array) => (dispatch) => {
	const sortedArr = [...array].sort((a, b) => b.id - a.id);

	dispatch({
		type: "DESCENDING",
		payload: sortedArr,
	});
};

export const AddTodo = (item) => (dispatch) => {
	dispatch({
		type: "ADD_TODO",
		payload: item,
	});
};

export const DeleteTodo = (index) => {
	return (dispatch) => {
		dispatch({
			type: "DEL_TODO",
			payload: index,
		});
	};
};

export const checkedTodo = (index) => {
	return (dispatch) => {
		dispatch({
			type: "CHECKED_TODO",
			payload: index,
		});
	};
};

export const clearTodo = (item) => {
	return (dispatch) => {
		dispatch({
			type: "CLEAR",
			payload: item,
		});
	};
};

export const toggleButton = (value) => (dispatch) => {
	dispatch({
		type: "TOGGLE",
		payload: value,
	});
};

export const saveBtn = (value, taskID) => (dispatch) => {
	dispatch({
		type: "EDIT",
		payload: { value, taskID },
	});
};
