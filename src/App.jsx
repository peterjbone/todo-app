import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
import TaskListItem from "./components/TaskListItem/TaskListItem.jsx";

function App() {
	const [isCompletedScreen, setIsCompletedScreen] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [allTodos, setAllTodos] = useState([]);
	const [completedTodos, setCompletedTodos] = useState([]);
	const [currentEdit, setCurrentEdit] = useState("");

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

	//? Handlers function for the buttons
	const handleAddTodo = (e) => {
		const newTodo = {
			title: newTitle,
			description: newDescription
		};

		const updatedAllTodos = [...allTodos];
		updatedAllTodos.push(newTodo);

		localStorage.setItem("todoList", JSON.stringify(updatedAllTodos));
		setAllTodos(updatedAllTodos);

		setNewTitle("");
		setNewDescription("");
	};

	const handleDeleteTodo = (index) => {
		const reducedTodos = [...allTodos];
		reducedTodos.splice(index, 1);

		localStorage.setItem("todoList", JSON.stringify(reducedTodos));
		setAllTodos(reducedTodos);
	};

	const handleCompletedTodos = (index) => {
		let date = new Date().toLocaleDateString();
		let time = new Date().toLocaleTimeString();
		let completedAt = `Task completed on ${date} at ${time}`;

		const completedItem = {
			...allTodos[index],
			completedAt
		};

		handleDeleteTodo(index);

		const updatedCompletedTodos = [...completedTodos];
		updatedCompletedTodos.push(completedItem);

		localStorage.setItem("completedList", JSON.stringify(updatedCompletedTodos));
		setCompletedTodos(updatedCompletedTodos);
	};

	const handleDeleteCompletedTodo = (index) => {
		const reducedTodos = [...completedTodos];
		reducedTodos.splice(index, 1);

		localStorage.setItem("completedList", JSON.stringify(reducedTodos));
		setCompletedTodos(reducedTodos);
	};

	const handleUpdateTitle = (e) => {};

	const handleUpdateDescription = (e) => {};

	const handleEdit = (e) => {};

	//? to check for "todo tasks" in the local storage
	useEffect(() => {
		let savedTodoTasks = JSON.parse(localStorage.getItem("todoList"));

		if (savedTodoTasks) {
			setAllTodos(savedTodoTasks);
		}
	}, []);

	//? to check for "completed tasks" in the local storage
	useEffect(() => {
		let savedCompletedTasks = JSON.parse(localStorage.getItem("completedList"));

		if (savedCompletedTasks) {
			setCompletedTodos(savedCompletedTasks);
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
									<h2 style={{ textAlign: "center" }}>
										You don’t have tasks to do.
									</h2>
								</div>
							) : (
								allTodos.map((todo, index) => {
									if (currentEdit === index) {
										<div className={styles.editWrapper}>
											<input
												name="newTitle"
												type="text"
												placeholder="Update title"
												onChange={(e) => handleUpdateTitle(e.target.value)}
												value={currentEditedItem.title}
											/>
											<textarea
												name="newDescription"
												placeholder="Update Description"
												onChange={(e) => handleUpdateDescription(e.target.value)}
												value={currentEditedItem.description}></textarea>
										</div>;
									} else {
										return (
											<TaskListItem
												key={uuidv4()}
												title={todo.title}
												description={todo.description}
												index={index}
												handleDeleteTodo={handleDeleteTodo}
												handleCompletedTodos={handleCompletedTodos}
												handleEdit={handleEdit}
											/>
										);
									}
								})
							)
						) : //* the YES completed screen
						!completedTodos.length ? (
							<div>
								<h2 style={{ textAlign: "center" }}>
									You have not completed any task.
								</h2>
							</div>
						) : (
							completedTodos.map((todo, index) => (
								<TaskListItem
									key={uuidv4()}
									title={todo.title}
									description={todo.description}
									completedAt={todo.completedAt}
									index={index}
									handleDeleteTodo={handleDeleteTodo}
									handleDeleteCompletedTodo={handleDeleteCompletedTodo}
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
