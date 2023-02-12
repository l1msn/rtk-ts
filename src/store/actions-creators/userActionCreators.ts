import axios from "axios";
import IUser from "../../interfaces/user/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

/*
async function fetchUsers(dispatch: AppDispatch): Promise<void> {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (error: unknown | any) {
        dispatch(userSlice.actions.usersFetchingError(error.message));
    }
}
 */

const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users",{
            params: {
                _limit: 5
            }});
        return response.data
    } catch (error: unknown | any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export default fetchUsers;
