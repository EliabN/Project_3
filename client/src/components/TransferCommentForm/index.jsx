/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRANSFER_COMMENT } from '../../utils/mutations';
import { QUERY_SINGLE_TRANSFER } from '../../utils/queries';
import Auth from '../../utils/auth';

const TransferCommentForm = ({ transferId }) => {
    console.log('test')
    const [commentText, setCommentText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addTransferComment, { error }] = useMutation(ADD_TRANSFER_COMMENT, {
        refetchQueries: [
            { query: QUERY_SINGLE_TRANSFER, variables: { transferId } },
        ],
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addTransferComment({
                variables: {
                    transferId,
                    commentText,
                    commentAuthor: Auth.getUser().data.username,
                },
            });

            setCommentText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { value } = event.target;

        if (value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <h3>Add your comment</h3>

            {Auth.loggedIn() ? (
                <>
                    <p
                        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                            }`}
                    >
                        Character Count: {characterCount}/280
                    </p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">
                            <textarea
                                name="commentText"
                                placeholder="Add your comment..."
                                value={commentText}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="btn btn-primary btn-block py-3" type="submit">
                                Add Comment
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to add comments. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default TransferCommentForm;