import LearnMoreBtn from "./LearnMoreBtn"
const Installation = ()=>{
    return(
        <div>
            <div className="flex items-center justify-between ml-[8rem] border">
                <img src="image/installation.png" className="w-[39%] h-3/5"  />
                <div className="space-y-8 pl-[8 rem] border w-[55%] flex flex-col align-center">
                    <h1 className="font-bold text-5xl w-[40%]">We install high sensitivity tools at the mining site</h1>
                    <p className="text-[#3F3F3F] w-[40%]">Here's the services that we offer to you, to ensure both your company's products and employees security</p>
                    <div className="w-[20%]">
                        <LearnMoreBtn />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Installation