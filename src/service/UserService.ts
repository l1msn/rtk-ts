import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IUser from "../interfaces/user/IUser";


const userAPI = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export default userAPI;
