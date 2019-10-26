import React from 'react';

import './CommentForm.css';

const CommentForm = (props) => {

	const {title, text, phone, errors, onSubmit, handleChange, isError, onFocus, validate} = props;

	return (
		<form className="comment-form" onSubmit={onSubmit}>
			<input 
				id="title"
				type="text"
				onChange={handleChange}
				onBlur={isError}
				onFocus={onFocus}
				className={`add-comment-title ${errors.title ? "error" : ""}`}
				placeholder="Заголовок комментария"
				value={title}
				required					
			/>

			{errors.title && <p className="error-message">{errors.title}</p>}

			<textarea 
				id="text"
				onChange={handleChange}
				onBlur={isError}
				onFocus={onFocus}
				className={`add-comment-text ${errors.text ? "error" : ""}`}
				placeholder="Оставьте комментарий здесь"
				value={text}
				required
			/>

			{errors.text && <p className="error-message">{errors.text}</p>}

			<input 
				id="phone"
				type="text"
				onChange={handleChange}
				onBlur={isError}
				onFocus={onFocus}
				className={`add-comment-phone ${errors.phone ? "error" : ""}`}
				placeholder="+7-xxx-xxx-xxxxx"
				value={phone}
				required
			/>

			{errors.phone && <p className="error-message">{errors.phone}</p>}

			<button
				type="submit"
				className="submit-form"
				disabled={validate()}
			>
				Оставить комментарий
			</button>		
		</form>
	);
}

export default CommentForm;