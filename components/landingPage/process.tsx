const Process = ()=>{
    const text = "Here's the services that we offer to you, to ensure both your company's products and employees security"
    return(
        <div
        className="bg-cover bg-center h-screen w-full flex flex-col"
        style={{ backgroundImage: "url('image/designy.png')" }}
      >
            <div className="mb-16 text-center w-[30%] mx-auto mt-24">
                <h1 className="font-extrabold text-5xl ">The process</h1>
                <p className="text-[#3F3F3F]">{text}</p>
            </div>
            <div className="flex justify-evenly mx-24">
                <div className="w-[25%] bg-[#FDFDFD] space-y-6 rounded-lg py-10 px-8 shadow-md shadow-gray-300 flex">
                    <div className="w-24 border-r-2 border-solid border-gray-200  h-10">1</div>
                    <div className="ml-6">
                    <h1 className="font-bold text-xl">Request a workspace</h1>
                    <p>{text}</p>
                    </div>
                </div>
                <div className="w-[25%] bg-[#FDFDFD] space-y-6 rounded-lg py-10 px-8 shadow-md shadow-gray-300 flex">
                <div className="w-24 border-r-2 border-solid border-gray-200  h-10">2</div>
                <div className="ml-6">
                    <h1 className="font-bold text-xl">Installation step</h1>
                    <p>{text}</p>
                    </div>
                </div>
                <div className="w-[25%] bg-[#FDFDFD] space-y-6 rounded-lg py-10 px-8 shadow-md shadow-gray-300 flex">
                <div className="w-24 border-r-2 border-solid border-gray-200 h-10">3</div>
                <div className="ml-6">
                    <h1 className="font-bold text-xl">Lifetime security</h1>
                    <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process