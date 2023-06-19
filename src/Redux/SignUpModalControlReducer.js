// import { createSlice } from '@reduxjs/toolkit'
//
// // const initialState = {
// //     data: {
// //         isModalOpen: ''
// //     }
// // }
// const isOpenSlice = createSlice({
//     name: 'isOpen',
//     initialState: false,
//     reducers: {
//         toggleOpen: (state) => !state
//     }
// })
//
// export const { toggleOpen } = isOpenSlice.actions
// export default isOpenSlice.reducer

// modalSlice.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isModalOpen: false
}

const modalSlice = createSlice({
    name: 'signupmodal',
    initialState,
    reducers: {
        openSignUpModal: (state, action) => {
            state.isModalOpen = true
        },
        closeSignUpModal: (state, action) => {
            state.isModalOpen = false
        }
    }
})

export const { openSignUpModal, closeSignUpModal } = modalSlice.actions
export default modalSlice.reducer
