import { Grid,PinMap,ExclamationTriangle,BoxSeam,FileEarmarkText} from "react-bootstrap-icons"

export const menu = [
   {
    id:"general",
    link:"General",
    icon:<Grid />
   },
   {
      id:"sites",
      link:"Sites",
      icon:<PinMap />

   },
   {
      id:"notification",
      link:"Notification center",
      icon:<ExclamationTriangle />
   },
   {
      id:"employees",
      link:"Employees",
      icon:<BoxSeam />
   },
   {
      id:"statistics",
      link:"Statistics",
      icon:<Grid />
   },
   {
      id:"archives",
      link:"Archives",
      icon:<FileEarmarkText />

   }
   
]