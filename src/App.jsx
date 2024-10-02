import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<h1>Todo app list</h1>

			<div className={styles.todoWrapper}>
				{/* Inputs section */}
				<div className={styles.inputsGroup}>
					<div className={styles.inputItem}>
						<label htmlFor="title">Title</label>
						<input id="title" type="text" placeholder="What is the task title?" />
					</div>
					<div className={styles.inputItem}>
						<label htmlFor="description">Description</label>
						<input id="description" type="text" placeholder="What is the task description?" />
					</div>
					<div className={styles.inputItem}>
						<button type="button" className={styles.primaryBtn}>
							Add
						</button>
					</div>
				</div>
				{/* Inputs section */}
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
