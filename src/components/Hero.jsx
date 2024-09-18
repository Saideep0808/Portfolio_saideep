import React from 'react'
import HeroImage from '../assets/hero-image.jpg' // Ensure this path is correct

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-14' id="home">
            <div>
                <img
                    src={HeroImage}
                    alt="Saideep Kunamalla"
                    className='mx-auto mb-4 w-25 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
                />
                <h1 className='text-4xl font-bold'>
                    I&apos;m{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        Saideep Kunamalla
                    </span>
                    , Frontend Developer
                </h1>
                <p className='mt-4 text-lg text-gray-300'>
                    I specialize in building dynamic, responsive websites with modern web technologies.
                    My focus is on delivering seamless user experiences through clean, efficient
                    code and intuitive design.
                </p>
            </div>
            <div className='mt-8 space-x-4'>
            
            </div>
        </div>
    )
}

export default Hero
