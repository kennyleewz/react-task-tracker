import React from 'react'

function Button({btntext}) {

  const onClick = (event) => {
    event.preventDefault()
    console.log(event.type)
  }

  return (
    <button 
        className='btn'
        onClick={onClick}
    >
        {btntext}
    </button>
  )
}

export default Button