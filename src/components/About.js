import AboutImg from '../assets/about.png'

export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='text-white pb-5'>Hi, My name is Mohammed Yousuf . I am a Full stack web developer. I build beatutiful Websites with React.js and Tailwind CSS</p>
                <p className='text-white pb-5'>I am proficient in Frontend skills like Html5,Css3,React.js,Bootstrap, Tailwind and many more.</p>
                <p className='text-white pb-5'>In backend I know Django,Node.js, Express.js, MongoDB, and Mongoose</p>
            </div>
        </div>
    </section>
}