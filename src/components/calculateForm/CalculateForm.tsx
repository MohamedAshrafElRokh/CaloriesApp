import React,{FC,useRef,useState} from "react"
import dataModal from "../dataModal"

interface Props  {
    
    onGetData(data:dataModal):void
}

export const CalculateForm: FC <Props>= ({onGetData}) =>
{
    const [option,setOption] = useState<string>('')
    const weightRef = useRef<HTMLInputElement>(null)
    const hightRef = useRef<HTMLInputElement>(null)

    const onChaneHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>
    {
        setOption(e.target.value)
        console.log(e.target.value)
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        const inputVlaue = {
            weight:  weightRef.current!.value,
            height: hightRef.current!.value,
            option: option
        }
        
       
        return onGetData(inputVlaue)
    }
     
    
    return <form onSubmit={submitHandler}>
        <label htmlFor="text" > Enter Your Body Weight</label>
        <input type='text' id="text" ref={weightRef}/>
        <br />
        <label htmlFor="text" > Enter Your Body Hight</label>
        <input type='text' id="text" ref={hightRef} />
        <br />
        <select id="num-select" defaultValue={option} onChange={(e)=>onChaneHandler(e)}>
            <option value="move to" >
                Select activity
            </option>
        <option value="1.3">1.3</option>
        <option value="2.2">2.2</option>
        <option value="2.6">2.6</option>
        </select>
        <button>Calculate</button>
    </form> 
}