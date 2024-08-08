import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiData = createAsyncThunk('product/updateAllproducts', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json()
    }
    catch (err) {
        throw err
    }
})

const slice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        loading: true,
        error: ''
    },
    reducers: {
        updateAllproducts(state, action) {
            state.loading = false
            state.productList = action.payload
            state.error = ''

        },
        productsError(state, action) {
            state.loading = false
            state.error = 'Something went wrong'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(apiData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(apiData.fulfilled, (state, action) => {
                state.loading = false
                state.productList = action.payload
                state.error = ''
            })
            .addCase(apiData.rejected, (state,action) => {
                state.loading = false 
                state.err = 'Something went wrong..!!'
            })
    }
})

export const { updateAllproducts, productsError, loadingState } = slice.actions

export default slice.reducer;