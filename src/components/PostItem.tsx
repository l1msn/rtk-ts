import React from 'react';
import IPost from "../interfaces/post/IPost";
import IPostProps from "../interfaces/post/IPostProps";

const PostItem: React.FC<IPostProps> = ({post}) => {
    return (
        <div className="post">
            {post.id} , {post.title}
            <button onClick={(): void => {}}>Delete</button>
        </div>
    );
};

export default PostItem;
