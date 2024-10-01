import React from 'react'

const Project = () => {
return (
    <div className="relative flex h-screen">
        <div className="h-[100%] w-2/5 bg-black p-2 flex flex-col items-center justify-start">
            <nav className="h-24 w-full flex items-center justify-center">
                <h1 className="text-center text-white text-4xl tracking-widest">PROTOFILO.</h1>
            </nav>
            <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/013/528/887/small_2x/black-halftone-dots-png.png" 
                alt="Dots" 
                className="mt-4" 
                style={{ width: '400px', height: '400px' }} 
            />
        </div>
        <div className="h-[100%] w-3/5 bg-gray-300 flex flex-col items-center justify-start">
            <nav className="h-24 w-full flex items-center justify-around">
                <a href="#home" className="hover:underline hover:underline-offset-4 hover:text-yellow-500 transition duration-300">HOME</a>
                <a href="#about" className="hover:underline hover:underline-offset-4 hover:text-yellow-500 transition duration-300">ABOUT</a>
                <a href="#works" className="hover:underline hover:underline-offset-4 hover:text-yellow-500 transition duration-300">WORKS</a>
                <a href="#blog" className="hover:underline hover:underline-offset-4 hover:text-yellow-500 transition duration-300">BLOG</a>
                <a href="#contact" className="hover:underline hover:underline-offset-4 hover:text-yellow-500 transition duration-300">CONTACT</a>
            </nav>
            <img className="h-full" src="https://images.unsplash.com/photo-1517635408436-a97a4e119abc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="absolute left-[25%] bottom-[15%] flex flex-col items-start justify-start pointer-events-none">
            <h2 className="text-white text-6xl tracking-widest">MY NAME IS</h2>
            <h1 className="text-white text-8xl font-bold">ANKIT RAJ</h1>
            <button className="mt-4 bg-yellow-500 text-black py-2 px-10 text-2xl font-bold tracking-wide">I&apos;M A UI DEVELOPER</button>
        </div>
    </div>
)
}

export default Project