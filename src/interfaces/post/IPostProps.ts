import IPost from "./IPost";

interface IPostProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void
}

export default IPostProps;
