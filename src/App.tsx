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
  
    setData({
      bmr: gender === 'Male' ?
        88.362 + (13.397 * parseInt(weight)) + (4.799 * parseInt(height)) - (5.677 * parseInt(age))
        : 447.593 + (9.247 * parseInt(weight)) + (3.098 * parseInt(height)) - (4.330 * parseInt(age)),

      amr: gender === 'Male' ? (88.362 + (13.397 * parseInt(weight)) + (4.799 * parseInt(height)) - (5.677 * parseInt(age))) * parseFloat(option)
        : (447.593 + (9.247 * parseInt(weight)) + (3.098 * parseInt(height)) - (4.330 * parseInt(age))) * parseFloat(option),

      fat: parseInt(weight) * 0.4, 

      protein: parseInt(weight) * 2.4,

      proteinCal: (parseInt(weight) * 2.4) * 4,

      fatCal: (parseInt(weight) * 0.4) * 4,

      carb: gender === 'Male' ?
       ((88.362 + (13.397 * parseInt(weight)) + (4.799 * parseInt(height)) - (5.677 * parseInt(age))) - ((parseInt(weight) * 2.4) * 4) - ((parseInt(weight) * 0.4) * 4)) /4
        : ((447.593 + (9.247 * parseInt(weight)) + (3.098 * parseInt(height)) - (4.330 * parseInt(age))) - ((parseInt(weight) * 2.4) * 4) - ((parseInt(weight) * 0.4) * 4))/4,
      
    })
    console.log(data);
    
  }
  

  
  return (
    <div className="App">
     <CalculateForm onGetData = {getDataHandler} />
     <ItemsDisplay bodyData = {data? data:null}/>
    </div>
  );
}


export default App;
