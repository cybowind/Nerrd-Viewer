import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {
    // numOfthings : 20
    loading: false,
    things: [],
    error: ''
}

// Generates pending, fulfilled, and rejected action types
export const fetchThings = createAsyncThunk('user/fetchThings', () => {
    // export const fetchThings = createAsyncThunk('user/fetchThings', () => {
        return axios
    // .get('http://jsonplaceholder.typicode.com/users')
    // .get('http://jameswen.com/public/nokia/mockdata/mock_operation_data_tiny.json')
    .get('http://localhost:5000/mock_data')
    .then((response) => response.data.express) //.map((operation) => operation.id))
})


const thingSlice = createSlice({
    name: 'thing',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchThings.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchThings.fulfilled, (state, action) => {
            state.loading = false
            state.things = action.payload
            state.error = ''
        })
        builder.addCase(fetchThings.rejected, (state, action) => {
            state.loading = false
            state.things = []
            state.error = action.error.message
        })
    }
})

export default thingSlice.reducer
