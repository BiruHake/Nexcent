import logo1 from '../assets/Logo1.png';
import logo2 from '../assets/Logo2.png';
import logo3 from '../assets/Logo3.png';
import logo4 from '../assets/Logo4.png';
import logo5 from '../assets/Logo5.png';
function Our_client(){
   return(
    <div className=" max-w-[1094px] mx-auto px-12 py-4">
         <div className="flex flex-col items-center py-2">
            <h1 className="font-bold text-2xl">Our Clients</h1>
            <p className="font-medium">We have been working with some Fortune 500+ clients</p>
         </div>
          <div className="flex justify-between mt-8">
                <img className="h-[30px] w-[30px] object-cover" src={logo1} alt="" />
                <img className="h-[30px] w-[30px] object-cover" src={logo2} alt="" />
                <img  className="h-[30px] w-[30px] object-cover" src={logo3} alt="" />
                <img className="h-[30px] w-[30px] object-cover" src={logo4} alt="" />
                <img className="h-[30px] w-[30px] object-cover" src={logo5} alt="" />
            </div>
    </div>
   )
}
export default Our_client