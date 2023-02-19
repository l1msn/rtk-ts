import React from 'react';
import IPostProps from "../interfaces/post/IPostProps";
import IPost from "../interfaces/post/IPost";

const PostItem: React.FC<IPostProps> = ({post, remove, update}) => {
    return (
        <div className="post">
            {post.id} , {post.title}
            <button onClick={(event: React.MouseEvent): void => {
                event.stopPropagation();
                remove(post);
            }}>Delete</button>
            <button onClick={(event: React.MouseEvent): void => {
                const title = prompt();
                update({...post, title} as IPost);
            }}>Update</button>
        </div>
    );
};

export default PostItem;
