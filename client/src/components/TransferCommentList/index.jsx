import React from 'react';
import PropTypes from 'prop-types';

const TransferCommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div>
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.text} {/* Add other comment properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add prop-types validation
TransferCommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
    })
  ),
};

export default TransferCommentList;