import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

const modalSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true
        },
        logout: (state, action) => {
            state.isLogin = false
        }
    }
})

export const { login, logout } = modalSlice.actions
export default modalSlice.reducer
