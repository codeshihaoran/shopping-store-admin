import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})
const { setUser } = userStore.actions
export { setUser }
export default userStore.reducer