function Our_client(){
   return(
    <div className=" max-w-[1094px] mx-auto px-12 py-4">
         <div className="flex flex-col items-center py-2">
            <h1 className="font-bold text-2xl">Our Clients</h1>
            <p className="font-medium">We have been working with some Fortune 500+ clients</p>
         </div>
          <div className="flex justify-between mt-8">
                <img className="h-[30px] w-[30px] object-cover" src=".\src\assets\Logo1.png" alt="" />
                <img className="h-[30px] w-[30px] object-cover" src=".\src\assets\Logo2.png" alt="" />
                <img  className="h-[30px] w-[30px] object-cover" src=".\src\assets\Logo3.png" alt="" />
                <img className="h-[30px] w-[30px] object-cover" src=".\src\assets\Logo4.png" alt="" />
                <img className="h-[30px] w-[30px] object-cover" src=".\src\assets\Logo5.png" alt="" />
            </div>
    </div>
   )
}
export default Our_client