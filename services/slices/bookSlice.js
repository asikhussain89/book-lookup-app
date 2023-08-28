import { createSlice } from '@reduxjs/toolkit'
import { GetBooks, GetBooksBySearch } from '../apis/BooksApi'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoading: false,
        isSuccess: false,
        books: {}
    },
    reducers: {
        makeApi : ( state, action ) => {
            state.isLoading = true
            state.isSuccess = false
        }
    },
    extraReducers: {
        [GetBooks.fulfilled]: ( state, action ) => {
            state.books = action.payload
            state.isLoading = false
            state.isSuccess = true
        },
        [GetBooksBySearch.fulfilled]: ( state, action ) => {
            state.books = action.payload
            state.isLoading = false
            state.isSuccess = true
        }
    }
})

export const { makeApi } = bookSlice.actions

export default bookSlice.reducer