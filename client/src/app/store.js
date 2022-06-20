import { configureStore } from '@reduxjs/toolkit'
import operationTableReducer from '../features/operationTable/operationTableSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        operationTable: operationTableReducer,
    }, 
})

export default store