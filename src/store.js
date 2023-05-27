// store.js

import { configureStore } from '@reduxjs/toolkit'
import myReducer from './myReducer'

const store = configureStore({
    reducer: {
        myData: myReducer
        // 다른 리듀서들 추가 가능
    }
})

export default store
