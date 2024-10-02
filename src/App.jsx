import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
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
						<Button text="Add" />
					</div>
				</div>
				<hr />
				{/* buttons section */}
				<div className={styles.buttonsGroup}>
					<button type="button">Todo</button>
					<button type="button">Completed</button>
				</div>
				{/* Tasks list */}
				<div className={styles.taskList}>
					<div className={styles.taskListItem}>
						<b>Task 1</b>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio alias ut quae
							voluptates corrupti.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
