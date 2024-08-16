import React from 'react'
import WorkItem from './WorkItem'
import FadeInSection from './FadeInSection'

const data = [
    {
        year: 2020,
        title: 'Junior Project Manager - SLB',
        duration: '1 year',
        details: 'As part of the TUC project objectives, I provide operational support, which includes managing both internal and external relationships, such as those with social media platforms and key account partners. I am also involved in researching ways to optimize KPIs and in implementing ISO 9001 standards.'
    },
    {
        year: 2020,
        title: 'Project Consultant Freelance - Homonoia Paris',
        duration: '3 years',
        details: 'I focus on the ethical optimization of the supply chain, assessing client needs, and developing strategic recommendations. Additionally, I ensure that deadlines and budgets are met.'
    },
    {
      year: 2022,
      title: 'Account Manager - Sennder',
      duration: '1.5 year',
      details: 'I ensure operational excellence for major accounts, including Nestlé, Ecosystèmes, and Decathlon. This involves producing weekly performance reports and optimizing operational processes in collaboration with Carrier Managers. Additionally, I autonomously manage smaller client accounts.'
  },
    {
      year: 2023,
      title: 'Web developer',
      duration: '1 year',
      details: 'I recently completed a web developer bootcamp, where I gained hands-on experience in coding and web development. During this time, I also worked on several personal projects, which helped me to apply my new skills and deepen my understanding of various development tools and methodologies.'
  },
]
const Work = () => {
  return (
    <FadeInSection>
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-7'>Work</h1>
      {data.map((item, index) => (
        <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
    </FadeInSection>
  )
}

export default Work