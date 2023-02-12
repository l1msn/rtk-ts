import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IPost from "../interfaces/post/IPost";


const postAPI = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (build) => ({
        fetchAllPost: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export default postAPI;
