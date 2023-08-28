import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const GetBooks = createAsyncThunk(
    'book/getBooks',
    async () => (await axios.get('https://gutendex.com/books')).data
)

export const GetBooksBySearch = createAsyncThunk(
    'book/getBooksBySearch',
    async (filters) => {
        let query = ''
        query += (filters.searchTerm !== '') ? `?search=${filters.searchTerm}` : ''
        query += (filters.lang !== '') ? (query !== '') ? `&languages=${filters.lang}` : `?languages=${filters.lang}` : ''
        console.log("Query : " + query)
        return (await axios.get(`https://gutendex.com/books${query}`)).data
    }
)