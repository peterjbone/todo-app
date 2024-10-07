import styles from "./TaskListItem.module.css";
import React from "react";
import classNames from "classnames";
//import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const TaskListItem = ({
	title,
	description,
	completedAt,
	index,
	handleDeleteTodo,
	handleCompletedTodos,
	handleDeleteCompletedTodo
}) => {
	const checkIconClassNames = classNames(styles.icon, styles.checkIcon);
	const deleteIconClassNames = classNames(styles.icon, styles.deleteIcon);

	return (
		<div className={styles.taskListItem}>
			<div>
				<span>{title}</span>
				<p>{description}</p>
				{completedAt && (
					<p>
						<u>{completedAt}</u>
					</p>
				)}
			</div>
			<div>
				{!completedAt ? (
					<AiOutlineDelete
						className={deleteIconClassNames}
						onClick={() => handleDeleteTodo(index)}
						title="Delete?"
					/>
				) : (
					<AiOutlineDelete
						className={deleteIconClassNames}
						onClick={() => handleDeleteCompletedTodo(index)}
						title="Delete completed task?"
					/>
				)}
				{!completedAt && (
					<FaCheck
						className={checkIconClassNames}
						onClick={() => handleCompletedTodos(index)}
						title="Complete?"
					/>
				)}
			</div>
		</div>
	);
};

export default TaskListItem;
