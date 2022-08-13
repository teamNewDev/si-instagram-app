import React from 'react'


const Footer =({addPhoto}) => {
  return (
    <div className='footer'>
        <span className='f-links'>
            <button >
              <i className='fas fa-home' />
            </button>
            <button >
              <i className='fas fa-comment-alt' />
            </button>
            <button >
              <i className='fas fa-heart' />
            </button>
            <button >
              <i className='fas fa-compass' />
            </button>
        </span>
    </div>
  )
}

export default Footer

