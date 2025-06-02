import Icon4 from '../assets/Icon4.png';
import Icon5 from '../assets/Icon5.png';
import Icon2 from '../assets/Icon2.png';
function Achievements(){
    return(
        <div className="max-w-[1094px] mx-auto py-12">
            <h1 className="text-2xl font-bold text-green-700 text-center pb-12">Achievements</h1>
            <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="flex flex-col justify-center items-center w-[50%] mb-16">
                    <div>
                    <p className="text-center">Helping a local</p>
                    <h1 className="text-2xl font-bold text-green-700 text-center">business reinvent itself</h1>
                    <p className="text-center">We reached here with our hard work and dedication</p>
                    </div>
                </div>
                <div className="md:w-[50%] grid grid-rows-2 grid-flow-col gap-x-35 md:gap-4">
                    <div>
                        <img className="h-[25px] w-[25px]" src={Icon4} alt="" />
                        <p>2,245,341</p>
                        <p>Members</p>
                    </div>
                    <div>
                        <img className="h-[25px] w-[25px]" src={Icon5} alt="" />
                        <p>46,328</p>
                        <p>Payments</p>
                    </div>
                    <div>
                        <img className="h-[25px] w-[25px]" src={Icon2} alt="" />
                        <p>1,926,4361</p>
                        <p>Event Bookings</p>
                    </div>
                    <div>
                        <img className="h-[25px] w-[25px]" src={Icon3} alt="" />
                        <p>828,867</p>
                        <p>Clubs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Achievements