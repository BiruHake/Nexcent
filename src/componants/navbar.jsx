
function Navbar(){
    return(
            <div className="h-[70px] w-full flex justify-between items-center px-12 xl:px-[120px]">
               <div className="flex flex-row gap-2 text-xl">
                <img src="./src/assets/Icon.png" alt="image" />
                <h1 className="font-bold text-2xl">Nexcent</h1>
               </div>
               <ul className="hidden lg:flex gap-8">
                <li className="text-gray-700 text-md">Home</li>
                <li className="text-gray-700 text-md">service</li>
                <li className="text-gray-700 text-md">Feature</li>
                <li className="text-gray-700 text-md">Product</li>
                <li className="text-gray-700 text-md">Testimonial</li>
               </ul>
               <div className="hidden md:flex gap-2">
                <button className="border-solid border-2 border-green-400 px-8 py-1 rounded-lg text-green-500 font-medium">Login</button>
                <button className="border-solid border-2 border-green-400 px-8 py-1 rounded-lg text-white font-medium bg-green-500">sign Up</button>
               </div>
               <div className="md:hidden">
                <p className="font-medium text-xl">&#x2630;</p>
               </div>
            </div>
        
    )
}
export default Navbar