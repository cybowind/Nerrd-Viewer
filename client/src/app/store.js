import { configureStore } from '@reduxjs/toolkit'
import operationReducer from '../features/operation/operationSlice'
import thingReducer from '../features/thing/thingSlice'

const store = configureStore({
    reducer: {
        operation: operationReducer,
        thing: thingReducer,
    }, 
})

export default store