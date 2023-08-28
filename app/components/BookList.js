'use client'

import { useDispatch, useSelector } from 'react-redux'
import { makeApi } from '../../services/slices/bookSlice'
import { GetBooks } from '../../services/apis/BooksApi'
import Image from 'next/image'
import { useEffect } from 'react'

const BookList = () => {

    const dispatch = useDispatch()
    const { books, isLoading, isSuccess } = useSelector(state => state.book)
    console.log(books);

    useEffect(() => {
        dispatch(makeApi())
        dispatch(GetBooks())
    }, [])

    return (
        <ul className='w-full'>
            {isLoading ? (
                <li className='flex justify-center items-center'>
                    <Image
                        src="/Loading_icon.gif"
                        width={250}
                        height={250}
                        alt='Loading...'
                    />
                </li>
            ) : null}
            {isSuccess && books && books.results && books.results.length > 0 ? (
                books.results.map( book => (
                    <li className='my-16'>
                        <div className='flex justify-center'>
                            <img src={book.formats['image/jpeg']} className='float-left w-20 h-28' />
                            <div className='float-left ml-8 w-2/4'>
                                <h3 className='text-lg font-bold'>{book.title}</h3>
                                {book.authors && book.authors.length > 0 && book.authors.map(author => (
                                    <p className='text-xs text-slate-400'>{`${author.name} ( ${author.birth_year} - ${author.death_year} )`}</p>
                                ))}
                                <p className='text-sm mt-3'>Languages : {book.languages.toString()}</p>
                            </div>
                        </div>
                    </li>
                ))
            ) : (isSuccess) ? <li className='flex justify-center items-center'>
                    <p>No Books Found</p>
                </li> : null
            }
        </ul>
    )
}

export default BookList