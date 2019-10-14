import React from 'react';
import Comment from '../comment/Comment';

import './CommentList.css';

const CommentList = ({comments}) => {

	const commentView = comments.map(comment => {
		return (
			<div key={comment.id} className="comment">
				<Comment {...comment} />
			</div>
		)
	})

	return (
		<div className="comment-list">
			{commentView}	
		</div>
	);

}

export default CommentList;