import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchPosts from "../actions-creators/postActionCreators";
import IPostState from "../../interfaces/post/IPostState";
import IPost from "../../interfaces/post/IPost";

const initialState: IPostState = {
    posts: [],
    isLoading: false,
    error: null,
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        /*
        postsFetching(state: IPostState) {
            state.isLoading = true;
        },
        postsFetchingSuccess(state: IPostState, action: PayloadAction<IPost[]>) {
            state.isLoading = false;
            state.error = null;
            state.posts = action.payload
        },
        postsFetchingError(state: IPostState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }

         */
    },
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state: IPostState, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = null;
            state.posts = action.payload
        },
        [fetchPosts.pending.type]: (state: IPostState) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]: (state: IPostState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default postSlice.reducer;
export { postSlice };
