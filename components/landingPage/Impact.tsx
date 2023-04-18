const Impact = () => {
  const text =
    "Here's the services that we offer to you, to ensure both your company's products and employees security";

  type ImpactCard = [image: string, title: string];

  const impactCards: ImpactCard[] = [
    ["image/impact1.png", "Poweful Incident reporting system at the site"],
    ["image/impact2.png", "Poweful and Extra secure transaction recording"],
    ["image/impact3.png", "Improvement in company’ performance stats."],
  ];

  return (
    <div className="bg-impact1 bg-opacity-[0.1]">
      <h1 className="font-extrabold text-3xl text-center">Our impact</h1>
      <p className="text-black text-opacity text-center">{text}</p>
      <div className="flex mt-20 justify-evenly">
        {impactCards?.map((card: ImpactCard) => (
          <div className="rounded-lg bg-[#FDFDFD] w-[25%] py-8 pl-[2%] space-y-[4%]">
            <img className="w-[15%]" src={card[0]} />
            <h1 className="font-bold text-xl w-[60%]">{card[1]}</h1>
            <p className="text-[#3F3F3F] w-[55%]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
