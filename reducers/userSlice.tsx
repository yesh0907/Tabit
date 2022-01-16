import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    loggedIn: boolean,
}

const initialState: UserState = {
    loggedIn: false,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        }
    }
});

export const { login } = userSlice.actions;

export const selectLoggedIn = (state: RootState) => state.user.loggedIn;

export default userSlice.reducer;