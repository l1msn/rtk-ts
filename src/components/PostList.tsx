import React from 'react';
import postAPI from "../service/PostService";
import IPost from "../interfaces/post/IPost";
import PostItem from "./PostItem";


const PostList: React.FC = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostQuery(10)
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    async function createHandle() {
        const title = prompt();
        await createPost({
            title,
            body: title
        } as IPost)
    }

    function updateHandle(post: IPost) {
        updatePost(post)
    }
    function removeHandle(post: IPost) {
        deletePost(post)
    }


    return (
        <div className="posts__list">
            <button onClick={createHandle}>Add new post</button>
            { isLoading && <div>is loading...</div> }
            { error && <div>Error!</div>}
            {posts && posts.map((post: IPost) => {
                return <PostItem remove={removeHandle} update={updateHandle}  post={post} />
            })}
        </div>
    );
};

export default PostList;
