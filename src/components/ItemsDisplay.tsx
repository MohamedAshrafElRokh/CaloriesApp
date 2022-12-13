import ModalBody from "./Modal"
import react ,{FC} from 'react'
interface Props
{
    bodyData: ModalBody | null
}

const ItemsDisplay :FC <Props> = ({bodyData})=>
{
 
   

    return(
        <>
            {bodyData && <ul className="bg-slate-400">
                <li>BMR : {bodyData?.bmr} Calories</li>
                <li>AMR: {bodyData.amr} Calories</li>
                <li>Fat : {bodyData.fat}g</li>
                <li>Protein : {bodyData.protein} g</li>
                <li>Carb : {bodyData.carb} g</li>
            </ul>}
        </>
        
    )
}


export default ItemsDisplay