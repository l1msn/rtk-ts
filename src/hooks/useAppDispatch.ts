import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";


function useAppDispatch() {
    return useDispatch<AppDispatch>()
}

export default useAppDispatch;
