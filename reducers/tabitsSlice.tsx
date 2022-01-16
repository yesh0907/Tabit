import { createSlice } from "@reduxjs/toolkit";

export interface Tabit {
    name: string,
    freq: number[],
    streak: number,
    end: Date | -1
}

const initialState: Tabit[] = [
    { 
        name: "Read 10 minutes in the morning", 
        freq: [0, 2, 4],
        streak: 4,
        end: new Date("2022-02-14")
    },
    {
        name: "Walk 10,000 steps",
        freq: [1,5],
        streak: 20,
        end: -1
    },
    {
        name: "Call Mom",
        freq: [6],
        streak: 2,
        end: new Date("2022-06-30")
    }
];

export const tabitsSlice = createSlice({
    name: 'tabits',
    initialState,
    reducers: {
        addTabit: (state, action) => {
            state.push(action.payload);
        },
        updateTabitStreak: (state, action) => {
            const { name } = action.payload;
            const existingTabit = state.find(tabit => tabit.name === name);
            if (existingTabit) {
                existingTabit.streak += 1;
            }
        }
    }
});

export const { addTabit, updateTabitStreak } = tabitsSlice.actions;

export default tabitsSlice.reducer;