// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { loginUser } from './authService'
// const initialState = {
//     user: null,
//     userLoading: false,
//     userSuccess: false,
//     userError: false,
//     userMessage: false,
//     userSuccessMessage: ''
// }
// export const signIn = createAsyncThunk('sign-in', async (frontendData, thunkAPI) =>
// {
//     try {
//         return await loginUser(frontendData)
//     } catch (error) {
//      console.log(error)   
//     }
// })

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(signIn.pending, (state, action) =>
//         {
//             state.userLoading=true
//         })
//             .addCase(signIn.rejected, (state, action) =>
//             {
//                 state.userLoading=false
//                 state.userError = true
//                 state.userMessage = action.payload
//                 state.user=null
//             })
//             .addCase(signIn.fulfilled, (state, action) =>
//             {
//                 state.userLoading = false
//                 state.userSuccess = true
//                 state.user = action.payload
//                 state.userSuccessMessage = 'Welcome'
//         })
//     }
// })
// export default authSlice.reducer