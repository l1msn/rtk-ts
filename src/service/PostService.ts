import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IPost from "../interfaces/post/IPost";


const postAPI = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        //baseUrl: "https://jsonplaceholder.typicode.com/"
        baseUrl: "http://localhost:5000",
    }),
    tagTypes: ['post'],
    endpoints: (build) => ({
        fetchAllPost: build.query<IPost[], number>({
            query: (limit: number = 10) => ({
                url: '/posts',
                params: {
                    _limit: limit
                },
                timeout: 1000,
                method: 'GET'
            }),
            providesTags: result => ['post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: '/posts',
                method: 'POST',
                body: post,
                timeout: 500
            }),
            invalidatesTags: ['post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post,
                timeout: 500
            }),
            invalidatesTags: ['post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
                timeout: 500
            }),
            invalidatesTags: ['post']
        })
    })
});

export default postAPI;
