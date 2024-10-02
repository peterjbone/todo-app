import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
	return (
		<>
			<button type="button" className={styles.primaryBtn}>
				{text}
			</button>
		</>
	);
};

export default Button;
