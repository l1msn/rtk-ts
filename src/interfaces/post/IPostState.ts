import IPost from "./IPost";

interface IPostState {
    posts: IPost[];
    isLoading: boolean;
    error: string | null;
}

export default IPostState;
