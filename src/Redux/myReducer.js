//
// import { createSlice } from '@reduxjs/toolkit'
//
// const initialState = {
//     tableNumber: '',
//     rowNumber: ''
// }
//
// const mySlice = createSlice({
//     name: 'myData',
//     initialState,
//     reducers: {
//         setData: (state, action) => {
//             state.data = action.payload
//         }
//     }
// })
//
// export const { setData } = mySlice.actions
// export default mySlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        tableNumber: '',
        rowNumber: ''
    }
}

const mySlice = createSlice({
    name: 'myData',
    initialState,
    reducers: {
        setTableNumber: (state, action) => {
            state.data.tableNumber = action.payload
        },
        setRowNumber: (state, action) => {
            state.data.rowNumber = action.payload
        }
    }
})

export const { setTableNumber, setRowNumber } = mySlice.actions
export default mySlice.reducer
