import axios from "axios";
import IPost from "../../interfaces/user/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

/*
async function fetchPosts(dispatch: AppDispatch): Promise<void> {
    try {
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
        dispatch(postSlice.actions.postsFetchingSuccess(response.data));
    } catch (error: unknown | any) {
        dispatch(postSlice.actions.postsFetchingError(error.message));
    }
}
 */

const fetchPosts = createAsyncThunk('post/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
        return response.data
    } catch (error: unknown | any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export default fetchPosts;
