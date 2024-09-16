import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    userLoading: false,
    userError:false,
    userSuccess: false,
    userMessage:false
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:()=>{}
})
export default authSlice.reducer