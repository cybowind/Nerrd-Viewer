import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {
    // numOfOperations : 20
    loading: false,
    operations: [],
    error: ''
}

// Generates pending, fulfilled, and rejected action types
export const fetchOperations = createAsyncThunk('user/fetchOperations', () => {
    return axios
    // .get('http://jsonplaceholder.typicode.com/users')
    // .get('http://jameswen.com/public/nokia/mockdata/mock_operation_data_tiny.json')
    .get('http://localhost:5000/mock_data')
    .then((response) => response.data.express) //.map((operation) => operation.id))
})

const operationSlice = createSlice({
    name: 'operation',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchOperations.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchOperations.fulfilled, (state, action) => {
            state.loading = false
            state.operations = action.payload
            state.error = ''
        })
        builder.addCase(fetchOperations.rejected, (state, action) => {
            state.loading = false
            state.operations = []
            state.error = action.error.message
        })
    }
})

export default operationSlice.reducer
