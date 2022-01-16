import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    loggedIn: boolean,
    phoneNumber: string,
}

const initialState: UserState = {
    loggedIn: false,
    phoneNumber: "",
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        updatePhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        }
    }
});

export const { login, updatePhoneNumber } = userSlice.actions;

export const selectLoggedIn = (state: RootState) => state.user.loggedIn;

export default userSlice.reducer;