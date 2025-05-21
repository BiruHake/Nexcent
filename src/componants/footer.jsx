function Footer(){
    return(
        <div>
             <div className="max-w-[1094px] mx-auto bg-gray-800 text-white flex flex-col justify-center items-center gap-6 my-8 md:flex-row md:items-start py-12">
                 <div className="">
                    <h1 className="text-xl font-semibold">Nexcent</h1>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                 </div>
                 <div>
                      <ul>
                        <li className="text-xl font-semibold">Company</li>
                        <li className="text-md font-light">About Us</li>
                        <li className="text-md font-light">Contact Us</li>
                        <li className="text-md font-light">Blog</li>
                        <li className="text-md font-light">Pricing</li>
                        <li className="text-md font-light">Testonomials</li>
                      </ul>
                 </div>
                 <div>
                        <ul>
                        <li className="text-xl font-semibold">Support</li>
                        <li className="text-md font-light">Help Center</li>
                        <li className="text-md font-light">Terms of service</li>
                        <li className="text-md font-light">Legal</li>
                        <li className="text-md font-light">Privacy policy</li>
                        <li className="text-md font-light">Status</li>
                      </ul>
                 </div>
                 <div>
                       <ul>
                        <li className="text-md font-light">Set up to date</li>
                        <li className="text-md text-gray-400">Your email address</li>
                       </ul>
                 </div>
             </div>
        </div>
    )
}
export default Footer