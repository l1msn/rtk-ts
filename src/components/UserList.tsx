import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import useAppSelector from "../hooks/useAppSelector";
import fetchUsers from "../store/actions-creators/userActionCreators";
import IUser from "../interfaces/user/IUser";

const UserList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {users, isLoading, error} = useAppSelector((state: RootState) => {
        return state.userSlice
    })

    useEffect((): void => {
        /*
        //For classic redux
        fetchUsers(dispatch)
         */
        //For createAsyncThunk and ExtraReducers
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            { isLoading && <div>is loading...</div> }
            { error && <div>{error}</div>}
            {users && users.map((user: IUser) => {
                return <div className="user" key={user.id}> {user.id}, {user.name} </div>
            })}
        </div>
    );
};

export default UserList;
