'use client'

import { useState } from 'react'
import Image from 'next/image'
import { makeApi } from '../../services/slices/bookSlice'
import { GetBooksBySearch, GetBooks } from '../../services/apis/BooksApi'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [ searchTerm, updateSearchTerm ] = useState('');
    const [ lang, setLangs ] = useState('')

    const typeSearchTerm = (e) => {
        updateSearchTerm(e.target.value);
    }

    const enterSearch = (e) => {
        if ( e.key === 'Enter' ) {
            dispatch(makeApi())
            console.log("Lang : " + lang)
            dispatch(GetBooksBySearch({searchTerm, lang}))
        }
    }

    const selectLanguage = (e) => {
        setLangs(e.target.value)
        dispatch(makeApi())
        dispatch(GetBooksBySearch({searchTerm, lang: e.target.value}))
    }

    const resetFilter = () => {
        updateSearchTerm('')
        setLangs('')
        dispatch(makeApi())
        dispatch(GetBooks())
    }

    return (
        <div className='mx-auto my-12 w-auto'>
            <input
                type='text'
                placeholder='Search books...'
                onChange={typeSearchTerm}
                onKeyDown={enterSearch}
                value={searchTerm}
                className='w-72 -8 p-2 border-b-2 border-t-0 border-x-0
                outline-none focus:border-y-blue-300 float-left'
            />
            <Image
                src='/search.svg'
                width={25}
                height={25}
                alt='Search'
                className='mt-2 relative -left-8'
            />
            <select className='outline-none w-72 mt-8' onChange={selectLanguage}>
                <option value=''>Select Language</option>
                <option value='en'>English</option>
                <option value='fr'>French</option>
                <option value='fi'>Finnish</option>
            </select>
            <div className='mt-4 py-4 flex justify-center'>
                <button
                    onClick={resetFilter}
                    className='w-40 py-2 text-white bg-cyan-600'>
                        Reset
                </button>
            </div>
        </div>
    )
}

export default SearchBar