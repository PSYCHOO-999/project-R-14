import React from 'react'

const Project = () => {
return (
    <div className="relative flex h-screen">
        <div className="h-[100%] w-2/5 bg-black p-2 flex flex-col items-center justify-start">
            <nav className="h-24 w-full flex items-center justify-center">
                <h1 className="text-center text-white">Portfolio</h1>
            </nav>
        </div>
        <div className="h-[100%] w-3/5 bg-gray-300 p-2 flex flex-col items-center justify-start">
            <nav className="h-24 w-full flex items-center justify-around">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#works">Works</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
            <img className="h-full" src="https://images.unsplash.com/photo-1517635408436-a97a4e119abc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className="text-white text-4xl">MY NAME IS</h2>
            <h1 className="text-white text-4xl">Ankit Raj</h1>
            <button className="mt-4 bg-yellow-500 text-black py-2 px-4">I'M A UI DEVELOPER</button>
        </div>
    </div>
)
}

export default Project