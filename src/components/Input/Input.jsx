import React from "react";
//import styles from "./Input.module.css";

const Input = ({ id, label, placeholder, value, handleInputValue }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={handleInputValue}
			/>
		</>
	);
};

export default Input;
