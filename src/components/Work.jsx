import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'WorkItem 1',
        duration: '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit repudiandae enim adipisci quisquam consequatur asperiores sunt rem earum, ea quod id laborum libero! Unde hic odio sequi quam neque.'
    },
    {
        year: 2022,
        title: 'WorkItem 2',
        duration: '1 year',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus dolorem aut, sapiente aspernatur eos totam pariatur assumenda blanditiis amet porro officia neque exercitationem est similique. Unde labore ex ea.'
    },
    {
        year: 2023,
        title: 'WorkItem 3',
        duration: '3 years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus dolorem aut, sapiente aspernatur eos totam pariatur assumenda blanditiis amet porro officia neque exercitationem est similique. Unde labore ex ea.'
    },
    {
        year: 2026,
        title: 'WorkItem 4',
        duration: '4 years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus dolorem aut, sapiente aspernatur eos totam pariatur assumenda blanditiis amet porro officia neque exercitationem est similique. Unde labore ex ea.'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, index) => (
        <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  )
}

export default Work