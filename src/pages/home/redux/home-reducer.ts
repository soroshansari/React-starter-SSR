import { PostReducer } from "../../../types/post-type/post-reducer-type";
import {
  PostActionTypes,
  SET_POSTS_LIST,
  SET_POSTS_LIST_LOADING,
} from "./home-action-types";

const initialState: PostReducer = {
  data: [],
  isLoading: false,
};

const HomeReducer = (
  state = initialState,
  action: PostActionTypes
): PostReducer => {
  switch (action.type) {
    case SET_POSTS_LIST_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_POSTS_LIST:
      return { ...state, data: action.posts ? [...action.posts] : [] };
    default:
      return state;
  }
};

export default HomeReducer;
