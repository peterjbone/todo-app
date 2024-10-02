import React from "react";
//import styles from "./Input.module.css";

const Input = ({ id, label, placeholder }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="text" placeholder={placeholder} />
		</>
	);
};

export default Input;
