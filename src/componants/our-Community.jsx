function Over_Community(){
    return(
        <>
         <div className="max-w-[1094px] flex flex-col justify-center items-center mx-auto mt-8">
            <div>
                <h1 className="text-green-500 font-bold text-2xl text-center py-2">Our community</h1>
                <p className="text-md text-center">Manage your entire community in a single system </p>
                <p className="text-md text-center">Who is Nextcent suitable for?</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-14 lg:flex-row">
                <div className="flex flex-col justify-center items-center gap-y-2 p-[20px] my-[30px] shadow-2xl">
                    <img className="h-[48px] w-[49px]" src=".\src\assets\Icon1.png" alt="" />
                    <h1 className="font-bold text-lg">Membership Organisations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 p-[20px] m-[8px] shadow-2xl">
                    <img className="h-[48px] w-[49px]" src=".\src\assets\Icon2.png" alt="" />
                    <h1 className="font-bold text-lg">National Associations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 p-[20px] m-[8px] shadow-2xl bg-gray-200">
                    <img className="h-[48px] w-[49px]" src=".\src\assets\Icon3.png" alt="" />
                    <h1 className="font-bold text-lg">Clubs And Groups</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
         </div>
        </>
    )
}
export default Over_Community