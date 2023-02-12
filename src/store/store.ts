import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";
import postAPI from "../service/PostService";


const rootReducer = combineReducers({
    //redux classic api
    userSlice,
    //RTK new api
    [postAPI.reducerPath]: postAPI.reducer
});

function setupStore() {
    return configureStore({
        reducer: rootReducer,
        //RTK new api middlewares
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
    })
}

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export default setupStore;
export type {RootState, AppStore, AppDispatch}

