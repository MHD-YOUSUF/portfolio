import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import {AiOutlineLinkedin} from "react-icons/ai";

export default function Hero(){

    const config={
        subtitle:'Im a Full-stack developer',
        social: {
            twitter: 'https://twitter.com/Yousuf_amazing',
            whatsapp: 'https://wg.me/918903162734',
            linkedin: 'https://www.linkedin.com/in/mhd-yousuf',
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi, <br/> I'm Mohammed <span className='text-black'>Yousuf</span>
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={30}/></a>
                <a href={config.social.linkedin}className='pr-5 hover:text-white'><AiOutlineLinkedin size={30}/></a>
                <a href={config.social.whatsapp}className='hover:text-white'><MdOutlineWhatsapp size={30}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}