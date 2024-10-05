import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
import TaskListItem from "./components/TaskListItem/TaskListItem.jsx";

function App() {
	const [isCompletedScreen, setIsCompletedScreen] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [allTodos, setAllTodos] = useState([]);
	const [completedTodos, setCompletedTodos] = useState([]);

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

		localStorage.setItem("todoList", JSON.stringify(updatedAllTodos));
	};

	const handleDeleteTodo = (index) => {
		const reducedTodos = [...allTodos];
		reducedTodos.splice(index, 1);

		localStorage.setItem("todoList", JSON.stringify(reducedTodos));
		setAllTodos(reducedTodos);
	};

	const handleComplete = (index) => {
		let date = new Date().toLocaleDateString();
		let time = new Date().toLocaleTimeString();
		let completedAt = `Task completed on ${date} at ${time}`;

		const completedItem = {
			...allTodos[index],
			completedAt
		};

		const updatedCompletedTodos = [...completedTodos];
		updatedCompletedTodos.push(completedItem);
		setCompletedTodos(updatedCompletedTodos);
	};

	//? to check for task in the local storage
	useEffect(() => {
		let savedTodos = JSON.parse(localStorage.getItem("todoList"));

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
						className={!isCompletedScreen ? `${styles.active}` : undefined}
						onClick={handleTodoBtn}>
						Todo
					</button>
					<button
						type="button"
						className={isCompletedScreen ? `${styles.active}` : undefined}
						onClick={handleCompletedBtn}>
						Completed
					</button>
				</div>
				{/* Tasks list */}
				<div className={styles.taskList}>
					{
						//* the NO completed screen
						!isCompletedScreen ? (
							!allTodos.length ? (
								<div>
									<h2 style={{ textAlign: "center" }}>You don’t have task to do.</h2>
								</div>
							) : (
								allTodos.map((todo, index) => (
									<TaskListItem
										key={todo.title}
										title={todo.title}
										description={todo.description}
										index={index}
										handleDeleteTodo={handleDeleteTodo}
										handleComplete={handleComplete}
									/>
								))
							)
						) : //* the YES completed screen
						!completedTodos.length ? (
							<div>
								<h2 style={{ textAlign: "center" }}>
									You have not complete any task.
								</h2>
							</div>
						) : (
							completedTodos.map((todo, index) => (
								<TaskListItem
									key={todo.title}
									title={todo.title}
									description={todo.description}
									completedAt={todo.completedAt}
									index={index}
									handleDeleteTodo={handleDeleteTodo}
								/>
							))
						)
					}
				</div>
			</div>
		</div>
	);
}

export default App;
