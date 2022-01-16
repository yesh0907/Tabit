import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import tabitsReducer from './reducers/tabitsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        tabits: tabitsReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;