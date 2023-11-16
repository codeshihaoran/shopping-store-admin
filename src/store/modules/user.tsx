import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem('user_key') || '',
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            // localstorage存储数据 
            localStorage.setItem('user_key', JSON.stringify(action.payload))
        }
    }
})


const { setUser } = userStore.actions
export { setUser }
export default userStore.reducer