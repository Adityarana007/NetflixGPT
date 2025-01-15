import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

// exporting my custom actions
export const {addUser, removeUser} = userSlice.actions;

// export this userSlice reducer
export default userSlice.reducer;