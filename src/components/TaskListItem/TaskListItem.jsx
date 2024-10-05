import styles from "./TaskListItem.module.css";
import React from "react";

//import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const TaskListItem = ({ title, description }) => {
	return (
		<div className={styles.taskListItem}>
			<div>
				<span>{title}</span>
				<p>{description}</p>
			</div>
			<div>
				<AiOutlineDelete className={styles.icon} />
				<FaCheck className={styles.icon} />
			</div>
		</div>
	);
};

export default TaskListItem;
