import {BsTwitter ,BsFacebook, BsInstagram,BsPinterest} from 'react-icons/bs';
import HeroPic from  '../assets/photo.jpg';


const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl'>Pratipal Dhaulakhandi</h1>
        <hr/>
        <p className='mt-10  text-slate-300 font-sans'>
        As a third-year Computer Engineering student, I've built a solid foundation in both hardware and software, allowing me to design and implement various tech solutions. Through my coursework, I’ve gained strong knowledge in areas like data structures, algorithms, embedded systems, and digital logic. My hands-on projects have pushed me to solve complex problems and apply what I’ve learned in real-world scenarios. I’m particularly excited about diving deeper into fields like software development, system architecture, and machine learning. I look forward to gaining more experience through internships and projects, where I can continue to grow and contribute to innovative tech solutions.  
        </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="photo" width={450} height={250} className='rounded-full border-8  border-white'></img>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About Me</p>
            <p className='text-slate-300'>
                Third year Engineering student with knowledge of full stack 
                development
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white '>
                Show More...
            </button>

            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsFacebook size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                <BsInstagram size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                <BsPinterest size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                <BsTwitter size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
            </div>
        </div>
    </section>
  )
}

export default hero
