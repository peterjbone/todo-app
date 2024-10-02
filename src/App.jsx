import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<h1>Todo app list</h1>

			<div className={styles.todoWrapper}>
				<div className={styles.inputsGroup}>
					<div className={styles.inputItem}>
						<label htmlFor="title">Title</label>
						<input
							id="title"
							type="text"
							placeholder="What is the task title?"
						/>
					</div>
					<div className={styles.inputItem}>
						<label htmlFor="description">Description</label>
						<input
							id="description"
							type="text"
							placeholder="What is the task description?"
						/>
					</div>
					<div className={styles.inputItem}>
						<label htmlFor="title">Title</label>
						<input id="title" type="text" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
