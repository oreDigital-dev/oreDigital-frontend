import LearnMoreBtn from "./LearnMoreBtn"
const Installation = ()=>{
    return(
        <div className="mt-20">
            <div className="flex justify-center gap-x-64">
                <div className="w-1/3">
              <img src="image/camera.png" alt="camera" />
              </div>
              <div className="w-[20vw]">
              <h1 className="font-bold text-4xl">We install high sensitivity tools at the mining site</h1>
              <p className="pt-14">Here’s  the services that we offer to you, to ensure both your company’s products and employees security</p>
                <LearnMoreBtn  /> 
                </div> 
        </div>
        <div className="flex justify-center gap-x-64 mt-28">  
        <div className="w-[20vw]">
            <h1 className="font-bold text-4xl">Every employee is now secure from calamities</h1>
            <p className="pt-6">Here’s  the services that we offer to you, to ensure both your company’s  products and employees security</p>
            <LearnMoreBtn />
            </div>
            <div className="w-1/3">
            <img src="image/inside.png" alt="inside" />
            </div>
        </div>
        </div>
    )
}

export default Installation