import styles from "./TaskListItem.module.css";
import React from "react";
import classNames from "classnames";
//import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const TaskListItem = ({ title, description, handleDeleteTodo, index }) => {
	const checkIconClassNames = classNames(styles.icon, styles.checkIcon);
	const deleteIconClassNames = classNames(styles.icon, styles.deleteIcon);

	return (
		<div className={styles.taskListItem}>
			<div>
				<span>{title}</span>
				<p>{description}</p>
			</div>
			<div>
				<AiOutlineDelete
					className={deleteIconClassNames}
					onClick={(e) => handleDeleteTodo(e, index)}
				/>
				<FaCheck className={checkIconClassNames} />
			</div>
		</div>
	);
};

export default TaskListItem;
