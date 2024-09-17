import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    userLoading: false,
    userSuccess: false,
    userError: false,
    userMessage: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: ()=>{}
})
export default authSlice.reducer