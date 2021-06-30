import { useState } from "react";

const SimpleInput = () => {
	const [name, setName] = useState("");
	const [nameTouched, setNameTouched] = useState(false);

	const nameIsValid = name.trim() !== "";
	const nameInputIsInvalid = !nameIsValid && nameTouched;
	const formControlClassName = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	const nameChangeHandler = (e) => setName(e.target.value);

	const nameBlurHandler = () => setNameTouched(true);

	let isFormValid = false;
	if (nameIsValid) {
		isFormValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (nameInputIsInvalid) {
			return;
		}

		setName("");
		setNameTouched(false);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={formControlClassName}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
				/>
				{nameInputIsInvalid && <p className="error-text">Name is invalid</p>}
			</div>
			<div className="form-actions">
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
