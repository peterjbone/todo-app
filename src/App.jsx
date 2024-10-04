import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
//import Button from "./components/Button/Button.jsx";

import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

function App() {
	const [buttonSelected, setButtonSelected] = useState(null);
	const [allTodos, setAllTodos] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");

	const handleSelectedButton = (e) => {
		const { innerText } = e.target;
		if (innerText === "Todo") setButtonSelected("Todo");
		if (innerText === "Completed") setButtonSelected("Completed");
	};

	const handleNewTitle = (e) => {
		const { value } = e.target;
		setNewTitle(value);
		//console.log(newTitle);
	};

	const handleNewDescription = (e) => {
		const { value } = e.target;
		setNewDescription(value);
		//console.log(newDescription);
	};

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
						<button type="button">Add</button>
					</div>
				</div>
				<hr />
				{/* buttons section */}
				<div className={styles.buttonsGroup}>
					<button
						type="button"
						data-btn-selected={buttonSelected === "Todo" && "active"}
						onClick={handleSelectedButton}>
						Todo
					</button>
					<button
						type="button"
						data-btn-selected={buttonSelected === "Completed" && "active"}
						onClick={handleSelectedButton}>
						Completed
					</button>
				</div>
				{/* Tasks list */}
				<div className={styles.taskList}>
					<div className={styles.taskListItem}>
						<div>
							<span>Task 1</span>
							<p>Description</p>
						</div>
						<div>
							<AiOutlineDelete className={`${styles.icon} ${styles.deleteIcon}`} />
							<FaCheck className={`${styles.icon} ${styles.checkIcon}`} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
