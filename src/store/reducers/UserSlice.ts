import IUserState from '../../interfaces/user/IUserState'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IUser from "../../interfaces/user/IUser";
import fetchUsers from "../actions-creators/userActionCreators";

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /*
        usersFetching(state: IUserState) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state: IUserState, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = null;
            state.users = action.payload
        },
        usersFetchingError(state: IUserState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }

         */
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state: IUserState, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = null;
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state: IUserState) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state: IUserState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default userSlice.reducer;
export { userSlice };
