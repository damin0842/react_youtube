import React from 'react'
import { SearchBar } from './index'
import { BsYoutube } from 'react-icons/bs'
const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <BsYoutube className="icon" /> Dev Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderConts
