import React,{FC,useState} from 'react';
import { CalculateForm } from './components/calculateForm/CalculateForm';
import ModalBody from './components/Modal';
import dataModal from './components/dataModal';
import ItemsDisplay from './components/ItemsDisplay';
import './App.css';



const App :FC = () => {

  const [data,setData] = useState<ModalBody | null >(null)
  const getDataHandler = (input:dataModal):void =>
  {
    const weight = input.weight
    const height = input.height
    const age = input.age
    const option = input.option
    const gender = input.gender
  
   
    
      const calories = parseInt(weight) * 22 * parseFloat(option)
      const protein = parseInt(weight) * 2.4
      const proteinCal = protein * 4
      const fat = parseInt(weight) * 0.4
      const fatCal = fat * 4
      const carb = calories - proteinCal - fatCal / 4
    setData({
      bmr: gender === 'Male' ?
        88.362 + (13.397 * parseInt(weight)) + (4.799 * parseInt(height)) - (5.677 * parseInt(age))
        : 447.593 + (9.247 * parseInt(weight)) + (3.098 * parseInt(height)) - (4.330 * parseInt(age)),
      calories: calories,
      fat: fat, carb: carb,
      protein: protein
    })
    
  }
  

  
  return (
    <div className="App">
     <CalculateForm onGetData = {getDataHandler} />
     <ItemsDisplay bodyData = {data? data:null}/>
    </div>
  );
}


export default App;
