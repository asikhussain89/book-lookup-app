import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/bookSlice'

export default configureStore({
    reducer: {
        book: bookSlice,
    }
})