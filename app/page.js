'use client'

import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

export default function Home() {
  return (
    <div className='border w-4/5 h-auto mx-auto flex flex-wrap'>
      <SearchBar />
      <BookList />
    </div>
  )
}
