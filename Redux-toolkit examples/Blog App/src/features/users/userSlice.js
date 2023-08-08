import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
]

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

// export const {} = userSlice.actions

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer