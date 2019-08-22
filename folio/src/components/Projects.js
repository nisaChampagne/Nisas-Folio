import React from "react";
import PokeDex from './pokedexfolio.png'
import Hogwarts from './hogwarts.png'
import Todo from './todofolio.png'
import posed from 'react-pose'

export default function Projects(){

    const Box = posed.div({
        hoverable: true,
        draggable: 'x',
        dragBounds: { left: '-90%', right: '90%' },
        init: { scale: 0.9 },
        hover: { scale: 1 },
        drag: { scale: 1.1 }
      })

    
    return(
        <div className='projectsContainer'>
            <Box className='projects'>
                <h3>Hogwarts Sorting Hat Quiz</h3>
                <img src={Hogwarts} alt='hogwarts-preview' className='pokedex'/>
                <a href='https://github.com/nisaChampagne/React-Sorting-Hat'>GitHub Link</a>
                <a href='https://react-sorting-hat.nchampag23.now.sh/'>Hosted</a>
            </Box>
            <Box className='projects'>
            <h3>React Todo List</h3>
            <img src={Todo} alt='todo-preview' className='pokedex'/>
                <a href='https://github.com/nisaChampagne/React-Todo'>Github Link </a>
                <a href='https://react-todo-4bm2326a5.now.sh/'>Hosted</a>
            </Box>
            <Box className='projects'>
                <h3>Simple PokeDex</h3>
                <img src={PokeDex} alt='pokedex-preview' className='pokedex'/>
                <a href='https://github.com/nisaChampagne/Sideprojectpokedex'>Github Link</a>
                <a href='https://pokedex.nchampag23.now.sh/'>Hosted</a>
            </Box>
            <Box className='projects'>
                <h3>Client Side Authentication Practice</h3>
                <Box>
                    <iframe className='videoproject' src="https://www.loom.com/embed/2e3fa99ec5514405a08e32ddd3cb03cf"></iframe>
                </Box>
                <a href='https://github.com/nisaChampagne/Auth-Friends'>Github Link</a>
            </Box>
        </div>
    )

    
}