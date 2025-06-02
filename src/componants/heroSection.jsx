import logo from '../assets/Ilustration.png';
export default function HeroSection(){
    return(
        <div>
            <div className="max-w-[1094px] mx-auto my-10 flex flex-col px-12 md:flex-row">
                 <div className="flex flex-col">
                    <div className="font-bold text-3xl md:text-4xl">
                    <h1 className="p-2">Lessons and insights</h1>
                    <h1 className=" text-green-700">from 8 years</h1>
                    </div>
                    <div className="flex flex-col items-center">
                    <p className="p-12 text-lg flex flex-wrap">Where to grow your business as a photographer: site or social media?</p>
                    <button className="border-solid border-2 border-green-400 px-8 py-1 rounded-lg text-white font-medium bg-green-500">Register</button>
                    </div>
                 </div>
                 <div className="flex justify-center items-center mt-12">
                     <img className="object-cover" src={logo} alt="image" />
                 </div>
            </div>
        </div>
    )
}