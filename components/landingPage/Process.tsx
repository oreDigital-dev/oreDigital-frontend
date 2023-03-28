const Process = ()=>{
    const text = "Here's the services that we offer to you, to ensure both your company's products and employees security"
    return(
        <div className="">
            <div className="mb-16 text-center w-[30%] mx-auto">
                <h1 className="font-extrabold text-5xl">The process</h1>
                <p className="text-[#3F3F3F]">{text}</p>
            </div>
            <div className="flex justify-evenly mx-24">
                <div className="w-[20%] bg-[#FDFDFD] space-y-4 rounded-lg py-6 px-8 border">
                    <h1 className="font-bold text-xl">Request a workspace</h1>
                    <p>{text}</p>
                </div>
                <div className="w-[20%] bg-[#FDFDFD] space-y-4 rounded-lg py-4 px-8 border">
                    <h1 className="font-bold text-xl">Installation step</h1>
                    <p>{text}</p>
                </div>
                <div className="w-[20%] bg-[#FDFDFD] space-y-4 rounded-lg py-4 px-8 border">
                    <h1 className="font-bold text-xl">Lifetime security</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Process