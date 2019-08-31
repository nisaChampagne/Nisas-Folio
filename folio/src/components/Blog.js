import React from 'react'
import Pending from './pendingfolio.jpg'

export default function Blog(){
    return(
        <div>
            <img src={Pending}  className='pending' alt='pending content' />
            <h1>Blog Coming Soon</h1>
        </div>
    )
}