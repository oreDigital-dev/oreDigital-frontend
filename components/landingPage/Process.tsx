const Process = ()=>{
    const text = "Here's the services that we offer to you, to ensure both your company's products and employees security"
    return(
        <div>
            <div className="mb-16 text-center w-[30%] mx-auto">
                <h1 className="font-extrabold text-5xl">The process</h1>
                <p className="text-[#3F3F3F]">{text}</p>
            </div>
            <div className="flex justify-between mx-20">
                <div className="w-[14%]">
                    <h1 className="font-bold text-xl">Request a workspace</h1>
                    <p>{text}</p>
                </div>
                <div className="w-[14%]">
                    <h1 className="font-bold text-xl">Installation step</h1>
                    <p>{text}</p>
                </div>
                <div className="w-[14%]">
                    <h1 className="font-bold text-xl">Lifetime security</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Process