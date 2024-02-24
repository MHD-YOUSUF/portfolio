import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/quote.PNG';
import websiteImg3 from '../assets/soon.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with Django.',
                link: 'https://github.com/MHD-YOUSUF/king',
                live:'https://mdyousuf.pythonanywhere.com/',
            },
            {
                image: websiteImg2,
                description: 'A Random Qoute-generator, Built with Html,Css & JavaScript',
                link: 'https://github.com/MHD-YOUSUF/Qoute-generator',
                live:'https://mhd-yousuf.github.io/Qoute-generator/',
            },
            {
                image: websiteImg3,
                description: 'Working On update Soon',
                link: '',
                live:'',
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Html5,Css,Js,Django. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn px-10 hover:text-[#2b2d77] justify-items-end' target='_blank' href={project.link}>View Project</a>
                                <a className='btn hover:text-[#2b2d77]' target='_blank' href={project.live}>Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}