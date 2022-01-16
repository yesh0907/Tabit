import { createSlice } from "@reduxjs/toolkit";

export interface Tabit {
    name: string,
    freq: number[],
    streak: number,
    end: string,
    contacts?: string[]
}

const initialState: Tabit[] = [
    { 
        name: "Read 10 minutes in the morning", 
        freq: [0, 2, 4],
        streak: 4,
        end: new Date("2022-02-14").toDateString(),
        contacts: ["8182902018"]
    },
    {
        name: "Walk 10,000 steps",
        freq: [1,5],
        streak: 20,
        end: new Date("2023-01-16").toDateString(),
        contacts: ["5556132081"]
    },
    {
        name: "Call Mom",
        freq: [6],
        streak: 2,
        end: new Date("2022-06-30").toDateString(),
        contacts: ["8312018317"]
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
        },
        updateContacts: (state, action) => {
            const tabit = state[state.length - 1];
            tabit.contacts = action.payload;
        }
    }
});

export const { addTabit, updateTabitStreak, updateContacts } = tabitsSlice.actions;

export default tabitsSlice.reducer;