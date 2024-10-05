import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
//import Button from "./components/Button/Button.jsx";
import TaskListItem from "./components/TaskListItem/TaskListItem.jsx";

function App() {
	//const [buttonSelected, setButtonSelected] = useState(null);
	const [isCompletedScreen, setIsCompletedScreen] = useState(false);

	const [allTodos, setAllTodos] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");

	/* 	const handleSelectedButton = (e) => {
		const { innerText } = e.target;
		if (innerText === "Todo") setButtonSelected("Todo");
		if (innerText === "Completed") setButtonSelected("Completed");
	}; */

	const handleTodoBtn = () => setIsCompletedScreen(false);
	const handleCompletedBtn = () => setIsCompletedScreen(true);

	const handleNewTitle = (e) => {
		const { value } = e.target;
		setNewTitle(value);
	};

	const handleNewDescription = (e) => {
		const { value } = e.target;
		setNewDescription(value);
	};

	const handleAddTodo = () => {
		let newTodo = {
			title: newTitle,
			description: newDescription
		};

		const updatedAllTodos = [...allTodos];
		updatedAllTodos.push(newTodo);
		setAllTodos(updatedAllTodos);

		//console.log("updatedAllTodos", updatedAllTodos);
		localStorage.setItem("todoList", JSON.stringify(updatedAllTodos));
	};

	const handleDeleteTodo = (e, index) => {
		//console.log(index);
		const reducedTodo = [...allTodos];
		reducedTodo.splice(index, 1);

		localStorage.setItem("todoList", JSON.stringify(reducedTodo));
		setAllTodos(reducedTodo);
	};

	//? to check for task in the local storage
	useEffect(() => {
		let savedTodos = JSON.parse(localStorage.getItem("todoList"));
		//console.log("savedTodos", savedTodos);

		if (savedTodos) {
			setAllTodos(savedTodos);
		}
	}, []);

	return (
		<div className={styles.App}>
			<h1>Todo app list</h1>

			<div className={styles.todoWrapper}>
				{/* Inputs section */}
				<div className={styles.inputsGroup}>
					<div className={styles.inputItem}>
						<Input
							id="title"
							label="Title"
							placeholder="What is the task Title?"
							value={newTitle}
							handleChange={handleNewTitle}
						/>
					</div>
					<div className={styles.inputItem}>
						<Input
							id="description"
							label="Description"
							placeholder="What is the task description?"
							value={newDescription}
							handleChange={handleNewDescription}
						/>
					</div>
					<div className={styles.inputItem}>
						<button type="button" onClick={handleAddTodo}>
							Add
						</button>
					</div>
				</div>
				<hr />
				{/* buttons section */}
				<div className={styles.buttonsGroup}>
					<button
						type="button"
						className={!isCompletedScreen && `${styles.active}`}
						onClick={handleTodoBtn}>
						Todo
					</button>
					<button
						type="button"
						className={isCompletedScreen && `${styles.active}`}
						onClick={handleCompletedBtn}>
						Completed
					</button>
				</div>
				{/* Tasks list */}
				<div className={styles.taskList}>
					{!allTodos.length ? (
						<div>
							<h2 style={{ textAlign: "center" }}>You don’t have task to do.</h2>
						</div>
					) : (
						allTodos.map((todo, index) => (
							<TaskListItem
								key={todo.title}
								title={todo.title}
								description={todo.description}
								handleDeleteTodo={handleDeleteTodo}
								index={index}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
