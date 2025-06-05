import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img 
  className='w-full h-screen object-cover scale-x-[-1]' 
  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  alt="" 
/>
        <div className='w-full h-screen absolute top-0 left-0 bg-black/40'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-6xl text-3xl font-bold text-white'>I'm Alexis Helm</h1>  
                <h2 className='flex sm:text-4xl text-2xl pt-4 text-white'>I'm a<TypeAnimation
      sequence={[
        "Full-Stack Developer",
        2000,
        "problem solver",
        2000,
        "creator of scalable solutions",
        2000,
        "builder of intuitive interfaces",
        2000
      ]}
      wrapper="div"
      cursor={true}
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a 
              href="https://github.com/Lydoww" 
              target="_blank" 
              aria-label="GitHub"
            >
              <FaGithub className='cursor-pointer text-white w-8 h-8' size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/alexis-helm/" 
              target="_blank" 
              aria-label="LinkedIn"
            >
              <FaLinkedin className='cursor-pointer text-white w-8 h-8' size={20} />
            </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main