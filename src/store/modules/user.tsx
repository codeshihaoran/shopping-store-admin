import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
    name: 'user',
    initialState: {
        user: (JSON.parse(localStorage.getItem("user_key"))) || '',
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            localStorage.setItem('user_key', JSON.stringify(action.payload))
        }
    }
})


const { setUser } = userStore.actions
export { setUser }
export default userStore.reducer