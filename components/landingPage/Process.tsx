const Process = () => {
  const text =
    "Here's the services that we offer to you, to ensure both your company's products and employees security";
  type processCard = [no: number, title: string];
  const cards: processCard[] = [
    [1, "Request a worspace"],
    [2, "Installation step"],
    [3, "Lifetime security"],
  ];

  return (
    <div className="flex flex-col space-y-[4%]">
      <div className="mx-auto w-[29%] text-center">
        <h1 className="font-bold text-4xl mb-2">The Process</h1>
        <p className="text-[#3F3F3F] text-opacity-[0.6]">{text}</p>
      </div>
      <div className="flex justify-evenly ">
        {cards?.map((card: processCard) => (
          <div className="rounded-lg shadow-lg w-[20%] px-8 py-8 mb-8 bg-[#FDFDFD]">
            <div className="flex items-center space-x-2">
              <p>{card[0]}</p>
              <div className="border border-r-1 border-r-[#D9D9D9] h-8"></div>
            </div>
            <div className=" m-auto">
              <h1 className="font-extrabold text-xl mb-4">{card[1]}</h1>
              <p className="text-[#3F3F3F]">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#5A3FFF] font-semibold mx-auto"> We offer you 2 months trying our system for free</p>
    </div>
  );
};

export default Process;
