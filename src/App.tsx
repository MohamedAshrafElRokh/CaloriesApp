import React,{FC,useState} from 'react';
import { CalculateForm } from './components/calculateForm/CalculateForm';
import ModalBody from './components/Modal';
import dataModal from './components/dataModal';
import './App.css';

// interface Modal
// {
//   getDataHandler : (input:dataModal) =>void
// }

const App :FC = () => {

  const [data,setData] = useState<ModalBody>()
  const getDataHandler = (input:dataModal):void =>
  {
    const weight  = input.weight
    const option = input.option
    const height = input.height

    const bmi = parseInt(weight) / (parseInt(height)**2)
    console.log("bmi", bmi)
    const calories = parseInt(weight) * 22 *  parseInt(option)
    console.log("calories", calories)
    // const protein = parseInt(weight) * 2.4
    // console.log("protien", protein)
    // const proteinCalories = protein  * 4
    // const fat = parseInt(weight) * 0.4
    // console.log("fat", fat)
    // const fatCalories = fat *4
    // const carb = calories - proteinCalories - fatCalories / 4
    // console.log("carb", carb)
    // const carbCalories = carb * 9

   
   
  
    
    
  
   
    

  }
  return (
    <div className="App">
     <CalculateForm onGetData = {getDataHandler}/>
    </div>
  );
}


export default App;
