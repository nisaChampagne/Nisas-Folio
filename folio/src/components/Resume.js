import React from 'react'
import PDF from './nisaChampagne2019resume.pdf'

export default function Resume(){

    return(
        <div className='resumeHolder'>
            <iframe className="resume"src="https://resume.creddle.io/embed/gj9aeancodo"
             height="1100" seamless></iframe>
            <a href={PDF} download className='download'className="resumeBtn">Click to download resume</a>
        </div>
    )
}