import React,{FC,useRef,useState} from "react"
import dataModal from "../dataModal"
import error from "./error"
// import ErrorModule from "./ErrorModule"
interface Props  {
    
    onGetData(data:dataModal):void
}

export const CalculateForm: FC <Props> = ({onGetData}) =>
{
    const [option,setOption] = useState<string>('')
    const [gender,setGender] = useState<string>('')
    const weightRef = useRef<HTMLInputElement>(null)
    const hightRef = useRef<HTMLInputElement>(null)
    const AgeRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<error | null > ()
   

    const onChaneHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>
    {
        setOption(e.target.value)
       
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>
    {

        e.preventDefault()
       
        const weight = weightRef.current!.value
        const height = hightRef.current!.value
        const age = AgeRef.current!.value 

        console.log(weight, height, age);
            
        if (weight.length === 0) setError((prev) => ({ ...prev, errorWeight: 'Please enter a valid weight' }))

        else setError((prev) => ({ ...prev, errorWeight: '' }))
        
        if (height.length === 0 || +height < 1) setError((prev) => ({ ...prev, errorHeight: 'Please enter a valid Height' }))
        else setError((prev) => ({ ...prev, errorHeight: '' }))
        
        if (age.length === 0 || +age < 1) setError((prev) => ({ ...prev, errorAge: 'Please enter a valid Age' }))
        else setError((prev) => ({ ...prev, errorAge: '' }))
        

        const inputVlaue = {
            weight:  weightRef.current!.value,
            height: hightRef.current!.value,
            option: option,
            age: AgeRef.current!.value,
            gender:gender
        }
        
       
        return onGetData(inputVlaue)
    }
     
    
    return (
        <>
            {/* {error && <ErrorModule error = {error} />} */}
            <form onSubmit={submitHandler}>
                <label htmlFor="text" > Enter Your Body Weight</label>
                <input type='number' id="text" ref={weightRef} />
                <div>{error?.errorWeight }</div>
                <br />
                <label htmlFor="text" > Enter Your Body Hight</label>
                <input type='number' id="text" ref={hightRef} />
                <div>{error?.errorHeight}</div>
                <br />
                <label htmlFor="text" > Enter Your Age</label>
                <input type='number' id="text" ref={AgeRef} />
                <div>{error?.errorAge}</div>
                <br />
                <div >
                    <input type="radio" value="Male" name="gender" onChange={e => setGender(e.target.value)} /> Male
                    <input type="radio" value="Female" name="gender" onChange={e => setGender(e.target.value)} /> Female
                </div>
                <select id="num-select" defaultValue={option} onChange={(e) => onChaneHandler(e)}>
                    <option value="move to" >
                        Select activity
                    </option>
                    <option value="1.2">Sedentary</option>
                    <option value="1.375">Lightly active</option>
                    <option value="1.55">Moderately active</option>
                    <option value="1.725">Active</option>
                    <option value="1.9">Very active</option>

                </select>
                <button>Calculate</button>
            </form> 
        </>
        
    ) 
}