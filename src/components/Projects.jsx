import React from 'react'
import ProjectItem from './ProjectItem'
import Hangman from '../assets/Hangman.png'
import Pokedex from '../assets/Pokedex.png'
import Todo from '../assets/Todo.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, impedit voluptas corporis repudiandae enim dolores tempora necessitatibus debitis reprehenderit ratione similique quisquam architecto recusandae repellat quis sapiente nemo sint nihil.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem title='Hangman' img={Hangman} projectUrl='/hangman' />
        <ProjectItem title='Pokedex' img={Pokedex} projectUrl='/pokedex' />
        <ProjectItem title='Todo' img={Todo} projectUrl='/todo' />
      </div>
    </div>
  )
}

export default Projects