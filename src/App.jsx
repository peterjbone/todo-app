import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
//import Button from "./components/Button/Button.jsx";

function App() {
	const [isSelected, setIsSelected] = useState(null);

	const handleClick = (e) => {
		const { innerText } = e.target;
		if (innerText === "Todo") setIsSelected("Todo");
		if (innerText === "Completed") setIsSelected("Completed");
	};

	return (
		<div className={styles.App}>
			<h1>Todo app list</h1>

			<div className={styles.todoWrapper}>
				{/* Inputs section */}
				<div className={styles.inputsGroup}>
					<div className={styles.inputItem}>
						<Input id="title" label="Title" placeholder="What is the task Title?" />
					</div>
					<div className={styles.inputItem}>
						<Input
							id="description"
							label="Description"
							placeholder="What is the task description?"
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
						data-btn-selected={isSelected === "Todo" && "active"}
						onClick={handleClick}>
						Todo
					</button>
					<button
						type="button"
						data-btn-selected={isSelected === "Completed" && "active"}
						onClick={handleClick}>
						Completed
					</button>
				</div>
				{/* Tasks list */}
				<div className={styles.taskList}>
					<div className={styles.taskListItem}>
						<b>Task 1</b>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							distinctio alias ut quae voluptates corrupti.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
