import React from "react";
import { ThreeDots } from "react-bootstrap-icons";
function NotificationBody(){
    const content = [
        {
            mine:"Mashyuza Gold mine",
            sector:"Mahyuza",
            district:"Muhanga",
            status:"Fine",
            other:<ThreeDots />
        },
        {
            mine:"Mashyuza Gold mine",
            sector:"Mahyuza",
            district:"Muhanga",
            status:"Fine",
            other:<ThreeDots />
        },
        {
            mine:"Mashyuza Gold mine",
            sector:"Mahyuza",
            district:"Muhanga",
            status:"Fine",
            other:<ThreeDots />
        },
        {
            mine:"Mashyuza Gold mine",
            sector:"Mahyuza",
            district:"Muhanga",
            status:"Fine",
            other:<ThreeDots />
        },

    ]
    const tableData = [
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
        {
            mine:"Mashyuza Gold mine",
            date:"Mon Feb 06 2023 18:51:06 ",
            temperature:"30.0C",
            hummidity:"767mmHg",
            condition:"Peaceful",
            effect:"Fine"
        },
      
    ]
    return(
        <div className="bg-[#F8FAFC] h-full w-[80vw]">
            <div className="w-[75vw] overflow-x-auto">
            <p className="text-2xl font-medium font-6 pl-8 pt-6">Notification center</p>
            <div className="flex">
                {content.map((item) =>(
              // eslint-disable-next-line react/jsx-key
              <div className="bg-[#6DFFB9] w-1/4 pt-6 pl-8 pb-6 rounded-xl mt-8 ml-8">
                <div className="flex justify-between">
                    <div>
                <h1 className="font-outfit text-xl font-semibold">{item.mine}</h1>
                <p className="text-gray-800 text-sm">{item.sector},{item.district}</p>
                 </div>
                 <div className="h-10 w-10 bg-white rounded-full flex items-center mr-8">
                    <i className="text-center  pl-2 text-xl ">{item.other}</i>
                    
                 </div>
                 </div>
                <button className="bg-white mt-8 flex h-8 rounded-2xl pl-4 pr-4 items-center">
                    <div className="h-4 w-4 rounded-full bg-[#6DFFB9]"></div>
                    <p className="pl-2">{item.status}</p>
                </button>

              </div>
              
              ))}
            </div>
            </div>

            <div>
                <div className="flex  justify-between">
                  <div className="mt-6 ml-8">
                    <h1 className="text-2xl font-outfit ">Logs</h1>
                    <p className="font-outfit">Real time information about what happen at the site</p>
                  </div>
                  <div className="flex mt-8">
                  <div className=" bg-white  h-12 w-48 rounded-xl flex font-outfit">

                      <select name="" id="" className="w-full pl-4 pr-2 bg-white">
                        <option value="">Sort logs by</option>
                        <option value="">All</option>
                      </select>
                      </div>
                      <div className="ml-6 bg-white  h-12 w-48 rounded-xl flex font-outfit">
                      <select name="" id="" className="w-full pl-4 pr-2 bg-white">
                        <option value="">Sort logs by</option>
                        <option value="">All</option>
                      </select>
                      </div>
                      {/* <input type="Search" name="" id="" /> */}
                  </div>
                  </div>
                  <div className="mt-12">

                  <table className="min-w-full divide-y divide-gray-200 border-t-2">
            
                    <tbody className="divide-y divide-gray-200 font-inter h-[40vh]">
                      {tableData.map((result) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ">
                            <input type="radio" disabled className="mr-3 bg-gray-100" />
                            {result.mine}
                          </td>
                          <td className="px-6 py-6 text-sm text-gray-800 whitespace-nowrap flex">
                            {result.date}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {result.temperature}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {result.hummidity}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {result.condition}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {result.effect}
                          </td>
                       
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              
            </div>
           
          </div>
        
    )

}
export default NotificationBody;