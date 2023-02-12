import React from 'react';
import postAPI from "../service/PostService";
import IPost from "../interfaces/post/IPost";
import PostItem from "./PostItem";


const PostList: React.FC = () => {
    const {data: posts} = postAPI.useFetchAllPostQuery(5)
    return (
        <div className="posts__list">
            {posts && posts.map((post: IPost) => {
                return <PostItem post={post} />
            })}
        </div>
    );
};

export default PostList;
