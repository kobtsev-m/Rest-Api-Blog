const SET_POSTS = 'SET-POSTS';
const DELETE_POST = 'DELETE-POST';

const initialState = {
  posts: []
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.reduce((acc, post) => {
          if (post.id !== action.postId) {
            acc.push(post);
          }
          return acc;
        }, [])
      };
    default:
      return state;
  }
}

export function setPosts(posts) {
  return { type: SET_POSTS, posts };
}
export function deletePost(postId) {
  return { type: DELETE_POST, postId };
}

export default postsReducer;
