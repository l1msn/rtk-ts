import IUser from "./IUser";

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
}

export default IUserState;
