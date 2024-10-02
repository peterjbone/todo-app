import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input.jsx";

function App() {
	return (
		<div className={styles.App}>
			<h1>Todo app list</h1>

			<div className={styles.todoWrapper}>
				{/* Inputs section */}
				<div className={styles.inputsGroup}>
					<Input id="title" label="Title" placeholder="What is the task Title?" />
					<Input id="description" label="Description" placeholder="What is the task description?" />
					<div className={styles.inputItem}>
						<button type="button" className={styles.primaryBtn}>
							Add
						</button>
					</div>
				</div>
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
