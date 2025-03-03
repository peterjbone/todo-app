import styles from "./TaskListItem.module.css";
import React from "react";
import classNames from "classnames";
//import { MdDelete } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const TaskListItem = ({
	title,
	description,
	completedAt,
	index,
	handleDeleteTodo,
	handleCompletedTodos,
	handleDeleteCompletedTodo,
	handleEdit,
	todo
}) => {
	const checkIconClassNames = classNames(styles.icon, styles.checkIcon);
	const deleteIconClassNames = classNames(styles.icon, styles.deleteIcon);
	const editIconClassNames = classNames(styles.icon, styles.editIcon);

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
				{/*For pending todos*/}
				{!completedAt ? (
					<AiOutlineDelete
						className={deleteIconClassNames}
						onClick={() => handleDeleteTodo(index)}
						title="Delete?"
					/>
				) : (
					// for completed todos
					<AiOutlineDelete
						className={deleteIconClassNames}
						onClick={() => handleDeleteCompletedTodo(index)}
						title="Delete completed task?"
					/>
				)}
				{/*For pending todos*/}
				{!completedAt && (
					<FaCheck
						className={checkIconClassNames}
						onClick={() => handleCompletedTodos(index)}
						title="Complete?"
					/>
				)}
				{/*For pending todos*/}
				{!completedAt && (
					<AiOutlineEdit
						className={editIconClassNames}
						onClick={() => handleEdit(index, todo)}
						title="Edit?"
					/>
				)}
			</div>
		</div>
	);
};

export default TaskListItem;
