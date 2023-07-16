// store.js

import { configureStore } from '@reduxjs/toolkit'
import myReducer from './myReducer'
import isOpenReducer from './LoginModalControlReducer'
import isSignOpenReducer from './SignUpModalControlReducer'

const store = configureStore({
    reducer: {
        myData: myReducer,
        modal: isOpenReducer,
        signupmodal: isSignOpenReducer

        // 다른 리듀서들 추가 가능
    }
})

export default store
