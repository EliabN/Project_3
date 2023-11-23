/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Favorite = ({ team }) => {
  console.log(team)
  const [addToFavorites, { error }] = useMutation(ADD_TO_FAVORITES, {
    refetchQueries: [
      // Refetch the user query to update the favoriteTeams after adding a new team
      // You may need to adjust this query based on your schema and requirements
      // For example, if the favoriteTeams field is nested within a user object, you might use a different query.
      { query: QUERY_USER, variables: { username: Auth.getUser().data.username } },
    ],
  });

  const handleAddToFavorites = async () => {
    try {
      await addToFavorites({
        variables: {
          teamId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="favorite-btn btn btn-outline-info"
        onClick={handleAddToFavorites}
      >
        Add to Favorites
      </button>
      {error && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Favorite;