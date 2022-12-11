import ModalBody from "./Modal"
import react ,{FC} from 'react'
interface Props
{
    bodyData: ModalBody | null
}

const ItemsDisplay :FC <Props> = ({bodyData})=>
{
 
   

    return(
        <div className="bg-black">
            {bodyData?.calories}
        </div>
    )
}


export default ItemsDisplay