import React from 'react'
import Button from './shared/Button'

function Header( { title } ) {
  return (
    <header className='header'>
        <h1 style={{color: 'black'}}>{title}</h1>
        <Button btntext='Add'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header