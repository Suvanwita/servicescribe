import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Electrician John",
    body: "Hi John,I wanted to take a moment to thank you for the excellent job you did with the electrical work at My house.",
    reactions: 2,
    userId: "user-9",
    tags: ["House", "Elec", "Fantastic"],
  },
  {
    id: "2",
    title: "Plumber Dave",
    body: "I wanted to provide some feedback regarding the recent plumbing work you did at My working place. Unfortunately, I wasn’t entirely satisfied with the service, and I’d like to share a few points for improvement:",
    reactions: 15,
    userId: "user-12",
    tags: ["Plumber", "Unbelievable"],
  },
];

export default PostListProvider;
