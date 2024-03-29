import { ArrowRight } from "react-bootstrap-icons"
const IncidentCard = ()=>{
    const title = "Incident reporting system installation"
    const content = "Here's the services that we offer to you, to ensure both your company's products and employees security"
    const btn = "Learn more"

    type IncCard = {
        image: string,
    }

    const Incard1: IncCard ={
        image: "image/incident-card.png",       
    }

    const Incard2: IncCard ={
        image: "image/incident-card2.png",
    
    }

    const Incard3: IncCard ={
        image: "image/incident-card3.png",
    
    }

    const cards: IncCard[] = [Incard1, Incard2, Incard3];

    return(
        <div className="flex justify-evenly mb-8 mt-10">
           {cards?.map((card: IncCard)=>(
           <div className="w-[20%] space-y-8 rounded-2xl border border-md border-gray-100">
                <img src={card.image}></img>
                <div className="px-4">
                    <p className="font-extrabold text-xl mb-4 w-64 font-jost">{title}</p>
                    <p className="font-open-sans">{content}</p>
                    <button className="hover:bg-black hover:text-white bg-[#F5F5F5] rounded-lg px-5 py-2 mt-8 mb-4 flex items-center font-open-sans">{btn}<ArrowRight className="ml-2"/></button>          
                </div>                
            </div>
           ))}
        </div>
    )

}

export default IncidentCard