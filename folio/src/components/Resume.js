import React from 'react'
import PDF from './Nisa-Champagne2019.pdf'

export default function Resume(){

    return(
        <div className='resumeHolder'>
        <a href={PDF} download className='download'className="resumeBtn">Click to download resume</a>
        </div>
    )
}